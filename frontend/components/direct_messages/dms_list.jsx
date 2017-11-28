import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import DMsListItem from './dms_list_item';

class DMsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDirectMessages();
  }

  // componentWillReceiveProps(newProps) {
  //   newProps.props.fetchDirectMessages();
  // }

  render() {
    return(
      <div className="scroller-wrap">
        <div className="channel-list flex-column scroller">
          <header>Direct Messages</header>
          {this.props.directMessages.map(dm => (
            <DMsListItem dm={dm} key={dm.id} />
          ))}
        </div>
    </div>
    );
  }
}

export default withRouter(DMsList);
