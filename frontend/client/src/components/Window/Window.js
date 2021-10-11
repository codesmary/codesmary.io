import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Window.css';

class Window extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
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
    let { x, y, width, height, windowWidth, windowHeight } = this.state;

    return (
      <Draggable
        defaultClassName="drag"
        handle=".handle"
        defaultPosition={{ x: x, y: y }}
        bounds={{ left: 0, top: 0, right: windowWidth - width, bottom: windowHeight - height}}>
        <div style={{ height: height, width: width}}>
          <div className="handle">Drag from here</div>
          <div className="window-view">{x}    {y}</div>
        </div>
      </Draggable>
    );
  }
}

export default Window;