import React from 'react';

class AccountCreationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  nextForm() {

    var inputtedName = document.getElementById('name-input').value;
    var inputtedEmail = document.getElementById('email-input').value;
    var inputtedPass = document.getElementById('password-input').value;
    // // Renders next form to be filled out
    // this.props.goToNextForm();
    // // Submits account details to server through App
    this.props.submitAccount(inputtedName, inputtedEmail, inputtedPass);
  }



  render() {
    return (
      <div>
        <h2>Account Creation</h2>
        <input id='name-input' placeholder='name'></input>
        <input id='email-input' placeholder='email'></input>
        <input id='password-input' placeholder='password'></input>
        <button onClick={this.nextForm.bind(this)}>Next</button>
        </div>
    )
  }
}

export default AccountCreationForm;