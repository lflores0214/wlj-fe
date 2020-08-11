import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux"
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";


import LoginForm from "./pages/auth/Login.component";
import RegisterForm from "./pages/auth/Register.component";
import Dashboard from "./pages/Dashboard.component"
import Header from "./components/Header.component"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Route path="/" component={Header} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/dashboard" component={Dashboard} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}


export default connect(null)(App);
