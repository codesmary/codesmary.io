import React, { Component } from 'react';
import Dock from "react-osx-dock";
import './Taskbar.css';

class Taskbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 50,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  render() {
    return (
    // <div className="taskbar" style={{ height: this.state.height, width: this.state.windowWidth}}/>
    <div className="taskbar">
      <Dock className="dock" backgroundClassName="dock-background" width={800} debug={true} magnification={0.8} magnifyDirection="up">
        {["a", "b", "c", "d", "e"].map((item, index) => (
          <Dock.Item className="dock-item" key={index} onClick={() => console.log(item)}>
            <img src={`/${item}.png`} alt=""/>
            <div className="active-indicator"/>
          </Dock.Item>
        ))}
      </Dock>
    </div>
    );
  }
}

export default Taskbar;