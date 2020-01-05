import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Posts from "../components/Posts";
import Post from "../components/Post";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/posts" exact component={Posts} />
      <Route path="/posts/:post_id" component={Post} />
      <Route path="/contact" component={Contact} />
      <Route path="" />
    </Switch>
  );
};

export default Routes;
