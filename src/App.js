import React from 'react';
import './App.css';
import Mock from './Mock';
import Page from './components/Page';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: Mock
    }
  }

  render() {
    return (
      <React.Fragment>
        <Page users={this.state.users}/>
        <Footer />
      </React.Fragment>   
    );
  }
}

export default App;
