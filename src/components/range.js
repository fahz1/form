import React from "react";
import ReactDOM from "react-dom";


export default class Range extends React.Component {
  constructor() {
    super();
    this.state = { values: [] };
  }



  handleChange = (i, event) => {
    console.log('handle clicked test clear');
    // let values = [...this.state.values];
    // values[i] = event.target.value;
    // this.setState({ values });
  };

  handleAddfield = () => {
    let fields = this.state.values;
    fields.push({ value: '' });
    this.setState({ values: fields });
    // console.log("should add text field");
  };

  updateFieldValue = index => event => {
    let fields = this.state.values;
    fields[index].value = event.target.value;
    this.setState({ values: fields });
    event.persist();
    return false;
  };


  handleClearfield = (i) => {
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState({ values });
     console.log('should remove the added field');
  };

  handleSaveform = () => {
    console.log('will save this form using node API');
  };

  render() {
    const fields = this.state.values.map((field, i) => {
      return (
        <div key={i}>
          <input
            type="range" name="points" min="0" max="10"
            value={field.value || ''}
            onChange={this.updateFieldValue(i)}
          />
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <button type="button" onClick={this.handleAddfield} className="small">
          Range
        </button>


        <button type="button" onClick={this.handleClearfield} className="small">
          x
        </button>

        {fields}
      </div>
    );
  }
}