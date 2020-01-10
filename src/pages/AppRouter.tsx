import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SplashPage from "./SplashPage/SplashPage";
import WaitingPage from "./WaitingPage/WaitingPage";
import GamePage from "./GamePage/GamePage";
import ProtectedRoute from "./ProtectedRoute";
import GameDisplay from "./GamePage/GameDisplay";
import ScoreDisplay from "./ScoreDisplay/ScoreDisplay";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* <Route path="/score">
          <ScoreDisplay />
          <SplashPage />
        </Route> */}
        <Route exact path="/">
          {/* <GameDisplay /> */}
          <SplashPage />
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
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
