import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state={date: new Date()}
  }
  componentDidMount(){
    this.timerID=setInterval(
      ()=>this.tick(),
      1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render(){
    return(
      <div className="center">
        <h1>Hello</h1>
        <h2>Now - : {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}




const rootElement = document.getElementById("root");
ReactDOM.render(<Clock />, rootElement);
