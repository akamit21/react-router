import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Writers from "./components/Writers";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      writers: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:2000/writers")
      .then(res => res.json())
      .then(writers => this.setState({ writers }));
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
        <Route
          path="/writers"
          render={props => <Writers {...props} writers={this.state.writers} />}
        />
      </div>
    );
  }
}

export default App;
