import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GameService from "./../../game/GameService";
import TitleCard from "../../components/TitleCard";
import TableIndicator from "../../components/TableIndicator";
import { Box, Button, Typography } from "@material-ui/core";
import { useDependency } from "./../../services/DependencyInjector";
import ImageOptions from "./ImageOptions";
import { COLORS } from "../../theme";
import AjaxService from "../../services/AjaxService";
import Ranking from "./Ranking";
import { QuestionState, ProgressState } from "../../models/GameState";
import ScoreDisplay from "./ScoreDisplay";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100%"
  },
  title: {
    fontSize: "64px",
    lineHeight: "68px"
  },
  button: {
    backgroundColor: COLORS.accent
  }
});

const GamePage: React.FC = () => {
  const classes = useStyles({});
  const gameService = useDependency(GameService);
  const [selected, setSelected] = React.useState<number>(null);

  React.useEffect(() => {
    if (
      gameService.currentAnswer !== null &&
      gameService.currentAnswer !== undefined
    ) {
      setSelected(prev => gameService.currentAnswer);
    }
  }, [gameService.currentAnswer]);

  const currentQn = gameService.getCurrentQuestion();

  const selectOption = (option: number) => {
    setSelected(option);
    gameService.currentAnswer = null;
    AjaxService.submitAnswer(currentQn.position, option).then(res => {
      gameService.handleSubmitResponse(res);
    });
  };

  const renderOptionsContent = () => {
    if (currentQn) {
      return (
        <>
          <TitleCard>
            <Typography variant="h1" className={classes.title}>
              {currentQn.title}
            </Typography>
          </TitleCard>
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            padding="24px"
          >
            <ImageOptions
              question={currentQn}
              selected={selected}
              isConfirmedSelection={selected === gameService.currentAnswer}
              onSelect={selectOption}
            />
          </Box>
        </>
      );
    } else {
      return (
        <TitleCard className={classes.title}>No question found!</TitleCard>
      );
    }
  };

  const renderEndgameRedirector = () => {
    if (gameService.gameState === ProgressState.END) {
      return <Redirect to="/end" />;
    }
  };

  return (
    // <div className={classes.container} onClick={() => wtf(gameService)}>
    <div className={classes.container}>
      <TableIndicator name="Table 1" />
      <ScoreDisplay score={gameService.score} />
      <Box marginTop="54px" />
      {renderOptionsContent()}
      <Ranking
        show={gameService.questionState === QuestionState.END}
        rank={gameService.rank}
      />
      {renderEndgameRedirector()}
    </div>
  );
};

const wtf = (gameService: GameService) => {
  // AjaxService.fetchQuestionResults(gameService.currentQuestionPos).then(res => {
  //   console.log("Placeholder fetch question results", res);
  //   gameService.rank++;
  //   gameService.update();
  // });
  // gameService.questionState =
  //   gameService.questionState === QuestionState.END
  //     ? QuestionState.START
  //     : QuestionState.END;
  // gameService.update();
};

export default GamePage;
