import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value:''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({value : event.target.value});
  }
  handleSubmit(event){
    alert("Name submitted is " + this.state.value)
    event.preventDefault()
  }
  render() {
    return (
      <div className="App">
        <div >
            <input className="Cell" type="text" name="cell"/>
        </div>
      </div>
    );
  }
}

export default App;
