import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GameService from "./../../game/GameService";
import TitleCard from "../../components/TitleCard";
import TableIndicator from "../../components/TableIndicator";
import { Box } from "@material-ui/core";
import { useDependency } from "./../../services/DependencyInjector";
import ImageOptions from "./ImageOptions";

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
  const gameService = useDependency(GameService);

  React.useEffect(() => {
    gameService.preloadQuestion(1);
    gameService.score++;
    console.log("Score", gameService.score);
  }, []);
  console.log("Game service has", gameService.questions);
  return (
    <div className={classes.container}>
      <TableIndicator name="Table 1" onClick={() => console.log(123)} />
      <Box marginTop="54px" />
      <TitleCard>{gameService.questions.get(1).title}</TitleCard>
      <ImageOptions question={gameService.questions.get(1)} />
    </div>
  );
};

export default GamePage;
