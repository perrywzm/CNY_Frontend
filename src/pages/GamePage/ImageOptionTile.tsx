import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { COLORS } from "../../theme";
import { GridListTile } from "@material-ui/core";
import ImageTitle from "./ImageTitle";
import Selector from "./Selector";

const useStyles = makeStyles({
  tile: {
    border: `8px solid ${COLORS.secondary}`
  }
});

interface Props {
  classes?: Record<string, string>;
  image: { id: number; url: string; title: string };
  onSelect: () => void;
  selected: boolean;
  isConfirmedSelection: boolean;
}

const ImageOptionTile: React.FC<Props> = props => {
  // const classes = useStyles({});

  return (
    <GridListTile classes={{ tile: props.classes.tile }} onClick={props.onSelect}>
      <img src={props.image.url} />
      <ImageTitle>{props.image.title}</ImageTitle>
      <Selector
        selected={props.selected}
        isConfirmedSelection={props.isConfirmedSelection}
      />
    </GridListTile>
  );
};

export default ImageOptionTile;
