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
          <div className="nav-button">Pet Finder</div>
          <div className="nav-button" onClick={() => this.props.handleNavFormBar('findPet')}>Find a Pet!</div>
          <div className="nav-button" onClick={() => this.props.handleNavFormBar('breeds')}>Breeds</div>
          <div className="nav-button" onClick={() => this.props.handleNavFormBar('resources')}>Resources</div>
          <div className="button search" onClick = {this.handleSearchSwitch}>?</div>
        </div>
      )
    } else if (this.state.search === true) {
      return (
        <div id="nav-search-container" className ="searching">
          
            <span className="searching">
              <div className="button searching">Pet Finder</div>
              Search Articles: <input type="text"></input>
              <div className="button search searching" onClick = {this.handleSearchSwitch}>X</div>
            
            </span>
            <span>
              <div className="button search searching">?</div>
            </span>
          
        </div>
      )
    } 
  }
}

export default NavMain;