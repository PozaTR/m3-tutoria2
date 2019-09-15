import React from 'react';
import DataCard from './DataCard';

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

export default DataList;