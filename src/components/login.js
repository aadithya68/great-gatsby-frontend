import React from "react";
import { handleLogin, isLoggedIn } from "../utils/auth";
import Form from "./Form";
import { navigate } from "gatsby"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  };

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(handleLogin(this.state));
    if (handleLogin(this.state)) {
        navigate(`/app`);
    }
  }

  render() {
    console.log(isLoggedIn());
    if (isLoggedIn()) {
      navigate(`/app`);
    }
    return (
      <div
        class="row justify-content-center align-items-center"
        style={{ minHeight: 500 }}
      >
        <div class="col-md-4 col-xs-3">
          <Form
            handleUpdate={(e) => this.handleUpdate(e)}
            handleSubmit={(e) => this.handleSubmit(e)}
          />
        </div>
      </div>
    );
  }
}

export default Login;
