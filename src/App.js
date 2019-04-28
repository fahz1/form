import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import EditForm from "./components/editform";
import RadioButton from "./components/radiobutton";


class App extends Component {
  render() {
    return (
        <div className="container">
          <h3>Form Builder</h3>
          <EditForm />
        </div>
    );
  }
}

export default App;
