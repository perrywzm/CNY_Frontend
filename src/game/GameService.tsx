import AjaxService from "../services/AjaxService"

export default class GameService {
  questions: Map<string | number, any> = new Map();

  preloadQuestion = async (qnId: number | string = 1) => {
    const result = await AjaxService.fetchQuestion(qnId);
    if (result) {
      this.questions.set(qnId, result)
    }
  }
}
