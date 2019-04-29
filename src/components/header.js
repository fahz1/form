import React from "react";
import ReactDOM from "react-dom";
import './header.css';

export default class Header extends React.Component {
  render() {
    return (


    <div>
          <div className="p-3 mb-2 bg-danger text-white">
              <div className="container">
                <h3>Form Builder</h3>
              </div>
          </div>
          <div className="dropdown-divider"></div>
    </div>
    );
  }
}
