import React from 'react';
import PropTypes from 'prop-types';

class DataCard extends React.Component {
    render() {
        const {user} = this.props
        return(
          <React.Fragment>
              <li key={`user-${user.id}`}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <ul>
                  {user.passwords.map((password,passwordIndex) =>
                    <li key={`password-${user.id}-${passwordIndex}`}>
                      {password}
                    </li>
                  )}
                </ul>
                <div>
                  <p>{user.bank.iban}</p>
                  <p>{user.bank.pin}</p>
                </div>
              </li>
          </React.Fragment>
        );
    }
}

DataCard.propTypes = {
  user: PropTypes.object
}

export default DataCard;