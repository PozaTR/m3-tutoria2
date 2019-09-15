import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      time: `${date.getHours()}:${this.formatTime(date.getMinutes())}:${this.formatTime(date.getSeconds())}`
    }

    this.setClock=this.setClock.bind(this);
    this.updateClock=this.updateClock.bind(this);
    this.updateClock();
  }

  setClock() {
    const date = new Date();
    this.setState({
      time: `${date.getHours()}:${this.formatTime(date.getMinutes())}:${this.formatTime(date.getSeconds())}`
    }) 
  }

  updateClock() {
    setInterval(this.setClock,1000);
  }

  formatTime(number) {
    return number < 10 ? `0${number}` : number
  }

    render() {
        return(
            <React.Fragment>
                <p>"loh();"</p>
                <div>{this.state.time}</div>
            </React.Fragment> 
        );
    }
}

export default Footer;