import React from "react";

class NavResources extends React.Component {
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
        <span className="nav-breed-button no-border">ABOUT PET ADOPTION</span>
        <span className="nav-breed-button no-border">DOG CARE</span>
        <span className="nav-breed-button no-border">CAT CARE</span>
        <span className="nav-breed-button no-border">ALL PET CARE</span>
        <span className="nav-breed-button no-border">SHELTERS & RESCUES</span>
        <span className="nav-breed-button no-border">HELPING PETS</span>
        <span className="nav-breed-button no-border">VIDEOS</span>
      </div>
      
    )
  }
}

export default NavResources