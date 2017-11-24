import React from 'react';
import { NavLink, withRouter, Switch } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import Channels from '../channels/channels';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="servers-container">
          <div className="scroller-wrap">
            <section className="servers">
              <NavLink to="/channels/@me">
                <div className="icon friends">
                  <i className="fa fa-users fa-lg"></i>
                </div>
              </NavLink>
                <hr />
                <NavLink to="/channels/serverA">
                <div className="icon server">
                    <span>A</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverB">
                  <div className="icon server">
                    <span>B</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverC">
                  <div className="icon server">
                    <span>C</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverD">
                  <div className="icon server">
                    <span>D</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverE">
                  <div className="icon server">
                    <span>E</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverF">
                  <div className="icon server">
                    <span>F</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverG">
                  <div className="icon server">
                    <span>G</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverH">
                  <div className="icon server">
                    <span>H</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverI">
                  <div className="icon server">
                    <span>I</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverJ">
                  <div className="icon server">
                    <span>J</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverK">
                  <div className="icon server">
                    <span>K</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverL">
                  <div className="icon server">
                    <span>L</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverM">
                  <div className="icon server">
                    <span>M</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverN">
                  <div className="icon server">
                    <span>N</span>
                  </div>
                </NavLink>
                <NavLink to="/channels/serverO">
                  <div className="icon server">
                    <span>O</span>
                  </div>
                </NavLink>
            </section>
          </div>
        </div>
        <Channels />
      </div>
    );
  }
}

export default Main;
