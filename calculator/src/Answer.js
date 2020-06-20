import React, { Component } from 'react'
import './index.css'

class Answer extends Component{
    render(){
        return(
            <div id="answer">
                {this.props.answer}
            </div>
        )
    }
}

export default Answer