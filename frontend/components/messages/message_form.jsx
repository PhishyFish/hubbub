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
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeypress);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleKeypress(e) {
    if (e.keyCode === 13) {
      console.log("enter pressed!");
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
          >
          </textarea>
        </div>
      </form>
    );
  }
}

export default withRouter(MessageForm);
