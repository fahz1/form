import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditForm from "./components/form";
import CreateForm from "./components/createform";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h3>Form Builder</h3>

        </div>
          <Route path="/" exact component={Form} />
      </Router>
    );
  }
}

export default App;
