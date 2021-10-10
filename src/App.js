import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./nav/nav";
import Footer from "./footer/footer";
import About from "./about/about";
import MyCV from "./myCV/myCV";
import MyWorks from "./myWorks/myWorks";
import Home from "./home/home";
import NoMatch from "./404/404";

function App() {
  return (
    <Router>
      <Nav></Nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/myCV">
          <MyCV />
        </Route>
        <Route path="/myWorks">
          <MyWorks />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
