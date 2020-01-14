import React from "react";
import MainTitleCard from "../../components/MainTitleCard";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Typography } from "@material-ui/core";
import { COLORS } from "../../theme";
import CoinTree from "../../components/CoinTree";
import GameStateRedirector from "../GameStateRedirector";
import { useDependency } from "./../../services/DependencyInjector";
import GameService from "./../../game/GameService";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    alignItems: "stretch"
  },
  subtitle: {
    color: COLORS.accent,
    fontSize: 32,
    textAlign: "center"
  },
  title: {
    color: "#d3fc85",
    textAlign: "center",
    textShadow: `0 0 16px ${COLORS.accent},0 0 16px ${COLORS.accent}`
  }
});

interface Props {}

const EndingPage: React.FC<Props> = () => {
  const classes = useStyles({});
  const gameService = useDependency(GameService);

  React.useEffect(() => {
    gameService.getUserState();
  }, []);

  return (
    <div className={classes.container}>
      <GameStateRedirector />
      <MainTitleCard />
      <Box display="flex" flexDirection="column" padding="24px">
        {gameService.rank >= 1 && (
          <>
            <Typography className={classes.subtitle} variant="h1">
              You achieved
            </Typography>
            <Typography className={classes.title} variant="h1">
              Rank {gameService.rank}
            </Typography>
          </>
        )}
        <Typography className={classes.subtitle} variant="h1">
          Thanks for playing!
        </Typography>
      </Box>
      <CoinTree />
    </div>
  );
};

export default EndingPage;
