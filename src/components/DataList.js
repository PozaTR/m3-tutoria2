import React from 'react';
import DataCard from './DataCard';

class DataList extends React.Component {
    render() {
        return(
            <ul>
            {this.props.users.map((user,userIndex) => 
            <DataCard user={user} userIndex={userIndex}/>
            )}
          </ul>
        );
    }
}

export default DataList;