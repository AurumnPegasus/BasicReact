import React, { Component } from 'react'
import './index.css'

class Key extends Component{

    display(key){
        return this.props.display(key)
    }

    render(){
        return (
            <button type="submit" className="numbers" onClick={() => this.display(this.props.text)}>
                <div className="text">
                    {this.props.text}
                </div>
            </button>
        )
    }
}

export default Key