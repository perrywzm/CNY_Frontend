import React from "react";
import LanternImg from "../../assets/lantern.png";
import { makeStyles } from "@material-ui/core";

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
    overflow: "visible"
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
