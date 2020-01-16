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
import CoinTreeGame from "./components/CoinTreeGame";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    width: "100%",
    alignItems: "stretch",
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
  cointreePositioner: {
    position: "relative"
  }
});

const WaitingPage: React.FC = () => {
  const classes = useStyles({});
  const socketService = useDependency(SocketService);
  const gameService = useDependency(GameService);

  React.useEffect(() => {
    // Initial setup for entering game
    const preloadQuestions = async () => {
      gameService.getAllQuestions().then(() => {
        gameService.preloadImages();
      });
    };

    const attemptGameStateRestore = () => {
      gameService.getCurrentGameState();
    };

    socketService.activate(gameService.handleEvent, attemptGameStateRestore);
    gameService.getCurrentGameState();
    gameService.getUserState(true);
    preloadQuestions();
  }, []);
  return (
    <div className={classes.container}>
      <Box marginTop="54px" />
      <MainTitleCard />
      <GameStateRedirector />
      <GameStateIndicator progressState={gameService.gameState} />
      <div className={classes.cointreePositioner}>
        <CoinTree />
        <CoinTreeGame />
      </div>
      <HowToPlay />
      <TableIndicator />
    </div>
  );
};

export default WaitingPage;
