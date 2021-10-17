import React, { Component  } from 'react';
import Window from './components/Window/Window';
import Taskbar from './components/Taskbar/Taskbar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  render(){
    return (
      <div className="App">
        <div className="main-content">
          <Window x={900} y={175} width={600} height={400}/>
        </div>
        <div className="footer">
          <Taskbar/>
        </div>
      </div>
    );
  }
}

export default App;
