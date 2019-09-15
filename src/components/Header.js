import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Legion of Hell</h1>
        <p>{this.props.date}</p>
      </React.Fragment>
    );
  }
}

export default Header;