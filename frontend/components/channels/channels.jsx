import React from 'react';
import { withRouter } from 'react-router-dom';

import ChannelsList from './channels_list';
import UserContainer from '../user/user_container';

class Channels extends React.Component {
  render() {
    return (
      <section className="channels">
        <UserContainer />
      </section>
    );
  }
}

export default withRouter(Channels);
