import React from 'react';
import storage from './form_storage.js';

class ShippingDetailsForm extends React.Component {
  constructor(props) {
    super(props);
  }

  nextForm() {
    var line1 = document.getElementById('line-1').value;
    var line2 = document.getElementById('line-2').value;

    var address = line1 + '' + line2;
    var city = document.getElementById('city-input').value;
    var state = document.getElementById('state-input').value;
    var zip = document.getElementById('zip-input').value;
    var phone = document.getElementById('phone-input').value;

    storage[0].shippingInfo.street = address;
    storage[0].shippingInfo.city = city;
    storage[0].shippingInfo.state = state;
    storage[0].shippingInfo.zip = zip;
    storage[0].shippingInfo.phone = phone;

    // console.log("User info so far:::", storage[0]);

    this.props.goToNextForm();
  }

  render() {
    return (
      <div>
        <h2>Shipping Details</h2>
        <input id='line-1' placeholder='line 1'></input>
        <input id='line-2' placeholder='line 2'></input>
        <input id='city-input' placeholder='city'></input>
        <input id='state-input' placeholder='state'></input>
        <input id='zip-input' placeholder='zip code'></input>
        <input id='phone-input' placeholder='phone number'></input>
        <button onClick={this.nextForm.bind(this)}>Next</button>
      </div>
    )
  }
}

export default ShippingDetailsForm;