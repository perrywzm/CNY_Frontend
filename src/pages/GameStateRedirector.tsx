import React from "react";
import GameService from "./../game/GameService";
import { useDependency } from "../services/DependencyInjector";
import { useLocation, useHistory } from "react-router-dom";
import { ProgressState } from "../models/GameState";

interface Props {}

const GameStateRedirector: React.FC<Props> = () => {
  const history = useHistory();
  const location = useLocation();
  const gameService = useDependency(GameService);

  React.useEffect(() => {
    switch (gameService.gameState) {
      case ProgressState.EMPTY:
      case ProgressState.WAITING:
        if (!doesLocationMatch(location.pathname, "/lobby")) {
          return history.push("/lobby");
        }
        break;
      case ProgressState.PLAYING:
        if (!doesLocationMatch(location.pathname, "/game")) {
          return history.push("/game");
        }
        break;
      case ProgressState.END:
        if (!doesLocationMatch(location.pathname, "/end")) {
          return history.push("/end");
        }
        break;
    }
  }, [gameService.gameState]);

  return <></>;
};

const doesLocationMatch = (pathname: string, destination: string) => {
  return pathname.toLowerCase() === destination.toLowerCase();
};

export default GameStateRedirector;
