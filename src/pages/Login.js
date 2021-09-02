import React, { Component } from 'react';
import LoginInputs from '../components/LoginInputs';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      check: {
        checkEmail: false,
        checkName: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateName = this.validateName.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    if (name === 'email') this.validateEmail(value);
    if (name === 'name') this.validateName(value);
  }

  validateEmail(email) {
    const { check } = this.state;
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      this.setState({ check: { ...check, checkEmail: true } });
    } else this.setState({ check: { ...check, checkEmail: false } });
  }

  validateName(name) {
    const { check } = this.state;
    if (name.length > 1) {
      this.setState({ check: { ...check, checkName: true } });
    } else this.setState({ check: { ...check, checkName: false } });
  }

  render() {
    const { email, name, check, disable } = this.state;

    return (
      <LoginInputs
        email={ email }
        name={ name }
        check={ check }
        disable={ disable }
        handleChange={ this.handleChange }
      />
    );
  }
}

export default Login;