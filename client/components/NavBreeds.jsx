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
        <span className="nav-btn-container-breed no-border">
          <button className="nav-breed-button">
          <span className="filler">
            <a href=""><table align="center" id="nav-find-search-type-table"><tr><td><img src="https://www.iconsdb.com/icons/preview/white/cat-xxl.png" height="15px"></img> </td><td>  DOG BREEDS</td></tr></table></a>
          </span>
          </button>
        </span>
        <span className="nav-btn-container-breed">
          <button className="nav-breed-button">
          <span className="filler">
            <a href=""><table align="center" id="nav-find-search-type-table"><tr><td><img src="https://www.iconsdb.com/icons/preview/white/cat-xxl.png" height="15px"></img> </td><td>  CAT BREEDS</td></tr></table></a>
          </span>
          </button>
        </span>
      </div>
    )
  }
}

export default NavBreeds