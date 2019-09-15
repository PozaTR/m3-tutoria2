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
    return (
      <React.Fragment>
        <Page
          date={this.state.date}
          users={this.state.usersFiltered}
          email={this.state.email}
          handleEmail={this.handleEmail}
          isCompromise={this.state.usersFiltered.length === 1 && this.state.usersFiltered[0].email === this.state.email} />
      </React.Fragment>
    );
  }
}

export default App;
