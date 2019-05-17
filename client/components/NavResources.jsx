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
        <span className="nav-btn-container-resources">
          <button className="nav-resources-button">
          ABOUT PET ADOPTION
          </button>
        </span>
        <span className="nav-btn-container-resources">
          <button className="nav-resources-button">
          DOG CARE
          </button>
        </span>
        <span className="nav-btn-container-resources">
          <button className="nav-resources-button">
          CAT CARE
          </button>
        </span>
        <span className="nav-btn-container-resources">
          <button className="nav-resources-button">
          ALL PET CARE
          </button>
        </span>
        <span className="nav-btn-container-resources">
          <button className="nav-resources-button">
          SHELTERS & RESCUES
          </button>
        </span>
        <span className="nav-btn-container-resources">
          <button className="nav-resources-button">
          HELPING PETS
          </button>
        </span>
        <span className="nav-btn-container-resources">
          <button className="nav-resources-button">
          VIDEOS
          </button>
        </span>

      </div>
      
    )
  }
}

export default NavResources