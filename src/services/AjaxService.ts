import axios from "axios";
import Question from "./../models/Question";
import { GameState } from "../models/GameState";

const DEBUG_MODE = false;
const BASE_BASE_HREF = "https://cnybackend.southeastasia.cloudapp.azure.com";
const BASE_HREF = "https://cnybackend.southeastasia.cloudapp.azure.com/api";

export default class AjaxService {
  static jwtHeader: { Authorization?: string } = {};

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
        // console.log("Result came in!", result);
        if (result.status === 200) {
          AjaxService.jwtHeader = {
            Authorization: `Bearer ${result.data.token}`
          };
          return 2;
        } else {
          return 0;
        }
      } catch (e) {
        // console.log(e);
        if (e.response) {
          switch (e.response.data.error) {
            case "There is an existing username":
              return 0;
            case "The user have login":
              return 1;
            default:
              return 0;
          }
        } else {
          console.error("Error encountered when submitting table ID!", e);
          return 0; //true;
        }
      }
    }
  };

  static fetchAllQuestions = async (withAuth = true) => {
    try {
      const result = await axios.get(
        BASE_HREF + `/question/all`,
        withAuth ? { headers: AjaxService.jwtHeader } : {}
      );
      if (result.status === 200) {
        // console.log("Getting all your questions", result.data);
        return result.data as Question[];
      }
    } catch (e) {
      // console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static getCurrentGameState = async () => {
    try {
      const result = await axios.get(BASE_HREF + `/game/state`, {
        headers: AjaxService.jwtHeader
      });
      if (result.status === 200) {
        // console.log("Getting current game state", result.data);
        return result.data as GameState;
      } else {
        return null;
      }
    } catch (e) {
      // console.error("Error encountered when fetching question!", e);
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
        // console.error("Error encountered when fetching question!", e);
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
      // console.error("Error encountered when submitting answer!", e);
      return null;
    }
  };

  static fetchQuestionAnswer = async (qnPos: number) => {
    try {
      const result = await axios.get(BASE_HREF + `/user/response`, {
        headers: AjaxService.jwtHeader
      });
      // console.log(result);
      if (result.status === 200) {
        return result.data.find(qn => qn.question === qnPos).choice;
      } else {
        return null;
      }
    } catch (e) {
      // console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static fetchQuestionResults = async (qnPos: number) => {
    try {
      const result = await axios.get(BASE_HREF + `/poll/${qnPos}`, {
        headers: AjaxService.jwtHeader
      });
      // console.log(result);
      if (result.status === 200) {
        return result;
      } else {
        return null;
      }
    } catch (e) {
      // console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static fetchUserRank = async (): Promise<any[]> => {
    try {
      const result = await axios.get(BASE_HREF + "/user/rank", {
        headers: AjaxService.jwtHeader
      });
      // console.log(result);
      if (result.status === 200) {
        return [result.data.rank, result.data.score, result.data.username];
      } else {
        return null;
      }
    } catch (e) {
      // console.error("Error encountered when fetching question!", e);
      return null;
    }
  };

  static fetchImageAsBase64 = async (url: string) => {
    try {
      url = url.replace("http://", "https://");
      const result = await axios.get(url, { responseType: "arraybuffer" });
      if (result.status === 200) {
        const b64img = Buffer.from(result.data, "binary").toString("base64");
        return `data:image/jpg;base64, ${b64img}`;
      } else {
        return null;
      }
    } catch (e) {
      // console.error("Error encountered when fetching image!", e);
      return null;
    }
  };
}
