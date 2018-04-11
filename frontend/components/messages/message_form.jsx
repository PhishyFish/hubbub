import React from 'react';
import { withRouter } from 'react-router-dom';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.adjustHeight = this.adjustHeight.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.url !== newProps.match.url) {
      this.setState({ body: '' });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let { params } = this.props.match;
    this.props.createMessage(
      { body: e.target.value.trim() },
      params.channelId,
      params.serverId
    );

    e.target.value = '';
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleKeyDown(e) {
    let messageBody = e.target.value.trim();

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (messageBody) this.handleSubmit(e);
    }
  }

  adjustHeight(e) {
    e.target.style.height = 'auto';

    if (e.target.scrollHeight < 146) {
      e.target.style.height = e.target.scrollHeight + 'px';
    } else {
      e.target.style.height = 145 + 'px';
    }
  }

  renderChannelName() {
    let { currentChannel, match } = this.props;
    let sym = match.params.serverId === '@me' ? '' : '#';
    return currentChannel ? `Message ${sym}${currentChannel.name}` : '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="message-input">
          <textarea autoFocus
            className="chat"
            style={{ height: 'auto' }}
            rows="1"
            placeholder={this.renderChannelName()}
            value={this.state.body}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onKeyUp={this.adjustHeight}
            ref={node => node && node.focus()}
          />
        </div>
      </form>
    );
  }
}

export default withRouter(MessageForm);
