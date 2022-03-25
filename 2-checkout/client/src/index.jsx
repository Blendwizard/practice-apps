import React from "react";
import RenderDOM from "react-dom";
import CurrentForm from "./components/CurrentForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.url = 'http://localhost:3000/';

  }
  // :::::::: FUNCTIONS ::::::::
  submitAccount(name, email, password) {
    var userBody = {name, email, password};

    fetch(this.url + 'users',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userBody)
    })
  }


  render() {
    return (
      <div>
        <h1>Checkout Process</h1>
      <div>
        <CurrentForm submitAccount={this.submitAccount.bind(this)}/>
      </div>
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
      </div>
    )
  }
}

RenderDOM.render(<App/>, document.getElementById('root'));