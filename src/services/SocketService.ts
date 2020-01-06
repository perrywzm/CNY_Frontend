import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

// const ENDPOINT = "http://192.168.137.1:8090";
const ENDPOINT = "http://cny-game.herokuapp.com/game";

export default class SocketService {
  socket: WebSocket;
  stompClient: any;

  constructor() {
    const stompConfig = {
      // Typically login, passcode and vhost
      // Adjust these for your broker
      // connectHeaders: {
      //   login: "guest",
      //   passcode: "guest"
      // },

      // Broker URL, should start with ws:// or wss:// - adjust for your broker setup
      // brokerURL: "ws://cny-game.herokuapp.com/game",
      // Keep it off for production, it can be quite verbose
      // Skip this key to disable
      debug: function (str) {
        console.log('STOMP: ' + str);
      },
      // If disconnected, it will retry after 1s
      reconnectDelay: 5000,
    };

    this.stompClient = new Client(stompConfig);
    this.stompClient.webSocketFactory = () => new SockJS(ENDPOINT);
    this.stompClient.onConnect = (frame) => {
      // The return object has a method called `unsubscribe`
      const subscription = this.stompClient.subscribe('/topic/game', function (message) {
        const payload = JSON.parse(message.body);
        console.log(payload);
      });
    }
    this.stompClient.activate();
    // this.stompClient.connect({}, (frame) => {
    //   this.stompClient.subscribe('/topic/game', msg => console.log(msg))
    // })
    // this.stompClient = Stomp.over(this.socket);
    // ("topic/game", (msg) => {
    //   console.log(msg);
    // })
  }
}
