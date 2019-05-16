import React from "react";

class NavBreeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // navFormBar: 'none'
    };
    // this.handleNavFormBar = this.handleNavFormBar.bind(this);
  }
  
  render () {
    return (
      <div id="nav-form-bar-drop">
        <span className="nav-breed-button no-border">xx DOG BREEDS</span>
        <span className="nav-breed-button">xx CAT BREEDS</span>
      </div>
    )
  }
}

export default NavBreeds