import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      username: '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    console.log("state: ", this.state);
    return (
      <form>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.props.handleLogin}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
