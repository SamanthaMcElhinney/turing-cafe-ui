import React, { Component } from "react";
import "./App.css";
import { getAllReservations } from "../../apicalls";
import Reservations from "../Reservations/Reservations";
import Form from "../Form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount = () => {
    getAllReservations().then((data) => {
      this.setState({ reservations: data });
    });
  };

  addReservation = (newResy) => {
    this.setState({reservations:[...this.state.reservations, newResy]})
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <Reservations cards={this.state.reservations} />
      </div>
    );
  }
}

export default App;
