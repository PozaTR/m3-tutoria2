import React from 'react';

class Status extends React.Component {
  render() {
    return (
      // <p>{this.props.number > 1
      //     ? `Mostrando ${this.props.number} registros`
      //     : `Mostrando ${this.props.number} registro`}</p>

      <p>{`Mostrando ${this.props.number} registro${this.props.number > 1 ? 's' : ''}`}</p>
    )
  }
}

export default Status;