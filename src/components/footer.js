import React from "react";
import ReactDOM from "react-dom";

export default class Footer extends React.Component {

  render() {
    return (
      <div>
          <div class="dropdown-divider"></div>
            <button type="button" onClick={this.handleSaveform} className="btn btn-danger">
              Save Form
            </button>
          </div>
    );
  }
}
