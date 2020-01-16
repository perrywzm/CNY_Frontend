import SockJS from "sockjs-client";
import { Client, Frame } from "@stomp/stompjs";
import { BaseDependency } from "./DependencyInjector";
import { GameState } from "../models/GameState";
import AjaxService from "./AjaxService";

// const ENDPOINT = "http://192.168.137.1:8090";
const ENDPOINT = "https://cnybackend.southeastasia.cloudapp.azure.com/game";

export default class SocketService extends BaseDependency {
  static id = "SocketService";
  socket: WebSocket;
  stompClient: Client;
  disconnectFlag: boolean;
  onErrorRestore: (error?: any) => void;

  activate(msgCallback: (msg) => void, onErrorRestore: (error?) => void) {
    this.onErrorRestore = onErrorRestore;

    const stompConfig = {
      // Typically login, passcode and vhost
      // Adjust these for your broker
      connectHeaders: AjaxService.jwtHeader,

      // Broker URL, should start with ws:// or wss:// - adjust for your broker setup
      // brokerURL: "ws://cny-game.herokuapp.com/game",
      // Keep it off for production, it can be quite verbose
      // Skip this key to disable
      debug: function(str) {
        // console.log("STOMP: " + str);
      },
      // If disconnected, it will retry after 1s
      reconnectDelay: 5000
    };

    this.stompClient = new Client(stompConfig);
    this.stompClient.webSocketFactory = () => new SockJS(ENDPOINT);
    this.stompClient.onConnect = (frame: Frame) => {
      // console.log(frame);
      // The return object has a method called `unsubscribe`
      const subscription = this.stompClient.subscribe("/topic/game", msg => {
        const payload = JSON.parse(msg.body) as GameState;

        // console.log(payload);
        if (this.disconnectFlag) {
          this.onErrorRestore();
        }
        msgCallback(payload);
      });
    };
    this.stompClient.activate();
  }

  onError = (event: any) => {
    this.disconnectFlag = true;
    this.onErrorRestore();
  };

  deactivate() {
    if (this.stompClient && this.stompClient.active) {
      this.stompClient.deactivate();
    }
  }
}
