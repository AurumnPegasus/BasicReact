import React from 'react';
import ReactDOM from 'react-dom';

class Background extends React.Component{
  constructor(props, context) {
      super(props, context);
      this.state = {
        color: "",
        bgColor: "white"
      };
 
      this.colorValue = this.colorValue.bind(this);
      this.setNewColor = this.setNewColor.bind(this);
  }

  colorValue(e) {
    this.setState({ 
      color: e.target.value 
    });

  }

  setNewColor(e) {
    console.log("B")
    this.setState({
      bgColor: this.state.color
    });
    e.preventDefault();
  }

  change(){
    document.body.style.backgroundColor = this.state.bgColor
    console.log("A")
  }

  render(){
    var self = this
    return(
      <div>
        <form onSubmit={this.setNewColor}>
          <input onChange={this.colorValue} 
                ref={
                  function(el) {
                    self.change()
                    self._input = el;
                  }
                }
            placeholder="Enter a color value">
          </input>
          <button type="submit">go</button>
        </form>
      </div>
    )
  }
  
}

class Input extends React.Component{
  render(){
    var text_style = {
      marginLeft: "25vw",
      marginRight: "30vw",
      marginTop: "35vh",
      width: "60vw",
      height: "fit",
      backgroundColor: "white"
    };

    return(
      <div>
        <div style={text_style}>
          <h2>Enter Colour</h2>
          <input type="text"></input>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Background/>,
  document.getElementById("root")
)