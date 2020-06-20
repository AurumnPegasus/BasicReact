import React, { Component } from 'react'
import './index.css'

class Equation extends Component{

    constructor(props){
        super(props);
        
        this.caculate = this.calculate.bind(this);
    }

    calc(eq){
        return this.props.calc(eq)
    }

    calculate(e){
        var eq = this.props.s;
        if(eq[eq.length -1] === "=")
        {
            eq = eq.slice(0,-1);
            return(
                <div>
                    {eq}
                    {this.calc(eq)}
                </div>
            )
        }
        else{
            return(
                <div>
                    {eq}
                </div>
            )
        }
    }

    render(){
        return(
            <div id="equation">
                {this.calculate()}
            </div>
        )
    }
}

export default Equation