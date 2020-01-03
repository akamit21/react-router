import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import Writers from "./components/Writers";

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
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/writers">Writers</Link>
          </li>
        </ul>
        <Route exact path="/" render={() => <div>kljkjh</div>} />
        <Route
          path="/writers"
          render={props => <Writers {...props} writers={this.state.writers} />}
        />
      </div>
    );
  }
}

export default App;
