import React from 'react';
import PropTypes from 'prop-types';

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

Status.propTypes = {
  number: PropTypes.number,
}

export default Status;