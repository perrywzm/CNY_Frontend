import React from "react";
import { Modal, Typography } from "@material-ui/core";
import HOW_TO_PLAY from "./howToPlayText";

interface Props {
  show: boolean;
  onClose: () => void;
}

const HowToPlayDisplay: React.FC<Props> = props => {
  return (
    <Modal
      onClose={props.onClose}
      open={props.show}
      onClick={e => e.preventDefault()}
    >
      <Typography>{HOW_TO_PLAY}</Typography>
    </Modal>
  );
};

export default HowToPlayDisplay;
