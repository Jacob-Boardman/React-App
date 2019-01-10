import React, { Component } from 'react';

class Header extends Component {

    //this.state
    

     something = () => {

        console.log("Clicked");
    }

  render() {
    return (
      <div classNamer = "header">
          <p>{this.props.title}</p>
          <button onClick={this.something}>Click Me!</button>
      </div>
    );
  }
}

export default Header;
