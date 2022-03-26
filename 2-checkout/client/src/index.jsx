import React from "react";
import RenderDOM from "react-dom";
import CurrentForm from "./components/CurrentForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allowed: true
    };
    this.url = 'http://localhost:3000/';

  }
  // :::::::: FUNCTIONS ::::::::
  componentDidMount() {
    console.log("hllelel")
    this.checkStatus();
  }

  // Check if client has already checked out
  checkStatus() {
    fetch(this.url + 'users', {
      headers: {
        method: "GET"
      }
    })
      .then((response) => {
        console.log(response.status)
        if (response.status === 300) {
          this.setState({allowed: false});
        } else {
          this.setState({allowed: true});
        }
      })
      .catch();
      console.log("Allowed Status:::", this.state.allowed);
  }


  // Should handle cookie-uniqueness
  confirmSubmit() {
    fetch(this.url + 'users',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        console.log("Response:::", response.status);
      })
      .catch()
  }





  // Not currently in use
  submitAccount(name, email, password) {
    var userBody = { name, email, password };

    fetch(this.url + 'users',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userBody)
      })
  }



  render() {
    return (
      <div>
        <h1>Checkout Process</h1>
        <div>
          <CurrentForm confirmSubmit={this.confirmSubmit.bind(this)} submitAccount={this.submitAccount.bind(this)} allowedToSubmit={this.state.allowed} />
        </div>
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
      </div>
    )
  }
}

RenderDOM.render(<App />, document.getElementById('root'));