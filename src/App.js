import React from 'react';
import './App.css';
//import Mock from './Mock';
import Page from './components/Page';
import { fetchUsers } from './services/UsersServices';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      email: '',
      usersFiltered: [],
      date: ''
    }
    
    fetchUsers().then(resp => {
      const mappedUsers = resp.data.map((user, index) => ({
        id: index,
        ...user
      }));

      this.setState({
          date: resp.date,
          users: mappedUsers,
          usersFiltered: mappedUsers
        }
      ) 
    });

    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail(event) {
    const email = event.currentTarget.value;
    const usersFiltered = this.state.users.filter(user => user.email.indexOf(email) >= 0);
    this.setState({
      email: email,
      usersFiltered: usersFiltered.length ? usersFiltered : this.state.users
    })
  }

  render() {
    const {date, usersFiltered, email} = this.state
    return (
      <React.Fragment>
        <Page
          date={date}
          users={usersFiltered}
          email={email}
          handleEmail={this.handleEmail}
          isCompromise={usersFiltered.length === 1 && usersFiltered[0].email === email} />
      </React.Fragment>
    );
  }
}

export default App;
