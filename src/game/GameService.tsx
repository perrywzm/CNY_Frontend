import AjaxService from "../services/AjaxService";
import { BaseDependency } from "../services/DependencyInjector";
import Question from "../models/Question";
import { GameState, ProgressState, QuestionState } from "../models/GameState";

export default class GameService extends BaseDependency {
  static id = "GameService";

  gameState = ProgressState.EMPTY;
  // gameState = ProgressState.END;
  currentQuestionPos: number = 1;
  questionState = QuestionState.START;
  currentAnswer: number;
  correctAnswer: number = null;
  score = 0;
  rank = 0;
  questionsMap: Map<string | number, Question> = new Map();

  getAllQuestions = async () => {
    const questions = await AjaxService.fetchAllQuestions();
    if (questions && questions.length > 0) {
      this.questionsMap = new Map();
      questions.forEach(q => this.questionsMap.set(q.position, q));
    } else {
      console.log(questions);
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
      console.log(this.questionsMap);
    }
  };

  handleSubmitResponse = (choice: number) => {
    this.currentAnswer = choice;
    this.update();
  };

  getUserState = async () => {
    if (this.questionState === QuestionState.END) {
      const response = await AjaxService.fetchUserRank();
      if (response) {
        const [rank, score] = response;
        this.rank = rank;
        this.score = score;
        this.update();
      }

      const qnAns = await AjaxService.fetchQuestionResults(this.currentQuestionPos);
      if (qnAns) {
        
      }
    }
  };

  handleEvent = (msg: GameState) => {
    console.log("Handling", msg);
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
        console.log("Run!");
        this.currentQuestionPos = msg.question;
        this.gameState = ProgressState.PLAYING;
        this.questionState = msg.questionState;
        this.getUserState();
        this.update();
        break;
      case ProgressState.END:
        console.log("Game Ended!");
        this.currentQuestionPos = 0;
        this.gameState = ProgressState.END;
        this.update();
        break;
    }
  };
}
