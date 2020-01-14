import React from "react";
import { Modal, Typography, makeStyles } from "@material-ui/core";
import HOW_TO_PLAY from "./howToPlayText";

const useStyles = makeStyles({
  text: {
    outline: "none"
  }
});

interface Props {
  show: boolean;
  onClose: () => void;
}

const HowToPlayDisplay: React.FC<Props> = props => {
  const classes = useStyles({});

  return (
    <Modal
      onClose={props.onClose}
      open={props.show}
      onClick={e => e.preventDefault()}
    >
      <Typography className={classes.text}>{HOW_TO_PLAY}</Typography>
    </Modal>
  );
};

export default HowToPlayDisplay;
