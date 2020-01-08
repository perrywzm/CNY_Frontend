import axios from "axios";

const DEBUG_MODE = false;
const BASE_HREF = "http://cnybackend.southeastasia.cloudapp.azure.com:8080/api";

export default class AjaxService {
  static submitTableId = async (tableId: string) => {
    if (DEBUG_MODE) {
      return new Promise(resolve =>
        setTimeout(() => resolve(tableId === "123"), 1000)
      );
    } else {
      try {
        const result = await axios.post(
          BASE_HREF + "/user/create",
          {
            username: tableId
          },
          { withCredentials: true }
        );
        console.log("Result came in!", result);
        if (result.status === 200) {
          return;
        }
      } catch (e) {
        if (e.response.data.error === "There is an existing username") {
          return false;
        } else {
          console.log(e.response.data);
          console.error("Error encountered when submitting table ID!", e);
          console.error("Bypassing requirements...");
          return true; //true;
        }
      }
    }
  };

  static fetchQuestion = async (qnId: number | string) => {
    if (DEBUG_MODE) {
      const a = await new Promise(resolve =>
        setTimeout(() => resolve({}), 1000)
      );
      return a;
    } else {
      try {
        const result = await axios.get(BASE_HREF + `/question/${qnId}`);
        if (result.status === 200) {
          console.log(result);
          return result;
        }
      } catch (e) {
        console.error("Error encountered when fetching question!", e);
        return null;
      }
    }
  };
}
