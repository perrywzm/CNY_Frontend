import axios from "axios";
import Question from './../models/Question';

const DEBUG_MODE = false;
const BASE_HREF = "http://cnybackend.southeastasia.cloudapp.azure.com:8080/api";

export default class AjaxService {
  static jwtHeader: { authorization?: string } = {};

  static submitTableId = async (tableId: string) => {
    if (DEBUG_MODE) {
      return new Promise(resolve =>
        setTimeout(() => resolve(tableId === "123"), 1000)
      );
    } else {
      try {
        const result = await axios.post(BASE_HREF + "/user/create", {
          username: tableId
        });
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

  static fetchCurrentQuestion = async () => {
    return 123;
  }

  static fetchQuestion = async (qnId: number | string) => {
    if (DEBUG_MODE) {
      await new Promise(resolve =>
        setTimeout(() => resolve({}), 1000)
      );
      return null;
    } else {
      try {
        console.log(AjaxService.jwtHeader)
        const result = await axios.get(BASE_HREF + `/question/${qnId}`, {
          headers: AjaxService.jwtHeader
        });
        if (result.status === 200) {
          console.log(result);
          return result.data as Question;
        }
      } catch (e) {
        console.error("Error encountered when fetching question!", e);
        return null;
      }
    }
  };
}
