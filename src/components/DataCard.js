import React from 'react';

class DataCard extends React.Component {
    render() {
        const {user, userIndex} = this.props
        return(
          <React.Fragment>
              <li key={`user-${userIndex}`}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <ul>
                  {user.passwords.map((password,passwordIndex) =>
                    <li key={`password-${userIndex}-${passwordIndex}`}>
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

export default DataCard;