import React, { Component } from 'react'
import './index.css'
import Key from './Key'
import Equation from './Equation';
import Answer from './Answer'

class NumberPad extends Component{

    constructor(props){
        super(props);

        this.state={
            s: "",
            answer: 0
        }

        this.displayItem = this.displayItem.bind(this);
        this.calcEq = this.calcEq.bind(this);
        this.getAns = this.getAns.bind(this);
    }

    getAns(num_one, num_two, op)
    {
        var one = parseInt(num_one);
        var two = parseInt(num_two);
        var ans = 0;
        if(op === '+')
        {
            ans = one + two;
        }
        else if(op === '-')
        {
            ans = one - two;
        }
        else if(op === '*')
        {
            ans = one * two;
        }
        else if(op === '/')
        {
            ans = one/two;
        }
        else
        {
            ans = one % two;
        }
        return ans;
    }

    calcEq(eq){
        var num_one = ""
        var num_two = ""
        var op = ""
        var shift = true
        for(var i=0;i<eq.length;i++)
        {
            if(eq[i] === '+' || eq[i] === '-' || eq[i] === '*' || eq[i] === '/' || eq[i] === '%')
            {
                op = op.concat(eq[i]);
                shift = false
            }
            else
            {
                if(shift)
                {
                    num_one = num_one.concat(eq[i]);
                }
                else
                {
                    num_two = num_two.concat(eq[i]);
                }
            }
        }
        if(num_one === "")
        {
            num_one = "0";
        }
        var ans  = this.getAns(num_one, num_two, op);
        this.setState({
            s: "",
            answer: ans
        })
        console.log(ans);

    }

    displayItem(key){

        if(key !== "CLR")
        {
            if(key === "<-")
            {
                this.setState((prevState)=>{
                    prevState.s =  prevState.s.slice(0,-1);
                    return {
                        s: prevState.s,
                        answer: prevState.answer
                    }
                })
            }
            else
            {
                this.setState((prevState)=>{
                    return {
                        s: prevState.s.concat(key),
                        answer: prevState.answer
                    }
                });
            }
        }
        else
        {
            this.setState((prevState)=>{
                return {
                    s: "",
                    answer: ""
                }
            });
        }
        console.log(this.state.s);
    }

    render(){

        var items = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "+", "-", "=", "*", "/", "%", "CLR", "<-"]
        var renderList = []

        for(var i=0;i<items.length;i++)
        {
            renderList.push(<Key key={items+i} text={items[i]} display={this.displayItem}></Key>)
        }

        return(
            <div>
                <Answer answer={this.state.answer}/>
                <Equation s={this.state.s} calc={this.calcEq}/>
                <div id="numberpad">
                    {renderList}
                </div>
            </div>
        )
    }
}
/*
    This error happens only when I call calcEq for the first time, all the other times its fine.
*/
export default NumberPad