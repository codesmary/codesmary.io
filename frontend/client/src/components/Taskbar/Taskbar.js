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
      activatedApps: this.apps.filter(() => Math.random() > 0.5),
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

  get apps() {
    return ["a", "b", "c", "d", "e"]
  }

  toggleAppActivation = (app) => {
    let activatedApps = Array.from(this.state.activatedApps);

    if (activatedApps.includes(app)) {
      activatedApps.splice(activatedApps.indexOf(app), 1);
    } else {
      activatedApps.push(app);
    }

    this.setState({ activatedApps });
  }

  render() {
    return (
    <div className="taskbar">
      <Dock className="dock" backgroundClassName="dock-background" width={Math.min(this.apps.length * 80, window.innerWidth * 0.5)} debug={false} magnification={0.8} magnifyDirection="up">
        {this.apps.map((app, index) => (
          <Dock.Item className="dock-item" key={index} onClick={() => this.toggleAppActivation(app)}>
            <img src={`/${app}.png`} alt=""/>
            <span className="active-indicator" style={{ opacity: this.state.activatedApps.includes(app) ? 1 : 0 }} />
          </Dock.Item>
        ))}
      </Dock>
    </div>
    );
  }
}

export default Taskbar;