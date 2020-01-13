import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SplashPage from "./SplashPage/SplashPage";
import WaitingPage from "./WaitingPage/WaitingPage";
import GamePage from "./GamePage/GamePage";
import ProtectedRoute from "./ProtectedRoute";
import GameDisplay from "./GamePage/GameDisplay";
import ScoreDisplay from "./ScoreDisplay/ScoreDisplay";
import EndingPage from "./EndingPage/EndingPage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/projection-qn">
          <GameDisplay />
        </Route>
        <Route path="/projection-score">
          <ScoreDisplay />
        </Route>
        <Route path="/lobby">
          <ProtectedRoute>
            <WaitingPage />
          </ProtectedRoute>
        </Route>
        <Route path="/game">
          <ProtectedRoute>
            <GamePage />
          </ProtectedRoute>
        </Route>
        <Route path="/end">
          <ProtectedRoute>
            <EndingPage />
          </ProtectedRoute>
        </Route>
        <Route path="/">
          {/* <GameDisplay /> */}
          <SplashPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
