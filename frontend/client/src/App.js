import React, { Component  } from 'react';
import Draggable from 'react-draggable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: window.innerWidth, 
      height: window.innerHeight,
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
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){
    return (
      <div className="App">
        <Draggable
        defaultClassName="drag"
        handle=".handle"
        bounds={{left: 0, top: 0, right: this.state.width - 500, bottom: this.state.height - 300}}>
          <div>
            <div className="handle">Drag from here</div>
            <div className="window-view">This readme is really dragging on...</div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default App;
