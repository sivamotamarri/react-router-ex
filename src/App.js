import React from "react";
import Nav from "./Nav";
import LifeCycle from "./LifeCycle";
import Shop from "./Shop";
import Home from "./Home";
import NormalComponent from "./FunctionalStateless";
import PureComponentEx from "./ReactPureComponent";
//import ItemDetail from "./ItemDetail";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="nav-divs">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lifecycle" component={LifeCycle} />
            <Route path="/shop" exact component={Shop} />
            <Route
              path="/functionalStateless"
              exact
              component={NormalComponent}
            />
            <Route path="/pureComponent" exact component={PureComponentEx} />
            {/* <Route path="/shop/:id" component={ItemDetail} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
