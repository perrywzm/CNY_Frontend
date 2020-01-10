import React from "react";
import MainTitleCard from "../../components/MainTitleCard";
import { makeStyles } from "@material-ui/styles";
import { Box, Button, Typography } from "@material-ui/core";
import { COLORS } from "../../theme";
import CoinTree from "../../components/CoinTree";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    alignItems: "stretch"
  },
  title: {
    fontSize: "40px"
  }
});

interface Props {}

const EndingPage: React.FC<Props> = () => {
  const classes = useStyles({});
  return (
    <div className={classes.container}>
      <MainTitleCard />
      <Box display="flex" flexDirection="column" padding="24px">
        <Typography variant="h1">Thanks for playing!</Typography>
      </Box>
      <CoinTree />
    </div>
  );
};

export default EndingPage;
