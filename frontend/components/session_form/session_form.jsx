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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
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
          <a href="#">
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

  render() {
    // randomize background image
    const bgImages = [
      'https://initiate.alphacoders.com/images/789/cropped-1920-1080-789450.jpg?7813',
      'https://initiate.alphacoders.com/images/716/cropped-1920-1080-716166.jpg?1765',
      'https://initiate.alphacoders.com/images/716/cropped-1920-1080-716926.jpg?8067',
      'https://initiate.alphacoders.com/images/907/cropped-1920-1080-90708.jpg?8901',
      'https://initiate.alphacoders.com/images/553/cropped-1920-1080-553463.jpg?355',
      'https://initiate.alphacoders.com/images/633/cropped-1920-1080-633142.jpg?4387',
      'https://initiate.alphacoders.com/images/392/cropped-1920-1080-392895.jpg?7082',
      'https://initiate.alphacoders.com/images/739/cropped-1920-1080-739116.jpg?9795',
      'https://initiate.alphacoders.com/images/609/cropped-1920-1080-609858.jpg?770'
    ];

    let randomNum = Math.floor(bgImages.length * Math.random());
    const bgImage = { backgroundImage: `url(${bgImages[randomNum]})` };

    return (
      <div className="session-form-container flex-column-center" style={bgImage}>
        <section className="session-form-outer">
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
