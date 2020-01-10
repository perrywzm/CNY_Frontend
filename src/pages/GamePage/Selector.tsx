import React from "react";
import { makeStyles, CircularProgress } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

interface StyleProps {
  selected?: boolean;
}

const useStyles = makeStyles({
  selector: {
    opacity: (props: StyleProps) => (props.selected ? 1 : 0),
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "#fff",
    // textShadow: "0 0 3px #00b14f",
    transition: "opacity 0.2s"
  },
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%,-50%,0)"
  },
  icon: {
    position: "absolute"
  },
  glow: {
    color: "#00b14f",
    filter: "blur(3px)"
  }
});

interface Props {
  selected?: boolean;
  isConfirmedSelection?: boolean;
}

const Selector: React.FC<Props> = props => {
  const classes = useStyles({ selected: props.selected });

  console.log("PROPPPPPPPPPPPPPPP", props);

  const renderSelectorContent = () => {
    if (props.selected) {
      if (props.isConfirmedSelection) {
        return (
          <>
            <DoneIcon className={`${classes.icon} ${classes.glow}`} />
            <DoneIcon className={classes.icon} />
          </>
        );
      } else {
        return (
          <div className={classes.spinner}>
            <CircularProgress />
          </div>
        );
      }
    }
    return null;
  };
  return <div className={classes.selector}>{renderSelectorContent()}</div>;
};

export default Selector;
