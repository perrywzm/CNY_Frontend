import React from "react";
import {
  makeStyles,
  GridListTile,
  GridList,
  GridListTileBar
} from "@material-ui/core";
import TitleCard from "../../components/TitleCard";
import { COLORS } from "../../theme";
import { useHistory } from "react-router-dom";
import ProjectionAjaxService from "../../services/ProjectionAjaxService";

const useStyles = makeStyles({
  container: {
    height: "calc(100vh - 24px)",
    display: "flex",
    flexFlow: "column",
    overflow: "hidden"
  },
  title: {
    fontSize: "3em"
  }
});

interface Props {}

const ScoreDisplay: React.FC<Props> = () => {
  const classes = useStyles({});
  const history = useHistory();

  // React.useEffect(() => {
  //   ProjectionAjaxService.fetchQuestionResults();
  // }, []);

  return (
    <div
      className={classes.container}
      onClick={() => history.push("/projection-qn")}
    >
      <TitleCard className={classes.title}>CNY SNACKS</TitleCard>
      <div
        style={{
          padding: 24,
          height: "100%",
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        <div
          style={{
            margin: "4px 5vw",
            flex: 1,
            height: "40vh",
            background: COLORS.accent
          }}
        />
        <div
          style={{
            margin: "4px 5vw",
            flex: 1,
            height: "50vh",
            background: COLORS.accent
          }}
        />
        <div
          style={{
            margin: "4px 5vw",
            flex: 1,
            height: "30vh",
            background: COLORS.accent
          }}
        />
        <div
          style={{
            margin: "4px 5vw",
            flex: 1,
            height: "24vh",
            background: COLORS.accent
          }}
        />
        <div
          style={{
            margin: "4px 5vw",
            flex: 1,
            height: "10vh",
            background: COLORS.accent
          }}
        />
        <div
          style={{
            margin: "4px 5vw",
            flex: 1,
            height: "36vh",
            background: COLORS.accent
          }}
        />
      </div>
      <GridList style={{ padding: 24 }} cols={qns.images.length}>
        {qns.images
          .sort((a, b) => a.id - b.id)
          .map(image => (
            <GridListTile style={{ padding: 4, height: "100%" }}>
              <img src={image.url} />
              <GridListTileBar subtitle={image.title} />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

const qns = {
  id: 1,
  position: 1,
  title: "CNY snacks",
  images: [
    {
      id: 5,
      url:
        "https://thesmartlocal.com/wp-content/uploads/2020/01/Bak-kwa-delivery-Singapore-3.jpg",
      title: "Peanut Puffs",
      question: 1
    },
    {
      id: 4,
      url:
        "https://thesmartlocal.com/wp-content/uploads/2020/01/Bak-kwa-delivery-Singapore-3.jpg",
      title: "Bak Kwa",
      question: 1
    },
    {
      id: 2,
      url:
        "https://previews.123rf.com/images/tobi/tobi1609/tobi160900868/63232422-gold-foil-covered-chocolate-coins.jpg",
      title: "Chocolate Coins",
      question: 1
    },
    {
      id: 1,
      url: "https://farm2.staticflickr.com/1456/23974085714_efeeeda88e_o.jpg",
      title: "Love Letters",
      question: 1
    },
    {
      id: 3,
      url:
        "http://www.huangkitchen.com/wp-content/uploads/2016/01/DSC5211_new.jpg",
      title: "Pineapple Tart",
      question: 1
    },
    {
      id: 6,
      url:
        "https://thesmartlocal.com/wp-content/uploads/2020/01/Bak-kwa-delivery-Singapore-3.jpg",
      title: "Spicy Dried Shrimp Rolls",
      question: 1
    }
  ]
};

export default ScoreDisplay;

// export default class ScoreDisplay {}
