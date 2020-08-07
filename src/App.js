import React from "react";
import { Route } from "react-router-dom";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

import ThemeToggler from "./components/ThemeToggler";
import LoginForm from "./pages/auth/Login.component";
import RegisterForm from "./pages/auth/Register.component";
import Dashboard from "./components/Dashboard.compnent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/dashboard" component={Dashboard} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
