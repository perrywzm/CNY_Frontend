import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { COLORS } from "./../../theme";
import SocketService from "../../services/SocketService";
import TEXT_INTRO from "./components/intro";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%"
  },
  title: {
    fontSize: "40px"
  }
});

const SplashPage: React.FC = () => {
  const classes = useStyles({});
  React.useEffect(() => {
    const ws = new SocketService();
  }, []);
  return (
    <div className={classes.container}>
      <div style={{padding: "0.5em 0 0 1em", color: COLORS.accent, position: 'fixed' }}>
        Table 1
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: '2em',
          padding: "1.5em",
          color: COLORS.accent,
          textAlign: "center",
          textShadow: "4px 4px #333333"
        }}
      >
        <Typography variant="h1">英雄所見略同</Typography>
      </div>
      <div
        style={{
          backgroundColor: COLORS.accent,
          background: 'linear-gradient(90deg, rgba(255,191,80,1) 0%, rgba(224,143,0,1) 100%);',
          padding: "1.5em",
          color: COLORS.primary,
          textAlign: "center",
          fontWeight: 'bold',
          textShadow: "2px 2px #333333"
        }}
      >
        <Typography variant="h1">GREAT MINDS THINK ALIKE</Typography>
      </div>
      <div
        style={{
          flex: 1,
          padding: "1em",
          lineHeight: "1.8em",
          color: COLORS.accent,
          textAlign: "center"
        }}
      >
        {TEXT_INTRO}
      </div>
    </div>
  );
};

export default SplashPage;
