import React from "react";
import LanternImg from "../../assets/lantern.png";
import { makeStyles, Typography } from "@material-ui/core";
import { COLORS } from "./../../theme";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    height: "100%",
    top: (props: Props) => (props.show ? 0 : "-100%"),
    transition: "top 0.3s ease-out",
    overflow: "hidden"
  },
  lantern: {
    display: "block",
    position: "absolute",
    height: "auto"
  },
  overlay: {
    position: "absolute",
    top: 0,
    display: "block",
    height: "100vh",
    width: "100vw",
    background: "#000",
    opacity: (props: Props) => (props.show ? 0.5 : 0),
    transition: "opacity 0.3s"
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
      <div className={classes.overlay} />
      <div className={classes.container}>
        <img className={classes.lantern} src={LanternImg} />
        <div className={classes.textContainer}>
          <Typography variant="h1">Your Ranking:</Typography>
          <Typography variant="h1" className={classes.giantTitle}>
            {props.rank}
          </Typography>
        </div>
      </div>
    </>
  );
};

Ranking.defaultProps = { rank: 1 };

export default Ranking;
