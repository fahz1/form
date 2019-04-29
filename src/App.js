import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "./components/textfield";
import RadioButton from "./components/radiobutton";
import DateFeild from "./components/datefeild";
import CheckBox from "./components/checkbox";
import Range from "./components/range";
import Header from "./components/header";
import Footer from "./components/footer";


class App extends Component {
  handleSaveform = () => {
    console.log('will save this form using node API');
  };

  render() {
    return (
        <div className="container">
          <Header />
          <TextField />
          <RadioButton />
          <DateFeild />
          <CheckBox />
          <Range />
          <Footer/>
        </div>
    );
  }
}

export default App;
