import React from 'react';

class AccountCreationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  nextForm() {
    this.props.goToNextForm();
  }

  render() {
    return (
      <div>
        <h2>Account Creation</h2>
        <input placeholder='name'></input>
        <input placeholder='email'></input>
        <input placeholder='password'></input>
        <button onClick={this.nextForm.bind(this)}>Next</button>
        </div>
    )
  }
}

export default AccountCreationForm;