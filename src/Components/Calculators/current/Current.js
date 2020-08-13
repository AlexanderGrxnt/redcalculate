import React, { Component } from 'react';
import Combined from '../combined/Combined';
import Either from '../either/Either';

class Current extends Component {
    constructor(props) {
        super(props);
        this.state = {
            probabilityOne: '',
            probabilityTwo: '',
            result: '',
        }

        //BINDINGS
        this.handleProbabilityOne = this.handleProbabilityOne.bind(this);
        this.handleProbabilityTwo = this.handleProbabilityTwo.bind(this);
    }

    handleProbabilityOne(e) {
        this.setState({probabilityOne: e.target.value});
    }

    handleProbabilityTwo(e) {
        this.setState({probabilityTwo: e.target.value});
    }

    handleResult = (result) => {
        this.setState({result});
    }

    resetInputs = () => {
        this.setState({probabilityOne: '', probabilityTwo: ''});
    }

    sendData = () => {
        const { probabilityOne, probabilityTwo, result } = this.state;
        const { currentType } = this.props;

        if(!result){
            console.log("Calculation not yet performed")
            return
        }

        fetch('http://localhost:3001/save', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                type: currentType,
                input1: probabilityOne,
                input2: probabilityTwo,
                result: result
            }, null, 2)
          })
        .then(res => {
            console.log(res);   
        });
    }


    render() {
        const { probabilityOne, probabilityTwo } = this.state;
        const { currentType } = this.props;
        
        //Show currently selected calculation type
        switch(currentType) {
            case "combined":
                return <Combined handleProbabilityOne={this.handleProbabilityOne} handleProbabilityTwo={this.handleProbabilityTwo} probabilityOne={probabilityOne} probabilityTwo={probabilityTwo} handleResult={this.handleResult} resetInputs={this.resetInputs} />
            case "either":
                return <Either handleProbabilityOne={this.handleProbabilityOne} handleProbabilityTwo={this.handleProbabilityTwo} probabilityOne={probabilityOne} probabilityTwo={probabilityTwo} handleResult={this.handleResult} resetInputs={this.resetInputs} />
            default:
                return <Combined handleProbabilityOne={this.handleProbabilityOne} handleProbabilityTwo={this.handleProbabilityTwo} probabilityOne={probabilityOne} probabilityTwo={probabilityTwo} handleResult={this.handleResult} resetInputs={this.resetInputs} />
        }
        
    }
}

export default Current;