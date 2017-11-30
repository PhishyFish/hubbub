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
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.adjustHeight = this.adjustHeight.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.url !== newProps.match.url) {
      this.setState({ body: '' });
    }
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
      this.handleSubmit(e);
    }
  }

  adjustHeight(e) {
    e.target.style.height = 'auto';
    if (e.target.scrollHeight < 146) {
      e.target.style.height = (e.target.scrollHeight) + 'px';
    } else {
      e.target.style.height = 145 + 'px';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="message-input">
          <textarea
            className="chat"
            style={{ height: 'auto' }}
            rows="1"
            placeholder={'Message this group'}
            value={this.state.body}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onKeyUp={this.adjustHeight}
          >
          </textarea>
        </div>
      </form>
    );
  }
}

export default withRouter(MessageForm);
