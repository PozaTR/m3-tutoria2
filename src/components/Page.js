import React from 'react';
import Header from './Header';
import DataList from './DataList';

class Page extends React.Component {
    render() {
        return(
            <React.Fragment>
              <Header />
              <DataList users={this.props.users}/>
            </React.Fragment>
        );
    }
}

export default Page;