import React from 'react';
import storage from './form_storage.js';

class BillingInformationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  nextForm() {
    var cardNum = document.getElementById('card-input').value;
    var expiry = document.getElementById('expiry-input').value;
    var cw = document.getElementById('CW-input').value;
    var zip = document.getElementById('zip-input').value;

    storage[0].billingInfo.card_number = cardNum;
    storage[0].billingInfo.expiration = expiry;
    storage[0].billingInfo.cw = cw;
    storage[0].billingInfo.zipcode = zip;


    this.props.goToNextForm();
  }

  render() {
    return (
      <div>
      <h2>Billing Information</h2>
      <input id='card-input' placeholder='Card Number'></input>
      <input id='expiry-input' placeholder='Expiry Date'></input>
      <input id='CW-input' placeholder='CW'></input>
      <input id='zip-input' placeholder='Billing Zipcode'></input>
      <button onClick={this.nextForm.bind(this)}>Next</button>
    </div>
    )
  }
}

export default BillingInformationForm;