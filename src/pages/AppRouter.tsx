import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SplashPage from "./SplashPage/SplashPage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SplashPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
