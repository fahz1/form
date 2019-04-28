import React from "react";
import ReactDOM from "react-dom";


export default class EditForm extends React.Component {
  constructor() {
    super();
    this.state = { values: [] };
    }


    handleChange = (i, event) => {
      console.log("handle clicked test clear")
         // let values = [...this.state.values];
         // values[i] = event.target.value;
         // this.setState({ values });
      }


    handleAddfeild = () => {
      return this.state.values.map((el, i) =>
         <div key={i}>
    	    <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
    // console.log("should add text field");
    };


    handleClearfeild = () => {
    console.log("should remove the added feild")
    };

    handleSaveform = () => {
    console.log("will save this form using node API")
    }



  render() {
    return (
      <div className="container-fluid">
              <button type="button" onClick={this.handleAddfeild}
              className="small">Add Text Feild
              </button>

              <button type="button" onClick={this.handleSaveform}
                      className="small">Save Form
              </button>

              <button type="button" onClick={this.handleClearfeild}
                      className="small">Clear
              </button>

      </div>
    );
  }
}
