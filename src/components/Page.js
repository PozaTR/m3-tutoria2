import React from 'react';
import Header from './Header';
import DataList from './DataList';
import Filters from './Filters';
import Status from './Status';
import Footer from './Footer';
import PropTypes from 'prop-types';

class Page extends React.Component {
    render() {
      const {date, email, handleEmail, isCompromise, users} = this.props;
        return(
            <React.Fragment>
              <Header date={date}/>
              <Filters 
              email={email}
              handleEmail={handleEmail}
              isCompromise={isCompromise}
              />
              <Status number={users.length}/>
              <DataList users={users}/>
              <Footer />
            </React.Fragment>
        );
    }
}

Page.propTypes = {
  email: PropTypes.string,
  handleEmail: PropTypes.func,
  isCompromise: PropTypes.bool,
  users: PropTypes.arrayOf(PropTypes.object)
};

export default Page;