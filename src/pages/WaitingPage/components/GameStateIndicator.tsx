import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography } from "@material-ui/core";
import GameState from "../../../game/GameState";

const useStyles = makeStyles({
  baseContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  spinner: {
    margin: "24px 8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: { paddingRight: 8, lineHeight: "1em" }
});

interface Props {
  gameState: GameState
}

const GameStateIndicator: React.FC<Props> = () => {
  const classes = useStyles({});
  return (
    <div className={classes.baseContainer}>
      <div className={classes.spinner}>
        <CircularProgress color="inherit" size={24} />
      </div>
      <Typography variant="caption" className={classes.text}>
        Please wait for the game to start
      </Typography>
    </div>
  );
};

export default GameStateIndicator;
