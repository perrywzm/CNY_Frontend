import React from "react";
import { Modal, Typography, makeStyles, Box } from "@material-ui/core";
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
      <Box padding="32px">
        <Typography style={{ textAlign: "center" }} variant="h1">
          HOW TO PLAY
        </Typography>
        <br />
        <Typography className={classes.text}>{HOW_TO_PLAY}</Typography>
      </Box>
    </Modal>
  );
};

export default HowToPlayDisplay;
