import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            value1: '',
            value2: '',
            value3: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        if (event.target.id === "firstname") {

            this.setState({
                value1: event.target.value
            });
        } else {
            this.setState({
                value2: event.target.value
            });
        }
    }

    handleSubmit(event) {
        this.setState({ value3: this.state.value1 + " " + this.state.value2 })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    First Name:&ensp;
                    <input type="text" placeholder="First Name" value={this.state.value1} onChange={this.handleChange} id="firstname" /><br></br>
                    Last Name:&ensp;
                    <input type="text" placeholder="Last Name" value={this.state.value2} onChange={this.handleChange} id="secondname" /><br></br>
                    <input type="submit" value="Submit" />
                </form>

                <p>Your name is :&ensp; {this.state.value3}</p>
            </div>
        );
    }
}

export default Form;