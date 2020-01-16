import AjaxService from "../services/AjaxService";
import { BaseDependency } from "../services/DependencyInjector";
import Question from "../models/Question";
import { GameState, ProgressState, QuestionState } from "../models/GameState";

export default class GameService extends BaseDependency {
  static id = "GameService";

  username = " ";
  isFetchingAllQuestions = false;
  gameState = ProgressState.EMPTY;
  // gameState = ProgressState.END;
  currentQuestionPos: number = 1;
  questionState = QuestionState.START;
  currentAnswer: number;
  correctAnswer: number = null;
  score = null;
  rank = 0;
  questionsMap: Map<string | number, Question> = new Map();

  setUsername = (name: string) => {
    this.username = name;
    this.update();
  };

  getAllQuestions = async (withAuth = false) => {
    this.isFetchingAllQuestions = true;
    const questions = await AjaxService.fetchAllQuestions(withAuth);
    if (questions && questions.length > 0) {
      this.questionsMap = new Map();
      questions.forEach(q => this.questionsMap.set(q.position, q));
      this.update();
    } else {
      // console.log(questions);
    }
  };

  getCurrentGameState = async () => {
    // return;
    const result = await AjaxService.getCurrentGameState();
    if (result) {
      this.gameState = result.progress;
      this.questionState = result.questionState;
      this.currentQuestionPos = result.question;

      if (this.gameState === ProgressState.PLAYING) {
        const currentQn = await AjaxService.fetchQuestion(
          this.currentQuestionPos
        );
        this.questionsMap.set(currentQn.position, currentQn);
        this.getUserState();

        // TODO: Fetch answer for current question
      }

      this.update();
      return true;
    } else {
      return false;
    }
  };

  getCurrentQuestion = () => {
    return this.questionsMap.get(this.currentQuestionPos);
  };

  preloadQuestion = async (qnPos: number | string = 1) => {
    const question = await AjaxService.fetchQuestion(qnPos);
    if (question) {
      this.questionsMap.set(qnPos, question);
      // console.log(this.questionsMap);
    }
  };

  handleSubmitResponse = (choice: number) => {
    this.currentAnswer = choice;
    this.update();
  };

  getUserState = async (force = false) => {
    if (this.questionState === QuestionState.END || force) {
      const response = await AjaxService.fetchUserRank();
      if (response) {
        const [rank, score, username] = response;
        this.rank = rank;
        this.score = score;
        this.username = username;
        this.update();
      }
    }
  };

  preloadImages = () => {
    // Good ol' pyramid of doom
    if (this.questionsMap.size > 0) {
      this.questionsMap.forEach(qn => {
        qn.images.forEach((img, idx) => {
          AjaxService.fetchImageAsBase64(img.url).then(
            base64img => (qn.images[idx].url = base64img)
          );
        });
      });
    }
  };

  handleEvent = (msg: GameState) => {
    // console.log("Handling", msg);
    switch (msg.progress) {
      case ProgressState.EMPTY:
        this.gameState = ProgressState.EMPTY;
        this.update();
        break;
      case ProgressState.WAITING:
        this.gameState = ProgressState.WAITING;
        this.update();
        break;
      case ProgressState.PLAYING:
        // console.log("Run!");
        this.currentQuestionPos = msg.question;
        this.gameState = ProgressState.PLAYING;
        this.questionState = msg.questionState;
        this.getUserState();
        this.update();
        break;
      case ProgressState.END:
        // console.log("Game Ended!");
        this.currentQuestionPos = 0;
        this.gameState = ProgressState.END;
        this.update();
        break;
    }
  };
}
