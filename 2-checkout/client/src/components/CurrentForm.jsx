import React from 'react';
import AccountCreationForm from './AccountCreationForm.jsx';
import ShippingDetailsForm from './ShippingDetailsForm.jsx';
import BillingInformationForm from './BillingInformationForm.jsx';
import ConfirmationForm from './ConfirmationForm.jsx';

class CurrentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutStarted: false,
      currentForm: ''
    };
  }


  startCheckout() {
    this.setState({checkoutStarted: !this.state.checkoutStarted})
    this.setState({currentForm: 1});
  }

  goToNextForm() {
    console.log(this.state.currentForm);
    this.setState({currentForm: this.state.currentForm + 1});
  }

  render() {
    if (!this.state.checkoutStarted) {
      return (
        <div>
          <button onClick={this.startCheckout.bind(this)}>Check Out</button>
        </div>
      )
    } else if (this.state.currentForm === 1) {
      return (
        <AccountCreationForm goToNextForm={this.goToNextForm.bind(this)} submitAccount={this.props.submitAccount.bind(this)}/>
      )
    }
    else if (this.state.currentForm === 2) {
       return (
        <ShippingDetailsForm goToNextForm={this.goToNextForm.bind(this)}/>
       )
    } else if (this.state.currentForm === 3) {
      return (
        <BillingInformationForm goToNextForm={this.goToNextForm.bind(this)}/>
      )
    } else {
      return (
        <ConfirmationForm/>
      )
    }

  }
}

export default CurrentForm;