import React, { Component  } from 'react';
import Window from './components/Window/Window';
import Taskbar from './components/Taskbar/Taskbar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let windows = [<Window key="main-window" keyProp="main-window" x={900} y={175} width={600} height={400} shrink={false} close={false} onWindowChanged={this.onWindowChange}/>];

    this.state = { 
      windows: windows,
      taskbar: <Taskbar 
        windows={windows} 
        // onWindowsChanged={this.onWindowsChanged}
      />
    };
  }

  onWindowChange = (key, shrink, close) => {
    let windows = this.state.windows;
    
    if(shrink){
      windows = windows.map(window => {
        if(window.props.keyProp === key){
          return React.cloneElement(
            window, 
            { shrink: shrink, close: close }
          );
        }
        return window;
      })
    }else if(close){
      windows = windows.filter(window => window.props.keyProp !== key);
    }

    let taskbar = React.cloneElement(
      this.state.taskbar, 
      { windows: windows }
    );

    this.setState({windows: windows, taskbar: taskbar});
  }

  // onWindowsChanged = (newWindows) => {
  //   this.setState({windows: newWindows});
  // }

  render(){
    // const { windows, taskbar } = this.state;

    return (
      <div className="App">
        <div className="main-content">
          {this.state.windows.filter(window => !window.props.shrink)}
        </div>
        <div className="footer">
          {this.state.taskbar}
        </div>
      </div>
    );
  }
}

export default App;
