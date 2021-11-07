import React, { Component } from 'react';
import './Taskbar.css';

class Taskbar extends Component {
  constructor(props) {
    super(props);

    let today = new Date();

    this.state = {
      windows: this.props.windows,
      time: today.getHours() + ":" + today.getMinutes()
    };
  }

  render() {  
    return (
    <div className="taskbar">
      <div className="apps">
        {this.props.windows.filter(window => window.props.shrink).map(window => window.props.keyProp)}
      </div>
      <div className="spacer" style={{width: "50px"}}/>
      <div className="time">
        {this.state.time}
      </div>
    </div>
    );
  }
}

export default Taskbar;