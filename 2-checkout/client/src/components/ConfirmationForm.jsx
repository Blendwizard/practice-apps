import React from 'react';
import storage from './form_storage.js';

class ConfirmationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  submitForm() {

    this.props.confirmSubmit();

  }

  render() {
    return (
      <div>
      <h2>Confirmation</h2>
      <h3>Account Info</h3>
        <div>Name: {storage[0].accountInfo.name}</div>
        <div>Email: {storage[0].accountInfo.email}</div>

      <h3>Shipping Info</h3>
        <div>Street: {storage[0].shippingInfo.street}</div>
        <div>City: {storage[0].shippingInfo.city}</div>
        <div>State: {storage[0].shippingInfo.state}</div>
        <div>Zip: {storage[0].shippingInfo.zip}</div>
        <div>Phone: {storage[0].shippingInfo.phone}</div>

      <h3>Billing</h3>
      <div>Card Number: {storage[0].billingInfo.card_number}</div>
      <div>Expiration: {storage[0].billingInfo.expiration}</div>
      <div>CW: {storage[0].billingInfo.cw}</div>
      <div>Billing Zipcode: {storage[0].billingInfo.zipcode}</div>


      <button onClick={this.submitForm.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default ConfirmationForm;