import React from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

class DataList extends React.Component {
    render() {
        return(
            <ul>
            {this.props.users.map(user => 
            <DataCard user={user} />
            )}
          </ul>
        );
    }
}

DataList.propTypes={
  users: PropTypes.arrayOf(PropTypes.obj)
}

export default DataList;