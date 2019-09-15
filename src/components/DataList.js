import React from 'react';

class DataList extends React.Component {
    render() {
        return(
            <ul>
            {this.props.users.map((user,userIndex) => 
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
            )}
          </ul>
        );
    }
}

export default DataList;