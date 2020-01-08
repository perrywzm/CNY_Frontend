import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SplashPage from "./SplashPage/SplashPage";
import WaitingPage from "./WaitingPage/WaitingPage";
import GamePage from "./GamePage/GamePage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SplashPage />
        </Route>
        <Route path="/lobby" exact>
          <WaitingPage />
        </Route>
        <Route path="/game" exact>
          <GamePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
