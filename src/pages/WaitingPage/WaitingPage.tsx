import React from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Typography,
  CircularProgress,
  Box
} from "@material-ui/core";
import { COLORS } from "../../theme";
import SocketService from "../../services/SocketService";
import HOW_TO_PLAY from "./components/howToPlayText";
import TitleCard from "../../components/TitleCard";
import TableIndicator from "../../components/TableIndicator";
import ChineseTitleCard from "../../components/ChineseTitleCard";
import GameStateIndicator from "./components/GameStateIndicator";
import HowToPlay from "./components/HowToPlay";
import MainTitleCard from "../../components/MainTitleCard";
import CoinTree from "../../components/CoinTree";
import { useDependency } from "./../../services/DependencyInjector";
import GameService from "./../../game/GameService";
import GameStateRedirector from "../GameStateRedirector";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    alignItems: "stretch"
  },
  title: {
    fontSize: "40px"
  },
  spinnerContainer: {
    margin: "24px 8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingCaption: {}
});

const WaitingPage: React.FC = () => {
  const classes = useStyles({});
  const history = useHistory();
  const socketService = useDependency(SocketService);
  const gameService = useDependency(GameService);

  React.useEffect(() => {
    // Initial setup for entering game
    const preloadQuestions = async () => {
      gameService.getAllQuestions();
      gameService.preloadQuestion(1);
    };

    const attemptGameStateRestore = () => {
      gameService.getCurrentGameState();
    };

    socketService.activate(gameService.handleEvent, attemptGameStateRestore);
    gameService.getCurrentGameState();
    preloadQuestions();
  }, []);
  return (
    <div className={classes.container}>
      <Box marginTop="54px" />
      <MainTitleCard />
      <GameStateRedirector />
      <GameStateIndicator progressState={gameService.gameState} />
      <CoinTree />
      <HowToPlay />
      <TableIndicator />
    </div>
  );
};

export default WaitingPage;
