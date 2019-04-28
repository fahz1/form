import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "./components/textfield";
import RadioButton from "./components/radiobutton";
import DateFeild from "./components/datefeild";
import CheckBox from "./components/checkbox";
import Range from "./components/range";

class App extends Component {
  handleSaveform = () => {
    console.log('will save this form using node API');
  };

  render() {
    return (
        <div className="container">
          <h3>Form Builder</h3>
          <TextField />
          <RadioButton />
          <DateFeild/>
          <CheckBox />
          <Range />
          <button type="button" onClick={this.handleSaveform} className="small">
            Save Form
          </button>

        </div>
    );
  }
}

export default App;
