import React from "react";
import { COLORS } from "../theme";
import { makeStyles } from "@material-ui/core/styles";
import { useDependency } from "./../services/DependencyInjector";
import GameService from "./../game/GameService";

interface StyleProps {
  hasScore?: boolean;
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    padding: "10px 30px",
    color: COLORS.accent,
    position: "fixed",
    background: "#890504",
    textAlign: (props: StyleProps) => (props.hasScore ? "left" : "right")
  }
});

interface Props {
  onClick?: (e?: React.MouseEvent) => void;
}

const TableIndicator: React.FC<Props> = props => {
  const gameService = useDependency(GameService);
  const classes = useStyles({
    hasScore: gameService.score !== undefined && gameService.score !== null
  });

  return (
    <div onClick={props.onClick} className={classes.container}>
      {gameService.username}
    </div>
  );
};

export default TableIndicator;
