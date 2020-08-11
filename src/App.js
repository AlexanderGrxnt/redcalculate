import React, { Component } from 'react';
import "./App.css";
import Nav from './Components/nav/Nav';
import CalcType from './Components/calcType/CalcType';
import Current from './Components/Calculators/current/Current';

// APP CLASS //
class App extends Component {
  constructor() {
    super();
    this.state = {
        currentType: 'combined'
    }
  }

  onUpdateType = (type) => {
    console.log("type:", type)
    this.setState({ currentType: type });
  }

  onSave = () => {
    console.log("save clicked")
  }

  render() {

    return (
      <div className="App">
        <Nav onSave={this.onSave} />
        <CalcType currentType={this.state.currentType} onUpdateType={this.onUpdateType} />
        <Current currentType={this.state.currentType} />
      </div>
    );
  }
}

export default App;
