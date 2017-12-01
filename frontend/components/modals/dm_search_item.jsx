import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class DMSearchItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      member: [],
      name: []
    };

    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect(e) {
    e.preventDefault(e);
    
    if (e.currentTarget.classList.contains('selected')) {
      e.currentTarget.classList.remove('selected');
    } else {
      e.currentTarget.classList.add('selected');
    }

    let arr = e.currentTarget.value.split(',');
    let member = [arr[0]];
    let name = [arr[1]];

    if (e.currentTarget.classList.contains('selected') && name) {
      this.props.addMember(member, name);
    } else {
      this.props.removeMember(member, name);
    }
  }

  render() {
    let { user } = this.props;
    let selected;
    if (this.props.selected === "true") {
      selected = "selected";
    } else {
      selected = "";
    }

    return(
      <button className={`user-result ${selected}`}
        onClick={this.toggleSelect}
        value={[user.id, user.username]}>
        <div className="icon-tiny">
          <img className="icon-tiny" src={user.img_url} />
        </div>
        <span className="search-username">{user.username}</span>
        <span className="search-user-id">#{user.id}</span>
      </button>
    );
  }
}

export default withRouter(DMSearchItem);
