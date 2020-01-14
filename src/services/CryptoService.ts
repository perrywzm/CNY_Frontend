import CryptoJS from 'crypto-js';

export default class CryptoService {
  static decrypt = (msg: any) => {
    return CryptoJS.AES.decrypt(msg, "1234").toString(CryptoJS.enc.Utf8);
  }

  static encrypt = (msg: string) => {
    const encryptedObj = CryptoJS.AES.encrypt(msg, "1234");
    return encryptedObj.toString()
  }
}