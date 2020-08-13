import React, { Component } from 'react';
import "./App.css";
import Nav from './Components/nav/Nav';
import CalcType from './Components/calcTypeBar/CalcType';
import Current from './Components/Calculators/current/Current';

// APP CLASS //
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentType: 'combined'
    }

    //Create reference to save function
    this.save = React.createRef();
  }

  onUpdateType = (type) => {
    console.log("type:", type)
    this.setState({ currentType: type });
  }

  onSave = () => {
    console.log("save clicked")
    this.save.current.sendData();
  }

  render() {

    return (
      <div className="App">
        <Nav onSave={this.onSave} />
        <CalcType currentType={this.state.currentType} onUpdateType={this.onUpdateType} />
        <Current ref={this.save} currentType={this.state.currentType} />
      </div>
    );
  }
}

export default App;
