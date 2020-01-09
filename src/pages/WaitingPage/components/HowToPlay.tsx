import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../../theme";
import HOW_TO_PLAY from "./howToPlayText";

const useStyles = makeStyles({
  textContainer: {
    position: "fixed",
    bottom: 0,
    padding: "12px 0",
    // padding: "0 20px 40px 20px",
    // lineHeight: "1.8em",
    color: COLORS.accent,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    textAlign: "center"
  }
});

interface Props {}

const HowToPlay: React.FC<Props> = () => {
  const classes = useStyles({});
  return (
    <div className={classes.textContainer}>
      <b>How To Play</b>
      <br />
      {/* {HOW_TO_PLAY} */}
    </div>
  );
};

export default HowToPlay;
