import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CoinImg from "../../../components/CoinTree/coin.png";
import PureCanvas from "./PureCanvas";
import { COLORS } from "./../../../theme";
import Modal from "@material-ui/core/Modal";
import { Card, Typography } from "@material-ui/core";

const COIN_GOAL = 8888;

const useStyles = makeStyles({
  canvasContainer: {
    position: "absolute",
    zIndex: 1001,
    top: -300,
    left: 0,
    // background: "rgba(0,255,0,0.4)",
    width: "100%",
    height: 720,
    pointerEvents: "none"
  },
  coinScorer: {
    position: "absolute",
    zIndex: 191,
    top: -12,
    left: 20,
    fontSize: "1.5em",
    color: COLORS.accent,
    textShadow: "0 0 6px #000, 0 0 8px #000"
  },
  cointreeHitBox: {
    position: "absolute",
    zIndex: 192,
    top: "24px",
    left: "50%",
    width: "270px",
    height: "200px",
    transform: "translate3d(-50%, 0, 0)"
    // background: "rgba(0,0,255,0.3)"
  },
  coinWinModal: {
    margin: 24,
    padding: 24,
    fontSize: 24,
    color: COLORS.accent,
    background: COLORS.primary,
    outline: "none",
    "& :focus": {
      outline: "none"
    }
  },
  winModalTitle: {
    fontWeight: "bold",
    textAlign: "center"
  },
  glowingWinModalText: {
    textShadow: `0 0 8px ${COLORS.secondary}, 0 0 8px ${COLORS.secondary}`
  }
});

interface Props {}

