import React from 'react';
import { withRouter } from 'react-router-dom';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.value = '';
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log('enter pressed!');
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="message-input">
          <textarea
            className="chat"
            rows="1"
            placeholder={`Message (channel/group/username)`}
            value={this.state.body}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          >
          </textarea>
        </div>
      </form>
    );
  }
}

export default withRouter(MessageForm);
