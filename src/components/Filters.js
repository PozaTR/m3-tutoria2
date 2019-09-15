import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
   render() {
     const { email , handleEmail, isCompromise} = this.props
       return(
        <React.Fragment>
          <form>
            <input id="email" type="text" value={email} onChange={handleEmail}></input>
            <label htmlFor="email" ></label>
            <p>{isCompromise ? 'Tu email está comprometido' : ''}</p>
          </form>
        </React.Fragment>   
       );
   }
}

Filters.propTypes={
  email: PropTypes.string,
  handleEmail: PropTypes.func,
  isCompromise: PropTypes.bool
}

export default Filters;