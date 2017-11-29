import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerHeader extends React.Component {
  componentDidMount() {
    this.props.fetchServer(this.props.serverId);
  }

  render() {
    return (
      <h1>{this.props.server.name}</h1>
    );
  }
}

export default withRouter(ServerHeader);
