import React from 'react';

class BillingInformationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  nextForm() {
    this.props.goToNextForm();
  }

  render() {
    return (
      <div>
      <h2>Billing Information</h2>
      <input placeholder='Card Number'></input>
      <input placeholder='Expiry Date'></input>
      <input placeholder='CW'></input>
      <input placeholder='Billing Zipcode'></input>
      <button onClick={this.nextForm.bind(this)}>Next</button>
    </div>
    )
  }
}

export default BillingInformationForm;