import React from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';

class DataList extends React.Component {
    render() {
        return(
            <ul>
            {this.props.users.map((user, index) => 
            <DataCard key={`dataCard-${index}`} user={user} />
            )}
          </ul>
        );
    }
}

DataList.propTypes={
  users: PropTypes.arrayOf(PropTypes.object)
}

export default DataList;