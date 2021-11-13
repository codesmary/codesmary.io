import React, { Component  } from 'react';
import Window from './components/Window/Window';
import Taskbar from './components/Taskbar/Taskbar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let windows = [
      <Window key="main-window" keyProp="main-window" x={400} y={75} width={600} height={400} shrink={false} close={false} onWindowChanged={this.onWindowChange}/>, 
      <Window key="second-window" keyProp="second-window" x={1200} y={175} width={600} height={400} shrink={false} close={false} onWindowChanged={this.onWindowChange}/>
    ];

    this.state = { 
      windows: windows,
      taskbar: <Taskbar 
        windows={windows} 
        onTaskbarChanged={this.onTaskbarChange}
      />
    };
  }

  onWindowChange = (key, shrink, close, x = 0, y = 0) => {
    let windows = this.state.windows;
    
    if(shrink){
      let newWindows = [];
      let savedWindow = null;

      windows.forEach(window => {
        if(window.props.keyProp === key){
          savedWindow = React.cloneElement(
            window, 
            { shrink: shrink, close: close, x: x, y: y }
          )
        }else{
          newWindows.push(window);
        }
      })

      if(savedWindow){
        newWindows.push(savedWindow);
      }

      windows = newWindows;
    }else if(close){
      windows = windows.filter(window => window.props.keyProp !== key);
    }

    let taskbar = React.cloneElement(
      this.state.taskbar, 
      { windows: windows }
    );

    this.setState({windows: windows, taskbar: taskbar});
  }

  onTaskbarChange = (key, shrink) => {
    let windows = this.state.windows;

    if(!shrink){
      windows = windows.map(window => {
        if(window.props.keyProp === key){
          return React.cloneElement(
            window, 
            { shrink: shrink }
          );
        }else{
          return window;
        }
      })
    }
    
    let taskbar = React.cloneElement(
      this.state.taskbar, 
      { windows: windows }
    );
    
    this.setState({windows: windows, taskbar: taskbar});
  }

  render(){
    const { windows, taskbar } = this.state;

    return (
      <div className="App">
        <div className="main-content">
          {windows.filter(window => !window.props.shrink)}
        </div>
        <div className="footer">
          {taskbar}
        </div>
      </div>
    );
  }
}

export default App;
