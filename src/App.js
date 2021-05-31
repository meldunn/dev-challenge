import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Registration";
import Welcome from "./pages/Welcome";
import CustomButton from "./components/CustomButton";
import * as ReactBootStrap from "react-bootstrap";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path="/">
            <Welcome />
          </Route> 
          <Route exact path="/register">
            <Register />
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
