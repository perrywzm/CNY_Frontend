import React from "react";
import ScrollLeftImg from "../assets/scrollleft.png";
import ScrollImg from "../assets/scroll.png";
import ScrollRightImg from "../assets/scrollright.png";
import { TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  },
  left: {
    height: "calc(1em + 16px)"
  },
  body: {
    flex: 1,
    backgroundImage: `url(${ScrollImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  right: {
    height: "calc(1em + 16px)"
  },
  textfield: {
    margin: 12,
    padding: 8,
    backgroundColor: "rgba(0,0,0,0.2)",
    lineHeight: "1em"
  }
});

interface Props {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputScroll: React.FC<Props> = props => {
  const classes = useStyles({});
  return (
    <Box className={classes.container}>
      <img className={classes.left} src={ScrollLeftImg} />
      <div className={classes.body}>
        <TextField
          className={classes.textfield}
          placeholder={props.placeholder}
          onChange={props.onChange}
          InputProps={{
            inputProps: { maxLength: 8 },
            disableUnderline: true
          }}
        />
      </div>
      <img className={classes.right} src={ScrollRightImg} />
    </Box>
  );
};

export default TextInputScroll;
