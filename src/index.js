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
            value1Error: '',
            value2Error: '',
            value3Error: ''


        };
    }
    handleChange = event => {
           this.setState({ value1:
           event.target.value },() => {
               this.validatevalue1();
           });
    };
    handleChange = event => {
        this.setState({ value2:
            event.target.value },() => {
            this.validatevalue2();
        });
    };
    handleChange = event => {
        this.setState({ value3:
            event.target.value },() => {
            this.validatevalue3();
        });
    };

    validatevalue1 = () => {
        const { value1 } = this.state;
        this.setState({
            value1Error:
                value1.length > 3 ? null : 'Name must be longer than 3 characters'
        });
    };
    validatevalue2 = () => {
        const { value2 } = this.state;
        this.setState({
            value2Error:
                value2.length > 3 ? null : 'Name must be longer than 3 characters'
        });
    };
    validatevalue3 = () => {
        const { value3 } = this.state;
        this.setState({
            value3Error:
                value3.length > 3 ? null : 'Name must be longer than 3 characters'
        });
    };
/*
    handleClicked = event => {
        event.preventDefault();
        const { value1,value2,value3 } = this.state;
       /* alert(`Your state values: \n
            value1: ${value1} \n 
            value2: ${value2} \n 
            value3: ${value3}`);
    };*/


    render(){
        let intA,intB,intC,intD;
        return(
             <form>
            <div className="superContainer">
                <div className="header">
                    <header>
                        <h1>Mini Calculator</h1>
                    </header>
                </div>
                <div className="container">
                    <div className="box1">
                        <label>Value 1</label> <br/>
                        <input placeholder="Value 1" type="text" id="value1" value={this.state.value1} onChange={this.handleChange} ref="Value1"/>
                    </div>

                    <div className="box2">
                        <label >Value 2</label> <br/>
                        <input placeholder="Value 2" type="text" id="value2" value={this.state.value2} onChange={this.handleChange} ref="Value2" />
                    </div>


                    <div className="box3">
                        <label>Value 3</label> <br/>
                        <input placeholder="Value 3" type="text" id="value3" value={this.state.value3} onChange={this.handleChange}  ref="Value3"  />
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
             </form>
        );
    };
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);
