import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../../theme";
import HowToPlayDisplay from "./HowToPlayDisplay";

const useStyles = makeStyles({
  textContainer: {
    // position: "fixed",
    // bottom: 0,
    margin: "32px",
    padding: "12px 24px",
    // padding: "0 20px 40px 20px",
    // lineHeight: "1.8em",
    color: COLORS.accent,
    // width: "%",
    backgroundColor: "rgba(0,0,0,0.3)",
    textAlign: "center",
    borderRadius: 9999
  }
});

interface Props {}

const HowToPlay: React.FC<Props> = () => {
  const classes = useStyles({});
  const [showHTP, setShowHTP] = React.useState(false);
  return (
    <>
      <div className={classes.textContainer} onClick={() => setShowHTP(true)}>
        <b>How To Play</b>
      </div>
      <HowToPlayDisplay show={showHTP} onClose={() => setShowHTP(false)} />
    </>
  );
};

export default HowToPlay;
