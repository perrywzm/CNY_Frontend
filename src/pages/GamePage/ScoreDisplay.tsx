import React from "react";
import LanternImg from "../../assets/lantern.png";
import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../theme";

const useStyles = makeStyles({
  container: {
    position: "fixed",
    top: -12,
    left: 0,
    padding: "24px 30px 30px 30px",
    background: `url(${LanternImg}) no-repeat`,
    backgroundSize: "cover",
    textAlign: "center",
    fontSize: "1em",
    lineHeight: "1.2em",
    overflow: "visible",
    textShadow: "0 0 12px #000, 0 0 12px #000",
    color: "#d3fc85",
    zIndex: 1002
  }
});

interface Props {
  score?: number;
}

const ScoreDisplay: React.FC<Props> = props => {
  const classes = useStyles({});
  return (
    <div className={classes.container}>
      Score:
      <br />
      <b>{props.score || "0"}</b>
    </div>
  );
};

export default ScoreDisplay;
