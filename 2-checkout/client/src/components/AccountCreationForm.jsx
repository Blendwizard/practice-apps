import React from 'react';
import storage from './form_storage.js';

class AccountCreationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  nextForm() {

    var inputtedName = document.getElementById('name-input').value;
    var inputtedEmail = document.getElementById('email-input').value;
    var inputtedPass = document.getElementById('password-input').value;
    // // Renders next form to be filled out
    storage[0].accountInfo.name = inputtedName;
    storage[0].accountInfo.email = inputtedEmail;
    storage[0].accountInfo.password = inputtedPass;
    this.props.goToNextForm();

    // // Submits account details to server through App
    // this.props.submitAccount(inputtedName, inputtedEmail, inputtedPass);
  }



  render() {
    return (
      <div>
        <h2>Account Creation</h2>
        <input id='name-input' placeholder='Name'></input>
        <input id='email-input' placeholder='Email'></input>
        <input type='password' id='password-input' placeholder='Password'></input>
        <button onClick={this.nextForm.bind(this)}>Next</button>
        </div>
    )
  }
}

export default AccountCreationForm;