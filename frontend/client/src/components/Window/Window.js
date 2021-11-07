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
      shrink: props.shrink,
      close: props.close,
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
          <div className="handle">
            <div className="handle-text">A window</div>
            <div className="handle-shrink" onClick={()=>{
              this.setState({shrink: true});
              this.props.onWindowChanged(this.props.keyProp, true, this.state.close);
            }}/>
            <div className="handle-close" onClick={()=>{
              this.setState({close: true});
              this.props.onWindowChanged(this.props.keyProp, this.state.shrink, true);
            }}/>
          </div>
          <div className="window-view">{x}    {y}</div>
        </div>
      </Draggable>
    );
  }
}

export default Window;