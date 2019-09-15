import React from 'react';

class Filters extends React.Component {
   render() {
     const { email , handleEmail, isCompromise} = this.props
       return(
        <React.Fragment>
          <form>
            <input id="email" type="text" value={email} onChange={handleEmail}></input>
            <label htmlFor="email" ></label>
            <p>{isCompromise != true ? '' : 'Tu email está comprometido'}</p>
          </form>
        </React.Fragment>   
       );
   }
}

export default Filters;