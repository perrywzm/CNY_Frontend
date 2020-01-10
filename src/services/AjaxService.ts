import axios from "axios";
import Question from "./../models/Question";
import { GameState } from "../models/GameState";

const DEBUG_MODE = false;
const BASE_BASE_HREF = "https://cnybackend.southeastasia.cloudapp.azure.com/";
const BASE_HREF = "https://cnybackend.southeastasia.cloudapp.azure.com/api";

export default class AjaxService {
  static jwtHeader: { authorization?: string } = {};

  static submitTableId = async (
    tableId: string,
    mode: "create" | "login" = "create"
  ) => {
    if (DEBUG_MODE) {
      return new Promise(resolve =>
        setTimeout(() => resolve(tableId === "123"), 1000)
      );
    } else {
      try {
        let result;
        if (mode === "create") {
          result = await axios.post(BASE_HREF + "/user/create", {
            username: tableId
          });
        } else {
          result = await axios.post(BASE_BASE_HREF + "/authenticate", {
            username: tableId
          });
        }
        console.log("Result came in!", result);
        if (result.status === 200) {
          AjaxService.jwtHeader = {
            authorization: `Bearer ${result.data.token}`
          };
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
        if (
          e.response &&
          e.response.data.error === "There is an existing username"
        ) {
          return false;
        } else {
          console.error("Error encountered when submitting table ID!", e);
          console.error("Bypassing requirements...");
          return true; //true;
        }
      }
    }
  };

  static fetchAllQuestions = async () => {
    try {
      const result = await axios.get(BASE_HREF + `/question/all`, {
        headers: AjaxService.jwtHeader
      });
      if (result.status === 200) {
        console.log("Getting all your questions", result.data);
        return result.data as Question[];
      }
    } catch (e) {
      console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static getCurrentGameState = async () => {
    try {
      const result = await axios.get(BASE_HREF + `/game/state`, {
        headers: AjaxService.jwtHeader
      });
      if (result.status === 200) {
        console.log("Getting current game state", result.data);
        return result.data as GameState;
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static fetchQuestion = async (qnPos: number | string) => {
    if (DEBUG_MODE) {
      await new Promise(resolve => setTimeout(() => resolve({}), 1000));
      return null;
    } else {
      try {
        const result = await axios.get(BASE_HREF + `/question/${qnPos}`, {
          headers: AjaxService.jwtHeader
        });
        if (result.status === 200) {
          return result.data as Question;
        }
      } catch (e) {
        console.error("Error encountered when fetching question!", e);
        return null;
      }
    }
  };

  static submitAnswer = async (qnPos: number, option: number) => {
    try {
      const result = await axios.post(
        BASE_HREF + `/answer/submit/${qnPos}`,
        { choice: option },
        { headers: AjaxService.jwtHeader }
      );
      if (result.status === 200) {
        // console.log("RESPONSE FROM SUBMISSION", result)
        return result.data.choice as number;
        // return result.data as Question;
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error encountered when submitting answer!", e);
      return null;
    }
  };

  static fetchQuestionResults = async (qnPos: number) => {
    try {
      const result = await axios.get(BASE_HREF + `/poll/${qnPos}`, {
        headers: AjaxService.jwtHeader
      });
      if (result.status === 200) {
        return result;
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static fetchUserRank = async (): Promise<number[]> => {
    try {
      const result = await axios.get(BASE_HREF + "/user/rank", {
        headers: AjaxService.jwtHeader
      });
      console.log(result);
      if (result.status === 200) {
        return [result.data.rank, result.data.score];
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error encountered when fetching question!", e);
      return null;
    }
  };
}
