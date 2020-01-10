import React from 'react'
import LanternImg from "../../assets/lantern.png";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: -12,
    left: 0,
    padding: "12px 24px 24px 24px",
    background: `url(${LanternImg}) no-repeat`,
    backgroundSize: "cover",
    textAlign: "center",
    fontSize: "0.8em"
  }
})

interface Props {
  
}

const ScoreDisplay: React.FC<Props> = (props) => {
  const classes = useStyles({});
  return (
    <div className={classes.container}>
      Score:
      <br />
      123
    </div>
  )
}

export default ScoreDisplay
