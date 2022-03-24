import React from 'react';

class ShippingDetailsForm extends React.Component {
  constructor(props) {
    super(props);
  }

  nextForm() {
    this.props.goToNextForm();
  }

  render() {
    return (
      <div>
        <h2>Shipping Details</h2>
        <input placeholder='line 1'></input>
        <input placeholder='line 2'></input>
        <input placeholder='city'></input>
        <input placeholder='state'></input>
        <input placeholder='zip code'></input>
        <input placeholder='phone number'></input>
        <button onClick={this.nextForm.bind(this)}>Next</button>
      </div>
    )
  }
}

export default ShippingDetailsForm;