import SockJS from "sockjs-client";
import { Client, Frame } from "@stomp/stompjs";
import { BaseDependency } from "./DependencyInjector";
import { GameState } from "../models/GameState";

// const ENDPOINT = "http://192.168.137.1:8090";
const ENDPOINT = "https://cnybackend.southeastasia.cloudapp.azure.com/game";

export default class SocketService extends BaseDependency {
  socket: WebSocket;
  stompClient: Client;

  activate(msgCallback: (msg) => void) {
    const stompConfig = {
      // Typically login, passcode and vhost
      // Adjust these for your broker
      connectHeaders: {
        jwt: "bearer ghghghki.hkikh.gues435454543t"
      },

      // Broker URL, should start with ws:// or wss:// - adjust for your broker setup
      // brokerURL: "ws://cny-game.herokuapp.com/game",
      // Keep it off for production, it can be quite verbose
      // Skip this key to disable
      debug: function(str) {
        console.log("STOMP: " + str);
      },
      // If disconnected, it will retry after 1s
      reconnectDelay: 5000
    };

    this.stompClient = new Client(stompConfig);
    this.stompClient.webSocketFactory = () => new SockJS(ENDPOINT);
    this.stompClient.onConnect = (frame: Frame) => {
      console.log(frame);
      // The return object has a method called `unsubscribe`
      const subscription = this.stompClient.subscribe("/topic/game", msg => {
        const payload = JSON.parse(msg.body) as GameState;

        console.log(payload);
        msgCallback(payload);
      });
    };
    this.stompClient.activate();
  }

  deactivate() {
    if (this.stompClient && this.stompClient.active) {
      this.stompClient.deactivate();
    }
  }
}
