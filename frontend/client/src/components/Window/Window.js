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
        <div style={{width: width}}>
            <img className="handle" src={"./pixel_art/window-grabbable-skinnier-large.png"} width="600px" draggable={false} alt="Pixelized window handle"/>
            <div className="handle-text">{this.props.keyProp}</div>
            <img className="handle-shrink" src={"./pixel_art/yellow-button-small-large.png"} width="30px" draggable={false} alt="Pixelized minimize button" onClick={()=>{
              this.setState({shrink: true});
              this.props.onWindowChanged(this.props.keyProp, true, this.state.close);
            }}/>
            <img className="handle-close" src={"./pixel_art/red-button-small-large.png"} width="30px" draggable={false} alt="Pixelized close button" onClick={()=>{
              this.setState({close: true});
              this.props.onWindowChanged(this.props.keyProp, this.state.shrink, true);
            }}/>
          <img className="window-view" src={"./pixel_art/window-box-updated-large.png"} width="600px" draggable={false} alt="Pixelized window"/>
        </div>
      </Draggable>
    );
  }
}

export default Window;