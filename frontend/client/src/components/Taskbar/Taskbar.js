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

  renderApps = () => {
    let apps = this.props.windows.filter(window => window.props.shrink).map(
      (window, index) => 
        <div key={"app" + index} className="app" style={{height: "60px"}} onClick={()=>{
          this.props.onTaskbarChanged(window.props.keyProp, false);
        }}>
          {window.props.keyProp}
        </div>
      );

      if(apps.length){
        return apps.reduce((prev, curr) =>
          prev.concat(curr, <img key={"taskbar-line-" + curr.key} className="taskbar-line" src={"./pixel_art/taskbar-line-large.png"} height="60px" draggable={false} alt="Pixelized taskbar line"/>), [<img key={"taskbar-line"} className="taskbar-line" src={"./pixel_art/taskbar-line-large.png"} height="60px" draggable={false} alt="Pixelized taskbar line"/>]
        );
      }
      
      return <img className="taskbar-line" src={"./pixel_art/taskbar-line-large.png"} height="60px" draggable={false} alt="Pixelized taskbar line"/>;
  }

  render() {
    return (
    <div className="taskbar">
      <img className="taskbar-img" src={"./pixel_art/taskbar-large.png"} width={window.innerWidth} height="60px" draggable={false} alt="Pixelized taskbar"/>
      <div className="apps">
        {this.renderApps()}
      </div>
      <img className="taskbar-line before-clock" src={"./pixel_art/taskbar-line-large.png"} height="60px" draggable={false} alt="Pixelized taskbar line"/>
      <div className="time">
        {this.state.time}
      </div>
      <img className="taskbar-line" src={"./pixel_art/taskbar-line-large.png"} height="60px" draggable={false} alt="Pixelized taskbar line"/>
    </div>
    );
  }
}

export default Taskbar;