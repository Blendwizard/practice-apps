import React from 'react';
import storage from './form_storage.js';

class ConfirmationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  submitForm() {


  }

  render() {
    return (
      <div>
      <h2>Confirmation</h2>
      <h3>Account Info</h3>
        <div>Name: {}</div>
        <div>Email: {}</div>

      <h3>Shipping Info</h3>
      <h3>Billing</h3>

      <button onClick={this.submitForm.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default ConfirmationForm;