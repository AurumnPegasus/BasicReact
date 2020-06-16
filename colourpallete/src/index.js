import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component{
  render(){
    var squareStyle = {
      height: 150,
      backgroundColor: this.props.colour
    };

    return(
      <div style={squareStyle}>

      </div>  
    );
  }
}

class Rectangle extends React.Component{
  render(){
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };

    return(
      <div style={labelStyle}>
        {this.props.colour}
      </div>
    )
  }
}

class Card extends React.Component{
  render(){
    var cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      margin: 100,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };

    return(
      <div style={cardStyle}>
        <Square colour={this.props.colour}/>
        <Rectangle colour={this.props.colour}/>
      </div>
    );
  }
}

var destination = document.getElementById("root");

ReactDOM.render(
  <div>
    <Card colour="#FFA737"/>
  </div>, 
  destination
)