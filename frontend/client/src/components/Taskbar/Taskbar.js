import React, { Component } from 'react';
import './Taskbar.css';

class Taskbar extends Component {
  constructor(props) {
    super(props);

    let today = new Date();

    this.state = {
      minimizedWindows: {},
      time: today.getHours() + ":" + today.getMinutes()
    };
  }

  get apps() {
    return ["a", "b", "c", "d", "e"]
  }

  render() {
    return (
    <div className="taskbar">
      {this.state.time}
    </div>
    );
  }
}

export default Taskbar;