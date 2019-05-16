import React from "react";

class NavFind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // navFormBar: 'none'
    };
    // this.handleNavFormBar = this.handleNavFormBar.bind(this);
  }
  
  render () {
    return (
      <div id="nav-form-bar-drop-find">
        <span className="nav-button find-search-bar">Enter City State or Zip</span>
        <span className="nav-button find">Find a dog</span>
        <span className="nav-button find">Find a cat</span>
        <span className="nav-button find">Find Other Pets</span>
      </div>
      
    )
  }
}

export default NavFind