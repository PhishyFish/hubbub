import React from 'react';
import { withRouter } from 'react-router-dom';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="message-input">
          <textarea className="chat"
            rows="1"
            placeholder="Message (channel/group/username)">
          </textarea>
        </div>
      </form>
    );
  }
}

export default withRouter(MessageForm);
