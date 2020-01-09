import React from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";
import Question from "../../models/Question";

interface Props {
  question: Question;
}

const ImageOptions: React.FC<Props> = props => {
  return (
    <GridList cellHeight={180}>
      {props.question.images.map(image => (
        <GridListTile style={{padding: 4}}>
          <img src={image.url} />
          <GridListTileBar subtitle={image.title} />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default ImageOptions;
