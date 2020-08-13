import React, { Component } from 'react';
import './Nav.scss';
import Icon from '@mdi/react';
import { mdiCalculator } from '@mdi/js';
import Save from '../save/Save';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        const { onSave } = this.props;
        
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
                    <Save onSave={onSave} />

                </nav>
            </div>
        )
    }
}

export default Nav;