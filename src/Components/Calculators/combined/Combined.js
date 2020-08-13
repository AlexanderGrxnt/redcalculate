import React, { Component } from 'react';
import './Combined.scss';
import PropTypes from 'prop-types';

class Combined extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 0,
            errorOne: false,
            errorTwo: false
        }
    }

    onSubmit = () => {
        const { probabilityOne, probabilityTwo } = this.props;

        //ONE
        let one = this.verifyInput(probabilityOne)
        if (one === "error") {
            this.setState({ errorOne: true })
            return
        } else
            this.setState({ errorOne: false })

        //TWO
        let two = this.verifyInput(probabilityTwo)
        if (two === "error") {
            this.setState({ errorTwo: true })
            return
        } else
            this.setState({ errorTwo: false })


        //RESULT
        let result = this.calculateCombined(one, two);

        this.setState({ result });
        this.props.handleResult(result);

    }

    verifyInput = (input) => {
        if (input >= 0 && input <= 1 && input !== null)
            return input;
        else
            return "error";
    }

    calculateCombined = (one, two) => {
        let result = Number(one) * Number(two);
        //Round to 3 decimal places
        return Math.round((result + Number.EPSILON) * 1000) / 1000;
    }

    resetValues = () => {
        this.setState({ result: 0 })
        this.setState({ errorOne: false, errorTwo: false })
        this.props.resetInputs();
    }


    render() {
        const { result } = this.state;
        const { probabilityOne, probabilityTwo, handleProbabilityOne, handleProbabilityTwo } = this.props;

        return (
            <div>
                <nav className="calculator-container">

                    {/* //PROBABILITY ONE */}
                    <div className="one-container">
                        
                        <label className="label" htmlFor="probability-one">
                            Probability 1
                        </label>

                        {/* //INPUT */}
                        <input
                            className="input"
                            type="number"
                            name="probabiltyOne"
                            value={probabilityOne}
                            placeholder="Enter Probability"
                            id="probabilty-one"
                            onChange={handleProbabilityOne}
                        />

                    </div>

                    {/* //PROBABILITY TWO */}
                    <div className="two-container">
                        <label className="label" htmlFor="probability-two">
                            Probability 2
                        </label>
              
                        {/* //INPUT */}
                        <input
                            className="input"
                            type="number"
                            name="probabiltyTwo"
                            value={probabilityTwo}
                            placeholder="Enter Probability"
                            id="probabilty-two"
                            onChange={handleProbabilityTwo}
                        />

                    </div>

                    {/* //RESULT */}
                    <div className="result-container">
                        <div className="label">
                            Result
                        </div>
                        <div className="result">
                            {result}
                        </div>
                    </div>

                    {/* //BUTTONS */}
                    <div className="button-container">
                        <div className="button" onClick={this.resetValues} >
                            Reset
                        </div>
                        <div className="button" onClick={this.onSubmit} >
                            Calculate
                        </div>
                    </div>

                    {/* //ERROR MESSAGES */}
                    {this.state.errorTwo &&
                        <div className="error-message">
                            Number must be between 0 and 1
                        </div>
                    }
                    
                    {this.state.errorOne &&
                        <div className="error-message">
                            Number must be between 0 and 1
                        </div>
                    }

                </nav>
            </div>
        )
    }
}

// Combined.propTypes = {
//     probabilityOne: PropTypes.number,
//     probabilityTwo: PropTypes.number
// }

export default Combined;