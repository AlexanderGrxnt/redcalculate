import React, { Component } from 'react';
import './Save.scss';
import Icon from '@mdi/react';
import { mdiContentSave } from '@mdi/js';

class Save extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSaved: false,
            showPopup: false
        }
    }

    displayPopup = () => {
        this.setState({showPopup: true})
    }

    hidePopup = () => {
        this.setState({showPopup: false})
    }

    saveClicked = () => {
        this.setState({showPopup: true})
    }

    acceptSave = () => {
        this.hidePopup();
        this.props.onSave();
    }


    render() {
        
        return (
            <div>

                {/* //SAVE BUTTON*/}
                <div className="save-container" onClick={this.saveClicked}>
                    <p className="save-text">Save</p>
                    <Icon path={mdiContentSave} title="Logo" size={1} color="white"/>
                </div>

                {/* //POPUP*/}
                {this.state.showPopup && <div className="popup-container">
                    <p className="popup-text">This will save a log of the calculation to a text document in the server's public folder</p>
                    <div className="popup-buttons">
                        <div className="select accept-save" onClick={this.acceptSave}>Accept</div>  
                        <div className="select cancel-save" onClick={this.hidePopup}>Cancel</div> 
                    </div>
                </div>}

                {/* //BACKGROUND PANEL*/}
                {this.state.showPopup && 
                    <div className="panel" />
                }

            </div>
        )
    }
}

export default Save;