import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GameService from "./../../game/GameService";
import TitleCard from "../../components/TitleCard";
import TableIndicator from "../../components/TableIndicator";
import { Box } from "@material-ui/core";

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

const GamePage: React.FC = () => {
  const classes = useStyles({});
  React.useEffect(() => {
    const gameService = new GameService();
    gameService.preloadQuestion(1);
  }, []);

  return (
    <div className={classes.container}>
      <TableIndicator name="Table 1" onClick={() => console.log(123)} />
      <Box marginTop="54px" />
      <TitleCard>Fast Food</TitleCard>123
    </div>
  );
};

export default GamePage;
