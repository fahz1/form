import React, { Component } from 'react';

export default class CreateForm extends Component {
  constructor(props){
    super(props);

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeDropDown = this.onChangeDropDown.bind(this);
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        text: '',
        dropdown: '',
        checkbox: false,
      }
  }

  onChangeText(e){
    this.setState({
      text: e.target.value
    });
  }

  onChangeDropDown(e){
    this.setState({
      dropdown: e.target.value
    });
  }

  onChangeCheckBox(e){
    this.setState({
      checkbox: e.target.value
    });
  }



  onSubmit(e) {
    e.preventDefault();
    console.log(`Form Text: ${this.state.text}`);
    console.log(`Form DropDown: ${this.state.dropdown}`);
    console.log(`Form CheckBox: ${this.state.checkbox}`);

    this.setState({
      text: '',
      dropdown: '',
      checkbox: false
    })
  }

    render() {
        return (
            <div className="container">
              <h3>Create Form</h3>
                <p>Welcome to Create Form Component!!</p>
                <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Text-Feild: </label>
                       <input  type="text"
                               className="form-control"
                               value={this.state.text}
                               onChange={this.onChangeText}
                               />
                   </div>
                   <div className="form-group">
                       <label>DropDown: </label>
                       <input
                               type="dropdown"
                               className="form-control"
                               value={this.state.dropdown}
                               onChange={this.onChangeDropDown}
                               />
                   </div>




                   <div className="form-group">
                       <div className="form-check form-check-inline">
                           <input  className="form-check-input"
                                   type="CheckBox"
                                   value={this.state.checkbox}
                                   onChange={this.onChangeCheckBox}
                                   />
                           <label className="form-check-label">Yes</label>
                       </div>
                       <div className="form-check form-check-inline">
                           <input  className="form-check-input"
                                   type="CheckBox"
                                   checked={this.state.checkbox}
                                   onChange={this.onChangeCheckBox}
                                   />
                           <label className="form-check-label">No</label>
                       </div>

                   </div>


                   <div className="form-group">
                       <input type="submit" value="Save Form" className="btn btn-primary" />

                   </div>
               </form>
            </div>
        )
    }
}
