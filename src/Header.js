import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            stateText: "This is state Text",
            counter: 0
        }
    }

     something = () => {
        this.setState({counter: this.state.counter+1})
        console.log("Clicked: " +  this.state.counter + " times!");
    }

  render() {
    return (
      <div className = "header">
          <p>{this.props.title}</p>
          <button onClick={this.something}>Clicked Me {this.state.counter} times!</button>
      </div>
    );
  }
}

export default Header;
