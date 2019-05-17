import React from "react";


class NavMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSearchSwitch = this.handleSearchSwitch.bind(this);
    // this.handleNavFormBar = this.handleNavFormBar.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value });
  // }

  // handleNavFormBar(btnName){
  //   this.setState({[btnName]: !this.state[btnName]})
  // }

  handleSearchSwitch(e) { // this function switches the rendering condition from regular nav bar to search nav bar
    e.preventDefault()
    this.setState({search: !this.state.search})
  }

  render() {
    if (this.state.search === false) {
      return (
        <div id="nav-bar-main">
          <div className="nav-button fake">.</div>
          <div className="nav-button">Pet Finder</div>

          <div className="nav-button">
            <button className="nav-bar-main-button" onClick={() => this.props.handleNavFormBar('findPet')}>FIND A PET</button>
          </div>
          <div className="nav-button">
            <button className="nav-bar-main-button" onClick={() => this.props.handleNavFormBar('breeds')}>BREEDS</button>
          </div>
          <div className="nav-button">
            <button className="nav-bar-main-button" onClick={() => this.props.handleNavFormBar('resources')}>RESOURCES</button>
          </div>
          
          {/* <span className="nav-button">
            
              <span className="filler">
              <button className="nav-bar-main-button">
                <table align="center" id="nav-find-search-type-table"><tr><td>Pet Finder </td><td>  </td></tr></table>
                </button>
              </span>
          </span>

          <span className="nav-button">
            <button className="nav-bar-main-button" onClick={() => this.props.handleNavFormBar('findPet')}>
              <span className="filler">
                <table align="center" id="nav-find-search-type-table"><tr><td>FIND A PET </td><td> <img src="https://www.iconsdb.com/icons/preview/white/cat-xxl.png" height="15px"></img> </td></tr></table>
              </span>
            </button>
          </span>
          <span className="nav-button">
            <button className="nav-bar-main-button" onClick={() => this.props.handleNavFormBar('breeds')}>
              <span className="filler">
                <table align="center" id="nav-find-search-type-table"><tr><td>BREEDS </td><td> <img src="https://www.iconsdb.com/icons/preview/white/cat-xxl.png" height="15px"></img> </td></tr></table>
              </span>
            </button>
          </span>
          <span className="nav-button">
            <button className="nav-bar-main-button" onClick={() => this.props.handleNavFormBar('resources')}>
              <span className="filler">
                <table align="center" id="nav-find-search-type-table"><tr><td>RESOURCES </td><td> <img src="https://www.iconsdb.com/icons/preview/white/cat-xxl.png" height="15px"></img> </td></tr></table>
              </span>
            </button>
          </span> */}
          

          
          <div className="nav-button search" onClick = {this.handleSearchSwitch}>?</div>
        </div>
      )
    } else if (this.state.search === true) {
      return (
        <div id="nav-search-container" className ="searching">
          
            <span className="searching">
              <div className="nav-button-searching fake">.</div>
              <div className="nav-button-searching">Pet Finder</div>
              Search Articles: <input type="text"></input>
              <div className="nav-button-searching search" onClick = {this.handleSearchSwitch}>X</div>
            
            </span>
            <span>
              <div className="nav-button-searching search">?</div>
            </span>
          
        </div>
      )
    } 
  }
}

export default NavMain;