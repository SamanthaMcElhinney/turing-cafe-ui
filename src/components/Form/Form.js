import React from "react";
import './Form.css'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: " ",
            date: " ",
            time: " ",
            numberGuest: " ",
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    submitValue = (event) => {
        event.preventDefault()
        const newResy = {
            id:Date.now(),
            name:this.state.name,
            date: this.state.date,
            time: this.state.time,
            numberGuest:this.state.numberGuest
        }
        this.props.addReservation(newResy)
    }
    render() {
        return (
          <form className="form">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={(event) => this.handleChange(event)}
            />
            <input
              type="text"
              placeholder="Date"
              name="date"
              value={this.state.date}
              onChange={(event) => this.handleChange(event)}
            />
            <input
              type="time"
              placeholder="Time"
              name="time"
              min="09:00"
              max="18:00"
              value={this.state.time}
              onChange={(event) => this.handleChange(event)}
              required
            />
            <input
              type="number"
              placeholder="Number of guests"
              name="numberGuest"
              min="1"
              max="50"
              value={this.state.numberGuest}
              onChange={(event) => this.handleChange(event)}
              required
            />
            <button>Make Reservations</button>
          </form>
        );
    }
}

export default Form;