import AjaxService from "../services/AjaxService";
import { BaseDependency } from "../services/DependencyInjector";
import Question from "../models/Question";

export default class GameService extends BaseDependency {
  score = 0;
  questions: Map<string | number, Question> = new Map();

  getCurrentQuestion =  async () => {
    const qnId = await AjaxService.fetchCurrentQuestion();
    if (qnId) {
      return qnId;
    } else {
      return null;
    }
  }

  preloadQuestion = async (qnId: number | string = 1) => {
    const question = await AjaxService.fetchQuestion(qnId);
    if (question) {
      this.questions.set(qnId, question);
      console.log(this.questions)
    }
  };

  handleEvent = (msg) => {
    
  }
}
