import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class MessagesListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { message } = this.props;
    
    return(
      <div className="message-group">
        <div className="message-icon">
          <img className="icon" src={message.author.img_url} />
        </div>
        <div className="message-content">
          <div className="message-title">
            <span className="username">{message.author.username}</span>
            <span className="timestamp">{message.created_at}</span>
          </div>
          <div className="message-body">
            {message.body}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MessagesListItem);
