import React, { Component } from 'react';
import './Nav.scss';
import Icon from '@mdi/react';
import { mdiCalculator, mdiContentSave } from '@mdi/js';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
    
        }
    }


    render() {
        // const {  } = this.props;
        
            return (
                <div>
                    <nav className="top-nav">
                        {/* //TITLE */}
                        <div className="title-container">
                            <Icon path={mdiCalculator} title="Logo" size={1} color="white"/>
                            <h1 className="app-title">
                                REDCALCULATE
                            </h1>
                        </div>

                        {/* //SAVE */}
                        <div className="save-container" onClick={this.props.onSave}>
                            <p className="save-text">Save</p>
                            <Icon path={mdiContentSave} title="Logo" size={1} color="white"/>
                        </div>

                    </nav>

                </div>
            )
        

    }

}

export default Nav;