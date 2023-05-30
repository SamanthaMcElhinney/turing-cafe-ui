import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../apicalls';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form'

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
      this.setState({reservations:data})
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <p>Form goes here</p>
        </div>
          <Reservations cards={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
