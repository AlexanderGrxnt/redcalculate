import React, { Component } from 'react';
import './CalcType.scss';

class CalcType extends Component {
    constructor(props) {
        super(props);

        this.state = {
    
        }
    }


    render() {
        const { currentType, onUpdateType } = this.props;
        
        return (
            <div>
                <nav className="type-bar">

                    {/* //COMBINED */}
                    <div className={`type combined ${currentType === "combined" ? "selected" : null}`} onClick={() => onUpdateType("combined")}>
                        COMBINED
                    </div>

                    {/* //EITHER */}
                    <div className={`type either ${currentType === "either" ? "selected" : null}`} onClick={() => onUpdateType("either")}>
                        EITHER
                    </div>

                </nav>

            </div>
        )
    }
}

export default CalcType;