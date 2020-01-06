import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import './assets/SentyWEN2017.ttf';
import AppRouter from "./pages/AppRouter";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
