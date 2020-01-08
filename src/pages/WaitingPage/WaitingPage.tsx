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
import GameState from "../../game/GameState";
import HowToPlay from "./components/HowToPlay";
import MainTitleCard from "../../components/MainTitleCard";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%"
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

  React.useEffect(() => {
    const ws = new SocketService();
  }, []);
  return (
    <div className={classes.container}>
      <TableIndicator name="Table 1" onClick={() => history.push("/game")} />
      <Box marginTop="54px" />
      <MainTitleCard />
      <GameStateIndicator gameState={GameState.waiting} />
      <HowToPlay />
    </div>
  );
};

export default WaitingPage;
