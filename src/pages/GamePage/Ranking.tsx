import React from "react";
import LanternImg from "../../assets/lantern.png";
import { makeStyles, Typography, Modal } from "@material-ui/core";
import { COLORS } from "./../../theme";
import ModalOverlay from "../../components/ModalOverlay";

const useStyles = makeStyles({
  container: {
    position: "fixed",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    height: "100%",
    top: (props: Props) => (props.show ? 0 : "-100%"),
    transition: "top 0.3s ease-out",
    transitionDelay: "1s", 
    overflow: "hidden",
    userSelect: "none",
    "&:focus": {
      outline: "none"
    }
  },
  lantern: {
    display: "block",
    position: "absolute",
    height: "auto"
  },
  overlay: {
    opacity: (props: Props) => (props.show ? 0.5 : 0),
    display: (props: Props) => (props.show ? "block" : "none"),
    transition: "opacity 0.75s, display 0.75s"
  },
  textContainer: {
    color: COLORS.accent,
    position: "absolute",
    top: 120, // Hard-code hack
    textAlign: "center"
  },
  giantTitle: {
    fontSize: "80px"
  }
});

interface Props {
  show?: boolean;
  rank?: number;
}

const Ranking: React.FC<Props> = props => {
  const classes = useStyles(props);
  return (
    <>
      <Modal keepMounted open={props.show}>
        <div className={classes.container}>
          {/* <ModalOverlay className={classes.overlay} /> */}
          <img className={classes.lantern} src={LanternImg} />
          <div className={classes.textContainer}>
            <Typography variant="h1">Your Ranking:</Typography>
            <Typography variant="h1" className={classes.giantTitle}>
              {props.rank}
            </Typography>
          </div>
        </div>
      </Modal>
    </>
  );
};

Ranking.defaultProps = { rank: 1 };

export default Ranking;
