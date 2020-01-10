import React from "react";
import { GridList, GridListTile, makeStyles } from "@material-ui/core";
import Question from "../../models/Question";
import Selector from "./Selector";
import { COLORS } from "../../theme";
import ImageTitle from "./ImageTitle";
import ImageOptionTile from "./ImageOptionTile";

const useStyles = makeStyles({
  tile: {
    border: `8px solid ${COLORS.secondary}`
  }
});

interface Props {
  question: Question;
  selected: number;
  isConfirmedSelection: boolean;
  onSelect: (option: number) => void;
}

const ImageOptions: React.FC<Props> = props => {
  const classes = useStyles({});
  return (
    <GridList cellHeight={150} spacing={20}>
      {props.question.images.map(image => {
        return (
          <GridListTile
            classes={{ tile: classes.tile }}
            onClick={() => props.onSelect(image.id)}
          >
            <PureImage url={image.url} />
            <ImageTitle>{image.title}</ImageTitle>
            <Selector
              selected={image.id == props.selected}
              isConfirmedSelection={props.isConfirmedSelection}
            />
          </GridListTile>
        );
        // return (
        //   <ImageOptionTile
        //     classes={classes}
        //     image={image}
        //     onSelect={() => props.onSelect(image.id)}
        //     selected={image.id == props.selected}
        //     isConfirmedSelection={props.isConfirmedSelection}
        //   />
        // );

        // <GridListTile
        //   classes={{ tile: classes.tile }}
        //   onClick={() => props.onSelect(image.id)}
        // >
        //   <img src={image.url} />
        //   <ImageTitle>{image.title}</ImageTitle>
        //   <Selector
        //     selected={image.id == props.selected}
        //     isConfirmedSelection={props.isConfirmedSelection}
        //   />
        // </GridListTile>
      })}
    </GridList>
  );
};

const _PureImage: React.FC<{ url: string }> = props => {
  console.log("Rerendered image")
  return <img src={props.url} style={{objectFit: "cover"}} />;
};
const PureImage = React.memo(_PureImage);

export default React.memo(ImageOptions);