import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Form = props => (
  <tr>
    <td className={props.form.form_completed ? 'completed' : ''}>{props.form.form_description}</td>
    <td>
      <Link to={"/add/"+props.form_id}>Add Now</Link>
    </td>
  </tr>
)

export default class FormsList extends Component {
  constructor(props){
    super(props);
    this.state = {FormsList: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/forms/').then(response => {
      this.setState({ forms: response.data });
    })
    .catch(function (error){
      console.log(error);
    })
  }

  formList(){
    if (this.props.forms){
      return this.state.forms.map(function(currentForm, i){
        return <Form form={currentForm} key={i} />;
      })
    }
    }

    render() {
        return (
          <div>
              <h3>Forms List</h3>
              <table className="table table-striped" style={{ marginTop: 20 }} >
                
                  <tbody>
                      { this.formList() }
                  </tbody>
              </table>
          </div>
        )
    }
}
