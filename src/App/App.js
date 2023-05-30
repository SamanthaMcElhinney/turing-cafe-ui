import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../apicalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    getAllReservations()
    .then(data => {
      console.log(data, "data")
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <p>Form goes here</p>
        </div>
        <div className='resy-container'>
          <p>cards go here</p>
        </div>
      </div>
    )
  }
}

export default App;
