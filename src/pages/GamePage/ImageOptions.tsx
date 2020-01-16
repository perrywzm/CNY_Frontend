import React from "react";
import { GridList, GridListTile, makeStyles } from "@material-ui/core";
import Question from "../../models/Question";
import Selector from "./Selector";
import { COLORS } from "../../theme";
import ImageTitle from "./ImageTitle";

interface StyleProps {
  isAnimated: boolean;
}

const useStyles = makeStyles({
  gridlist: {
    opacity: (props: StyleProps) => (props.isAnimated ? 0 : 1),
    transition: "opacity 0.4s"
    // transition: (props: StyleProps) =>
    //   props.hasTriggeredHide ? "opacity 0.4s" : ""
  },
  tile: {
    border: `8px solid ${COLORS.secondary}`
  }
});

interface Props {
  question: Question;
  selected: number;
  isConfirmedSelection: boolean;
  isAnimated: boolean;
  onSelect: (option: number) => void;
}

const ImageOptions: React.FC<Props> = props => {
  const classes = useStyles({ isAnimated: props.isAnimated });

  // React.useEffect(() => {
  //   if (!hasTriggeredHide) {
  //     setTimeout(() => setHasTriggeredHide(true), 400);
  //     // setHasTriggeredHide(false);
  //   }
  // }, [hasTriggeredHide]);

  // React.useEffect(() => {
  //   if (props.isAnimated) {
  //     setHasTriggeredHide(false);
  //     // Queue macrotask to re-enable opacity transition after instantly vanishing the images
  //     // setTimeout(() => setHasTriggeredHide(true), 0);
  //   }
  // }, [props.isAnimated]);

  return (
    <GridList cellHeight={150} spacing={20} className={classes.gridlist}>
      {props.question.images
        .sort((a, b) => a.id - b.id)
        .map(image => {
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
  // console.log("Rerendered image");
  return (
    <img
      src={props.url}
      style={{ objectFit: "cover", height: "100%", width: "100%" }}
    />
  );
};
const PureImage = React.memo(_PureImage);

export default React.memo(ImageOptions);
