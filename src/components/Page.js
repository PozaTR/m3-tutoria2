import React from 'react';
import Header from './Header';
import DataList from './DataList';
import Filters from './Filters';
import Status from './Status';

class Page extends React.Component {
    render() {
      const {email, handleEmail, isCompromise, users} = this.props;
        return(
            <React.Fragment>
              <Header />
              <Filters 
              email={email}
              handleEmail={handleEmail}
              isCompromise={isCompromise}
              />
              <Status number={users.length}/>
              <DataList users={users}/>
            </React.Fragment>
        );
    }
}

export default Page;