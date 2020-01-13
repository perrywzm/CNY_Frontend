import React from "react";
import {
  makeStyles,
  GridListTile,
  GridList,
  GridListTileBar
} from "@material-ui/core";
import TitleCard from "../../components/TitleCard";
import { useHistory } from 'react-router-dom';

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

const GameDisplay: React.FC<Props> = () => {
  const classes = useStyles({});
  const history = useHistory();

  

  return (
    <div className={classes.container} onClick={() => history.push("/projection-score")}>
      <GridList style={{flex: 1, padding: 24}} cols={Math.ceil(qns.images.length / 2)}>
        {qns.images
          .filter((_, idx) => idx < Math.ceil(qns.images.length / 2))
          .map(image => (
            <GridListTile style={{ padding: 4, height: "100%" }}>
              <img src={image.url} />
              <GridListTileBar subtitle={image.title} />
            </GridListTile>
          ))}
      </GridList>
      <TitleCard className={classes.title}>CNY SNACKS</TitleCard>
      <GridList style={{flex: 1, padding: 24}}  cols={Math.ceil(qns.images.length / 2)}>
        {qns.images
          .filter((_, idx) => idx >= Math.ceil(qns.images.length / 2))
          .map(image => (
            <GridListTile  style={{ padding: 4, height: "100%" }}>
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

export default GameDisplay;

// export default class GameDisplay {}
