import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Legion of Hell</h1>
          <p>{this.props.date}</p>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;