const CoinTreeGame: React.FC<Props> = () => {
  const classes = useStyles({});
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [canvasWidth, setCanvasWidth] = React.useState(1);
  const [coins, setCoins] = React.useState<Coin[]>([]);
  // Set to false to terminate the game
  const renderControlRef = React.useRef<number>(null);
  const coinImgLoadingRef = React.useRef(false);
  const coinImgRef = React.useRef<HTMLImageElement>(null);
  const [showCoinModal, setShowCoinModal] = React.useState(false);
  const timeTakenToWin = React.useRef(0);

  // Game state
  const coinInitTime = React.useRef(null);
  const coinRateRef = React.useRef(1);
  const coinDecayRef = React.useRef(0);
  const [coinScore, setCoinScore] = React.useState(0);
  const isDelayingClose = React.useRef(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setCanvasWidth(() => window.innerWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    coinImgRef.current = new Image();
    coinImgRef.current.src = CoinImg;
    coinImgRef.current.onload = () => (coinImgLoadingRef.current = true);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const coinRenderer = () => {
      // Check for unmounted components
      if (!canvasRef || !canvasRef.current) return;
      // Check if coin img has loaded
      if (coinImgLoadingRef.current) {
        // Calculate physics
        coins.forEach(c => gameTickForCoin(c));

        // Render all coins
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        coins.forEach(c => {
          if (!c.markedForDeletion) {
            ctx.drawImage(coinImgRef.current, c.x, c.y, 20, 20);
          }
        });

        // Wipe useless coins
        if (coins.find(c => c.markedForDeletion)) {
          coins.splice(
            0,
            coins.length,
            ...coins.filter(c => !c.markedForDeletion)
          );
        }

        // Stop unnecessary animation callbacks when there are no coins to animate
        if (coins.length === 0) {
          window.cancelAnimationFrame(renderControlRef.current);
        } else {
          // Continue animation
          renderControlRef.current = window.requestAnimationFrame(coinRenderer);
        }
      }
    };
    window.cancelAnimationFrame(renderControlRef.current);
    renderControlRef.current = window.requestAnimationFrame(coinRenderer);
  }, [coins]);

  const saveContextRef = (ctx: HTMLCanvasElement) => {
    canvasRef.current = ctx;
  };

  const decayCoinRate = () => {
    if (coinRateRef.current <= 0.1) {
      coinRateRef.current = 0;
    } else {
      coinRateRef.current *= Math.pow(
        0.2,
        (Date.now() - coinDecayRef.current) / 1000
      );
    }
  };

  const accelerateCoinRate = () => {
    coinRateRef.current += 1 + 0.1 * coinRateRef.current;
    if (coinRateRef.current > 50) coinRateRef.current = 50;
    coinDecayRef.current = Date.now();
  };

  const addCoin = (e: any) => {
    e.stopPropagation();
    if (!coinInitTime.current) {
      coinInitTime.current = Date.now();
    }
    if (coinScore === COIN_GOAL) {
      setCoinScore(score => 0);
      coinRateRef.current = 0;
      return;
    }
    // Decay spawn rate based on time interval between last coin burst and current
    decayCoinRate();
    // User-triggered burst to coin spawn rate
    accelerateCoinRate();
    // Spawn coins based on coin spawn rate
    setCoins(coins => [
      ...coins,
      ...spawnCoins(Math.floor(coinRateRef.current))
    ]);
    // Add to your score
    const scoreDelta = Math.floor(
      coinRateRef.current >= 50 ? 50 + 5 * Math.random() : coinRateRef.current
    );
    const newScore = coinScore + scoreDelta;
    if (newScore >= COIN_GOAL) {
      // ACTIVATE WIN!!!
      isDelayingClose.current = true;
      setTimeout(() => {
        if (isDelayingClose) {
          isDelayingClose.current = false;
        }
      }, 3000);
      timeTakenToWin.current =
        Math.round((Date.now() - coinInitTime.current) / 100) / 10;
      coinInitTime.current = null;
      setCoinScore(score => COIN_GOAL);
      setShowCoinModal(true);
    } else {
      setCoinScore(score => newScore);
    }
  };

  const renderCoinScorer = () => {
    if (coinScore) {
      return (
        <div className={classes.coinScorer}>
          <img width={32} height={32} src={CoinImg} /> ×{coinScore}
        </div>
      );
    }
  };

  const handleCloseWinModal = () => {
    if (!isDelayingClose.current) setShowCoinModal(false);
  };

  const renderCoinWinModal = () => {
    //setShowCoinModal(false)}>
    return (
      <Modal open={showCoinModal} onClose={handleCloseWinModal}>
        <Card className={classes.coinWinModal}>
          <Typography
            className={`${classes.winModalTitle} ${classes.glowingWinModalText}`}
          >
            Congratulations!
          </Typography>
          <Typography>
            You reached
            <span
              className={classes.glowingWinModalText}
            >{` ${COIN_GOAL} `}</span>
            coins in
            <span className={classes.glowingWinModalText}>
              {" "}
              {timeTakenToWin.current} seconds!{" "}
            </span>
            May you have good fortune this year!
          </Typography>
        </Card>
      </Modal>
    );
  };

  return (
    <>
      <div className={classes.canvasContainer}>
        <PureCanvas
          height={720}
          width={canvasWidth}
          saveCanvasRef={saveContextRef}
        />
      </div>
      {renderCoinScorer()}
      {renderCoinWinModal()}
      <div onTouchStart={addCoin} className={classes.cointreeHitBox} />
    </>
  );
};

class Coin {
  markedForDeletion: boolean = false;
  constructor(
    public x: number,
    public y: number,
    public vx: number,
    public vy: number
  ) {}
}

const GRAVITY = 2;
const gameTickForCoin = (c: Coin) => {
  c.vy += GRAVITY;
  c.vx *= 0.95;
  c.x += c.vx;
  c.y += c.vy;

  // Flag the coin to not be rendered and to be removed from the array if it is not
  // within the visible area
  if (!(c.y < 720 && c.x > 0 && c.x < window.innerWidth)) {
    c.markedForDeletion = true;
  }
};

const spawnCoins = (n: number) => {
  if (n < 1) return [];
  return [...Array(Math.min(n, 20))].map(i => {
    return new Coin(
      window.innerWidth / 2 + Math.random() * 50 - 25,
      320 + Math.random() * 40,
      Math.random() * 18 - 9,
      -20 - Math.random() * 10
    );
  });
};

export default CoinTreeGame;
