import React, { Component } from 'react';
import Combined from '../combined/Combined';
import Either from '../either/Either';


class Current extends Component {
    constructor(props) {
        super(props);

        this.state = {
            probabilityOne: '',
            probabilityTwo: '',
        }

        this.handleProbabilityOne = this.handleProbabilityOne.bind(this);
        this.handleProbabilityTwo = this.handleProbabilityTwo.bind(this);

    }

    handleProbabilityOne(event) {
        this.setState({probabilityOne: event.target.value});
    }

    handleProbabilityTwo(event) {
        this.setState({probabilityTwo: event.target.value});
    }

    resetInputs = () => {
        this.setState({probabilityOne: '', probabilityTwo: ''});
    }


    render() {
        // const {  } = this.props;
        
            if(this.props.currentType === "combined")
                return <Combined handleProbabilityOne={this.handleProbabilityOne} handleProbabilityTwo={this.handleProbabilityTwo} probabilityOne={this.state.probabilityOne} probabilityTwo={this.state.probabilityTwo} resetInputs={this.resetInputs} />
            else
                return <Either handleProbabilityOne={this.handleProbabilityOne} handleProbabilityTwo={this.handleProbabilityTwo} probabilityOne={this.state.probabilityOne} probabilityTwo={this.state.probabilityTwo} resetInputs={this.resetInputs} />

    }

}

export default Current;