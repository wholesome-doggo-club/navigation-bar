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
        <div>
          <button class="button">Pet Finder</button>
          <button class="button" onClick={() => this.props.handleNavFormBar('findPet')}>Find a Pet!</button>
          <button class="button" onClick={() => this.props.handleNavFormBar('breeds')}>Breeds</button>
          <button class="button" onClick={() => this.props.handleNavFormBar('resources')}>Resources</button>
          <button class="button search" onClick = {this.handleSearchSwitch}>?</button>
        </div>
      )
    } else if (this.state.search === true) {
      return (
        <div class="nav-search-container">
          
            <span><button class="button">Pet Finder</button>
            <input type="text"></input>
            <button class="button search" onClick = {this.handleSearchSwitch}>X</button>
            
            </span>
            <span>
            <button class="button search">?</button>
            </span>
          
        </div>
      )
    } 
  }
}

export default NavMain;