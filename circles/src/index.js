import React from 'react';
import ReactDOM from 'react-dom';

function showCircle() {
  var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
  var ran = Math.floor(Math.random() * colors.length);
 
  // return a Circle with a randomly chosen color
  return <Circle bgColor={colors[ran]}/>;
}

class Circle extends React.Component {
  render() {
    var circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "100%",
      width: 100,
      height: 100
    };

    return (
      <div style={circleStyle}>
      </div>
    );
  }
}

var destination = document.getElementById("root")
var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
var renderData = [];
 
for (var i = 0; i < colors.length; i++) {
  renderData.push(<Circle key={colors+i} bgColor={colors[i]}/>);
}

ReactDOM.render(
  <div>
  {renderData}
  </div>,
  destination
)