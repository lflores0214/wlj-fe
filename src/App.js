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
import Dashboard from './components/Dashboard.compnent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path='/dashboard' >
          <Dashboard />
        </Route>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
