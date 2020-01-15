import React from "react";
import { Modal, Typography, makeStyles, Box } from "@material-ui/core";
import HOW_TO_PLAY from "./howToPlayText";

const useStyles = makeStyles({
  defocus: {
    outline: "none",
    "& :focus": {
      outline: "none"
    }
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
        <Typography style={{ textAlign: "center" }} variant="h1">
          HOW TO PLAY
        </Typography>
        <br />
        <Typography>{HOW_TO_PLAY}</Typography>
      </Box>
    </Modal>
  );
};

export default HowToPlayDisplay;
