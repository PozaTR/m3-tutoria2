import React from 'react';
import './App.css';
import Mock from './Mock';
import Page from './components/Page';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: Mock
    }
  }

  render() {
    return (
        <Page users={this.state.users}/>
    );
  }
}

export default App;
