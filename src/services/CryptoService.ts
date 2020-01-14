import CryptoJS from "crypto-js";

export default class CryptoService {
  static decrypt = (msg: any) => {
    return CryptoJS.AES.decrypt(
      CryptoService.convertFromHex(msg),
      "1234"
    ).toString(CryptoJS.enc.Utf8);
  };

  static encrypt = (msg: string) => {
    const encryptedObj = CryptoJS.AES.encrypt(msg, "1234");
    return CryptoService.convertToHex(encryptedObj.toString());
    // return encryptedObj.toString(CryptoJS.enc.Hex);
  };

  static convertToHex = str => {
    var hex = "";
    for (var i = 0; i < str.length; i++) {
      hex += "" + str.charCodeAt(i).toString(16);
    }
    return hex;
  };

  static convertFromHex = hex => {
    var hex = hex.toString(); //force conversion
    var str = "";
    for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  };
}
