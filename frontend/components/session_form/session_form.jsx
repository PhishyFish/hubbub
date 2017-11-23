import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
              &nbsp; {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  formGreeting() {
    if (this.props.formType === 'login') {
      return <h1>Welcome back!</h1>;
    } else {
      return <h1>Create an account</h1>;
    }
  }

  formButton() {
    if (this.props.formType === 'login') {
      return <button type="submit">Log in</button>;
    } else {
      return <button type="submit">Continue</button>;
    }
  }

  formFooter() {
    if (this.props.formType === 'login') {
      return (
        <footer>Need an account? &nbsp;
          <Link to="/register">Register</Link> or &nbsp;
          <a onClick={this.demoLogin}>
            log in as guest
          </a>
        </footer>
      );
    } else {
      return (
        <footer>
          Already have an account? &nbsp;
          <Link to="/login">Log in</Link>
        </footer>
      );
    }
  }

  demoLogin() {
    const demoUsers = [
      'sheepie', 'pnut', 'Sneezy', 'ZigZag', 'Slush', 'Ampharos', 'Loki',
      'bluebelle', 'Boston', 'Kyoto', 'bacon', 'Rick', 'Morty', 'Summer',
      'Snowball', 'santaslilhelper'
    ];

    let randomNum = Math.floor(demoUsers.length * Math.random());

    const demoUser = {
      user: {
        username: demoUsers[randomNum],
        password: 'password'
      }
    };

    return this.props.login(demoUser);
  }

  render() {
    return (
      <div className="session-form-container flex-column-center">
        <section className="session-form-box">
          <div className="session-form-logo flex-column-center">
            <h1>Hubbub</h1>
          </div>
          <form className="session-form" onSubmit={this.handleSubmit}>
            {this.formGreeting()}
            {this.renderErrors()}
            <label htmlFor="session-form-username">Username</label>
            <input type="text"
              autoComplete="off"
              spellCheck="false"
              id="session-form-username"
              value={this.state.username}
              onChange={this.update('username')}
            />
            <label htmlFor="session-form-password">Password</label>
            <input type="password"
              autoComplete="off"
              spellCheck="false"
              id="session-form-password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            {this.formButton()}
            {this.formFooter()}
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(SessionForm);
