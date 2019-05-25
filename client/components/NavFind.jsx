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
      <div id="nav-form-bar-drop-find" className="animate slideInDown">
          <span className="fake3">
            <div className="fake3">.</div>
            {/* <div className="fake3">
              <button className="nav-find-location-search">.</button>
            </div> */}
          
          </span>



          <span className="nav-container-find-search">
            <div className="nav-btn-find-search-bar">

              <table><tbody><tr><td><input type="text" className="location-search" id="lname" name="lastname" placeholder="Enter City, State, or Zip" autofocus="autofocus"></input></td></tr></tbody></table>

               
            </div>
          </span>




          <span className="nav-container-find-choices">
          
          
            <div className="nav-btn-container-find-choices">
              <button className="nav-find-search-type">
                
                <span className="filler">
                
                <table align="center" id="nav-find-search-type-table"><tbody><tr><td><img src="https://www.iconsdb.com/icons/preview/white/cat-xxl.png" height="50px"></img></td><td>Find a dog</td></tr></tbody></table>
                </span>
                
                
                
              </button>
            </div>
            <div className="nav-btn-container-find-choices">
              <button className="nav-find-search-type">
                <span className="filler">
                <table align="center" id="nav-find-search-type-table"><tbody><tr><td><img src="https://www.iconsdb.com/icons/preview/white/cat-xxl.png" height="50px"></img></td><td>Find a cat</td></tr></tbody></table>
                </span>
                
                
              </button>
            </div>
            <div className="nav-btn-container-find-choices">
              <button className="nav-find-search-type">
                <span className="filler">
                <table align="center" id="nav-find-search-type-table"><tbody><td valign="center">Find Other Pets</td><td> ▼</td></tbody></table>
                </span>
                
                
              </button>
            </div>

          </span>

          <span className="fake3">
          <div className="fake3">.</div>
            {/* <div className="fake3">
              <button className="nav-find-location-search">.</button>
            </div> */}
          </span>
          
        
      </div>
      
    )
  }
}

export default NavFind