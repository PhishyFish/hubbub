import React from 'react';

class DMsListHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers("@me");
  }

  openModal(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.add('open');
  }

  render() {
    return(
      <div className="channels-header">
        <div className="search-bar">
          <div className="search-bar-inner">
            <button onClick={this.openModal}>
              Find or start a conversation
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DMsListHeader;
