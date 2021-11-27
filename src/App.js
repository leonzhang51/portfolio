import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./nav/nav";
import Footer from "./footer/footer";
import About from "./about/about";
import MyCV from "./myCV/myCV";
import Home from "./home/home";
import NoMatch from "./404/404";
import MyWorks from "./myWorks/myWorks";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/myCV" component={MyCV} />
          <Route path="/myworks" component={MyWorks}></Route>

          <Route component={NoMatch} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

/*(
<Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/myCV" component={MyCV} />
          <Route path="/myworks">
            <MyWorks />
          </Route>
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>

   
  );*/

/*
<Router>
      <div>
        <Nav></Nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/myCV" component={MyCV} />
          <Route path="/myworks" component={MyWorks}></Route>

          <Route component={NoMatch} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  */
