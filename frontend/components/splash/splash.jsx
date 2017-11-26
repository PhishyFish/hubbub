import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
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
    return(
      <div className="splash-container">
        <header className="flex-space-between">
          <div class="splash-logo flex-space-between">
            <i className="fa fa-comments-o fa-2x" aria-hidden="true"></i>
            <h1>Hubbub</h1>
          </div>
          <nav className="flex-space-between">
            <a href="https://www.github.com/phishyfish"
              aria-label="Vickie's GitHub">
              <i className="fa fa-github fa-lg" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/vickie-chen"
              aria-label="Vickie's LinkedIn">
              <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
            </a>
            <button className="splash-button"
              onClick={this.demoLogin}>
              Demo Login
            </button>
          </nav>
        </header>

        <div className="splash-blurb flex-column-center">
          <h1>Join the commotion.</h1>
          <p>Real-time live chat. No frills. No hassle.</p>
          <div className="session-buttons">
            <Link to="/login">
              <button>Log In</button>
            </Link>
            <Link to="/register">
              <button className="button-green">Register</button>
            </Link>
          </div>
        </div>
        <div className="tiled-bg"></div>
      </div>
    );
  }
}

export default Splash;
