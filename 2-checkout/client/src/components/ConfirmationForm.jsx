import React from 'react';

class ConfirmationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  nextForm() {
    this.props.goToNextForm();
  }

  render() {
    return (
      <div>
      <h2>Confirmation</h2>
      <button>Submit</button>
      </div>
    )
  }
}

export default ConfirmationForm;