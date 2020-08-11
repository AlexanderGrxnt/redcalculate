import React, { Component } from 'react';
import './CalcType.scss';

class CalcType extends Component {
    constructor(props) {
        super(props);

        this.state = {
    
        }
    }


    render() {
        // const {  } = this.props;
        
            return (
                <div>
                    <nav className="type-bar">

                        {/* //COMBINED */}
                        <div className={`type combined ${this.props.currentType === "combined" ? "selected" : null}`} onClick={() => this.props.onUpdateType("combined")}>
                            COMBINED
                        </div>

                        {/* //EITHER */}
                        <div className={`type either ${this.props.currentType === "either" ? "selected" : null}`} onClick={() => this.props.onUpdateType("either")}>
                            EITHER
                        </div>

                    </nav>

                </div>
            )
        

    }

}

export default CalcType;