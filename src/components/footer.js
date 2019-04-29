import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

export default class Footer extends React.Component {
  onSubmit(e){
    e.preventDefault();
    console.log(`form saved: ${this.state.form_description}`);

    const newForm = {
      form_description: this.state.form_description
    };

    axios.post('http://localhost:4000/forms/add', newForm)
          .then(res => console.log(res.data));

      this.setState({
        form_description:''
      })
  }
  render() {
    return (
      <div>
          <div className="dropdown-divider"></div>
            <button type="button" onClick={this.handleSaveform} className="btn btn-danger">
              Save Form
            </button>
          </div>
    );
  }
}
