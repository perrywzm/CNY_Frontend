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
import Question from "../../models/Question";

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
  const [cachedCurrentQn, setCachedCurrentQn] = React.useState<Question>(null)
  const [selected, setSelected] = React.useState<number>(null);
  const [shouldImageRerender, setShouldImageRerender] = React.useState(true);

  React.useEffect(() => {
    if (gameService.getCurrentQuestion()) {
      setCachedCurrentQn(gameService.getCurrentQuestion());
    }
    // Attempt to restore previously selected answer
    AjaxService.fetchQuestionAnswer(gameService.currentQuestionPos).then(
      ans => {
        console.log(ans);
        gameService.currentAnswer = ans;
        gameService.update();
      }
    );
  }, []);

  React.useEffect(() => {
    if (
      gameService.currentAnswer !== null &&
      gameService.currentAnswer !== undefined
    ) {
      setSelected(prev => gameService.currentAnswer);
    }
  }, [gameService.currentAnswer]);

  React.useEffect(() => {
    setShouldImageRerender(true);
    // Delay state change for animation
    setTimeout(() => {
      setShouldImageRerender(false);
      setCachedCurrentQn(gameService.getCurrentQuestion())
    }, 400);
  }, [gameService.currentQuestionPos]);

  // const cachedCurrentQn = gameService.getCurrentQuestion();

  const selectOption = (option: number) => {
    setSelected(option);
    gameService.currentAnswer = null;
    AjaxService.submitAnswer(cachedCurrentQn.position, option).then(res => {
      gameService.handleSubmitResponse(res);
    });
  };

  const renderOptionsContent = () => {
    if (cachedCurrentQn) {
      return (
        <>
          <TitleCard>
            <Typography variant="h1" className={classes.title}>
              {cachedCurrentQn.title}
            </Typography>
          </TitleCard>
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            padding="24px"
          >
            <ImageOptions
              isAnimated={shouldImageRerender}
              question={cachedCurrentQn}
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
      <TableIndicator />
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

export default GamePage;
