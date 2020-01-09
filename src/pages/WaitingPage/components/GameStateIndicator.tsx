import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography } from "@material-ui/core";
import GameState from "../../../models/GameState";

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
  text: {
    color: "#d3fc85",
    animation: "$fade 2s infinite linear",
    margin: "24px 8px",
    lineHeight: "1em",
  },
  "@keyframes fade": {
    "0%": { opacity: 1 },
    "50%": { opacity: 0.7 },
    "100%": { opacity: 1 }
  }
});

interface Props {
  gameState: GameState;
}

const GameStateIndicator: React.FC<Props> = () => {
  const classes = useStyles({});
  return (
    <div className={classes.baseContainer}>
      <Typography variant="caption" className={classes.text}>
        Please wait for the game to start
      </Typography>
    </div>
  );
};

export default GameStateIndicator;
