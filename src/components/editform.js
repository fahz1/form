import React from "react";
import ReactDOM from "react-dom";


export default class EditForm extends React.Component {
  constructor() {
    super();
    this.state = { values: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI(){
     return this.state.values.map((el, i) =>
         <div key={i}>
    	    <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
         </div>
     )
  }
  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
 }


    handleAddfeild = () => {

    console.log("should add text field");
    };


    handleClearfeild = () => {
    console.log("should remove the added feild");
    };

    handleSaveform = () => {
    console.log("will save this form using node API");
    }

    handleSubmit(event) {
    alert('A name was submitted: ' + this.state.values.join(', '));
    event.preventDefault();
    }


  render() {
    return (
      <div className="container-fluid">
          {this.createUI()}
          <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
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
