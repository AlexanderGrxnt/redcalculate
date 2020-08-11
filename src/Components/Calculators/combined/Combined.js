import React, { Component } from 'react';
import './Combined.scss';
import PropTypes from 'prop-types';

class Combined extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // probabilityOne: '',
            // probabilityTwo: '',
            result: 0,
            errorOne: false,
            errorTwo: false
        }

        // this.handleOnChange = this.handleOnChange.bind(this);
        // this.handleProbabilityOne = this.handleProbabilityOne.bind(this);
        // this.handleProbabilityTwo = this.handleProbabilityTwo.bind(this);
    }

    // handleOnChange = (e) => {
    //     const { value, name } = e.target
    //     this.setState({ [name]: value });
    //     console.log("name: ",this.state[name])
    // }

    // handleProbabilityOne(event) {
    //     this.setState({probabilityOne: event.target.value});
    // }

    // handleProbabilityTwo(event) {
    //     this.setState({probabilityTwo: event.target.value});
    // }

    onSubmit = () => {
        const { probabilityOne, probabilityTwo} = this.props;
        let one = this.verifyInput(probabilityOne)
        if(one === "error"){
            this.setState({errorOne: true})
            return
        } else
        this.setState({errorOne: false})

        let two = this.verifyInput(probabilityTwo)
        if(two === "error"){
            this.setState({errorTwo: true})
            return
        } else
            this.setState({errorTwo: false})

        let result = one * two;
        let rounded = Math.round((result + Number.EPSILON) * 1000) / 1000
        this.setState({result: rounded})
    
    }

    verifyInput = (input) => {
        if(input >= 0 && input <= 1 && input !== null)
            return input;
        else
            return "error";
    }

    resetValues = () => {
        this.setState({result: 0})
        this.setState({errorOne: false, errorTwo: false})
        this.props.resetInputs();
    }


    render() {
        const { probabilityOne, probabilityTwo, result } = this.state;
        
            return (
                <div>
                    <nav className="calculator-container">

                        <div className="one-container">
                            <label className="label" htmlFor="probability-one">
                                Probability 1
                            </label>
                            <input
                                className="input"
                                type="number"
                                name="probabiltyOne"
                                value={this.props.probabilityOne}
                                placeholder="Enter Probability"
                                id="probabilty-one"
                                onChange={this.props.handleProbabilityOne}
                            />
                            {this.state.errorOne && 
                            <div className="error-message">
                                Number must be between 0 and 1
                            </div>
                                }
                        </div>
                        <div className="two-container">
                        <label className="label" htmlFor="probability-two">
                                Probability 2
                            </label>
                            <input
                                className="input"
                                type="number"
                                name="probabiltyTwo"
                                value={this.props.probabilityTwo}
                                placeholder="Enter Probability"
                                id="probabilty-two"
                                onChange={this.props.handleProbabilityTwo}
                            />
                             {this.state.errorTwo && 
                            <div>
                                Number must be between 0 and 1
                            </div>
                                }
                        </div>
                        <div className="result-container">
                            <div className="label">
                                Result
                            </div>
                            <div className="input">
                                {result}
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="button" onClick={this.resetValues} >
                                Reset
                            </div>
                            <div className="button" onClick={this.onSubmit} >
                                Calculate
                            </div>
                        </div>
                        

                    </nav>

                </div>
            )
        

    }

}

Combined.propTypes = {
    probabilityOne: PropTypes.number,
    probabilityTwo: PropTypes.number
}

export default Combined;