import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <ul>
          Users!
          <p>{this.props.users.length}</p>
          <p>{this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  debugger
  return { users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
