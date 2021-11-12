import React, { Component } from 'react';
import './Taskbar.css';

class Taskbar extends Component {
  constructor(props) {
    super(props);

    let today = new Date();

    this.state = {
      windows: this.props.windows,
      time: today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    let today = new Date();

    this.setState({
      time: today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    });
  }

  render() {
    return (
    <div className="taskbar">
      <div className="apps">
        {this.props.windows.filter(window => window.props.shrink).map(
          (window, index) => 
          <div key={"app" + index} className="app" onClick={()=>{
            this.props.onTaskbarChanged(window.props.keyProp, false);
          }}>
            {window.props.keyProp}
          </div>
          )
        }
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