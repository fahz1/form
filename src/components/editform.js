import React from "react";
import ReactDOM from "react-dom";


export default class EditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      holders: [{ name: "" }]
    };
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleholderNameChange = idx => evt => {
    const newholders = this.state.holders.map((holder, sidx) => {
      if (idx !== sidx) return holder;
      return { ...holder, name: evt.target.value };
    });

    this.setState({ holders: newholders });
  };

  handleSubmit = evt => {
    const { name, holders } = this.state;
    alert(`Added: ${name} with ${holders.length} holders`);
  };

  handleAddholder = () => {
    this.setState({
      holders: this.state.holders.concat([{ name: "" }])

    });
  };

  handleRemoveholder = idx => () => {
    this.setState({
      holders: this.state.holders.filter((s, sidx) => idx !== sidx)
    });
  };

  handleClearholder = () => {
    this.setState({
      holders: [{ name: "" }]

    });
  };


  render() {
    return (
      <div className="container-fluid">
      <form onSubmit={this.handleSubmit}>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
        </div>
          <input type="text" className="form-control"
          placeholder="Form Title"
          value={this.state.name}
          onChange={this.handleNameChange}/>
        </div>

        {this.state.holders.map((holder, idx) => (
          <div className="row">
            <div className="col-sm-8">
              <label>Text Feild</label>
              <input type="text"
                    className="form-control"
                    value={holder.name}
                    onChange={this.handleholderNameChange(idx)}
                    />
            </div>
            <div className="col-sm-4">
              <button type="button"
                      onClick={this.handleAddholder}
                      className="small">
                      Add Text Feild
              </button>
              <button type="button"
                      onClick={this.handleRemoveholder(idx)}
                      className="small">
                      x
              </button>
            </div>
          </div>
        ))}

            {this.state.holders.map((holder, idx) => (
              <div className="row">
                <div className="col-sm-8">
                  <label>Date</label>
                  <input type="Date"
                          className="form-control"
                          value={holder.name}
                          onChange={this.handleholderNameChange(idx)}
                        />
                </div>
                <div className="col-sm-4">
                  <button type="button"
                    onClick={this.handleAddholder}
                    className="small">
                    Add Date
                  </button>
                  <button type="button"
                  onClick={this.handleRemoveholder(idx)}
                  className="small">
                  x
                  </button>
                </div>
              </div>
            ))}


            {this.state.holders.map((holder, idx) => (
              <div className="row">
              <div className="col-sm-8">
                <label>DropDown</label>
                <select>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>
                </select>
                </div>
                <div className="col-sm-4">
                  <button type="button"
                    onClick={this.handleAddholder}
                    className="small">
                    Add DropDown
                  </button>
                  <button type="button"
                    onClick={this.handleRemoveholder(idx)}
                    className="small">
                    x
                  </button>
              </div>
            </div>
            ))}

            <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                <button type="button"
                  onClick={this.handleAddholder}
                  className="small">
                  Save Form
                </button>
                <button type="button"
                  onClick={this.handleClearholder}
                  className="small">
                  Clear
                </button>
                </div>
              </div>
      </form>
      </div>
    );
  }
}
