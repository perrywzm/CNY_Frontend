import React from "react";
import { Modal, Typography, makeStyles, Box } from "@material-ui/core";
import HOW_TO_PLAY from "./howToPlayText";

const useStyles = makeStyles({
  defocus: {
    outline: "none",
    "& :focus": {
      outline: "none"
    }
  },
  text: {
    textShadow: "0 0 8px #000, 0 0 8px #000, 0 0 8px #000",
    color: "#d3fc85",
    textAlign: "center"
  }
});

interface Props {
  show: boolean;
  onClose: () => void;
}

const HowToPlayDisplay: React.FC<Props> = props => {
  const classes = useStyles({});

  return (
    <Modal onClose={props.onClose} open={props.show}>
      <Box className={classes.defocus} padding="32px" onClick={props.onClose}>
        <Typography className={classes.text} variant="h1">
          HOW TO PLAY
        </Typography>
        <br />
        <Typography className={classes.text}>{HOW_TO_PLAY}</Typography>
      </Box>
    </Modal>
  );
};

export default HowToPlayDisplay;
