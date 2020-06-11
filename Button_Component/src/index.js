import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
  render(){
    return <p>{this.props.greetTarget}</p>
  }
}

class Buttonify extends React.Component{
  render(){
    return (
      <div>
        < button type  = {this.props.behavior}>{this.props.children}</button>
      </div>
    );
  }
}

var destination = document.getElementById("root");

ReactDOM.render(
  <div>
    <Buttonify behavior="submit">SEND DATA</Buttonify>
  </div>, 
  destination
);