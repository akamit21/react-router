import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

const Routes = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </React.Fragment>
  );
};

export default Routes;
