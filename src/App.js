import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "./components/textfield";
import RadioButton from "./components/radiobutton";


class App extends Component {
  render() {
    return (
        <div className="container">
          <h3>Form Builder</h3>
          <TextField />
          <RadioButton />
        </div>
    );
  }
}

export default App;
