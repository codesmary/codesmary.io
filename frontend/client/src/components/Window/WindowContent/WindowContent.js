import React, { Component } from 'react';
import './WindowContent.css';

const bioTitle = "Welcome to my corner of the internet.";
const bioText = "I'm Rosemary and I'm a software engineer and hobbyist artist. \n" +
                "You might know me from my work at Snap Inc on the AR Spectacles, my time at UT Austin working on my BSA in Computer Science and Studio Art, or you might just be stalking me online.\n" +
                "I like making stuff in general, but the bulk of my work revolves around full-stack web dev, machine learning projects, and printmaking!\n" +
                "Outside of work things, you can usually find me with my partner and on TikTok.\n" +
                "I made this website for people to learn more about me, so feel free to click around and see some of things I've done."

class WindowContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        width: props.width,
        height: props.height
    };
  }

  textOnly = (title, text) => {
    let { width, height } = this.state;

    return (
      <div className="window-content" style={{width: width, height: height+20}}>
          <div style={{textAlign: "center"}}>
          {title}
          </div>
          <br/>
          {text.split("\n").map((text, index) => <React.Fragment key={"fragment-" + index}><div key={"text-" + index}>{text}</div><br key={"break-" + index}/></React.Fragment>)}
      </div>
    );
  }

  camelCase = (input) => { 
    return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}

  render() {
    let layoutFunctionName = this.camelCase(this.props.layout);

    if(this.props.content === "bio"){
      return this[layoutFunctionName](bioTitle, bioText);
    }else{
      return this["textOnly"]("Error", "No content");
    }
  }
}

export default WindowContent;