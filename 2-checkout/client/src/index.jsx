import React from "react";
import RenderDOM from "react-dom";
import CurrentForm from "./components/CurrentForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {

    return (
      <div>
        <h1>Checkout Process</h1>
      <div>
        <CurrentForm/>
      </div>
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
      </div>
    )
  }
}



RenderDOM.render(<App/>, document.getElementById('root'));