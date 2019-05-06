// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            output: "",
        };
    }
    render(){
        let intA,intB,intC,intD;
        return(
            <div className="superContainer">
                <div className="header">
                    <header>
                        <h1>Mini Calculator</h1>
                    </header>
                </div>
                <div className="container">
                    <div className="box1">
                        <label>Value 1</label> <br/>
                        <input placeholder="Value 1" type="text" ref="Value1"/>
                    </div>

                    <div className="box2">
                        <label >Value 2</label> <br/>
                        <input placeholder="Value 2" type="text" ref="Value2" />
                    </div>


                    <div className="box3">
                        <label>Value 3</label> <br/>
                        <input placeholder="Value 3" type="text" ref="Value3"  />
                    </div>

                    <div className="box4">
                        <label><input className="value" value="" type="radio" name="radio"
                                      checked={this.state.radio} onChange= { () => {
                            intA = parseInt(ReactDOM.findDOMNode(this.refs.Value1).value)
                            intB = parseInt(ReactDOM.findDOMNode(this.refs.Value2).value)
                            intC = parseInt(ReactDOM.findDOMNode(this.refs.Value3).value)
                            intD = intA + intB + intC
                            this.setState({output:intD})
                        }}/>&nbsp;<i className="glyphicon glyphicon-plus"/><span className="checkmark"/></label>
                        <br/>
                        <label>
                            <input className="value" value="" type="radio" name="radio"
                                   checked={this.state.radio} onChange={ () => {
                                intA = parseInt(ReactDOM.findDOMNode(this.refs.Value1).value)
                                intB = parseInt(ReactDOM.findDOMNode(this.refs.Value2).value)
                                intC = parseInt(ReactDOM.findDOMNode(this.refs.Value3).value)
                                intD = intA * intB * intC
                                this.setState({output:intD})
                            }}/>&nbsp;<i className="glyphicon glyphicon-asterisk"/><span className="checkmark"/></label>
                        <br/>
                        <h3>Result: {this.state.output}</h3>
                    </div>
                </div>
            </div>
        );
    };
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);
