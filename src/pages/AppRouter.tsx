import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SplashPage from "./SplashPage/SplashPage";
import WaitingPage from "./WaitingPage/WaitingPage";
import GamePage from "./GamePage/GamePage";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SplashPage />
        </Route>
        <Route path="/lobby" exact>
          <ProtectedRoute>
            <WaitingPage />
          </ProtectedRoute>
        </Route>
        <Route path="/game" exact>
          <ProtectedRoute>
            <GamePage />
          </ProtectedRoute>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
