import React from "react";
import NavMain from "./NavMain.jsx"

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      navFormBar: 'none'
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleNavFormBar = this.handleNavFormBar.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value });
  // }

  handleNavFormBar(formName) { // this function changes the condition to which drop down form it'll render to the navigation bar.
    if (this.state.navFormBar === formName){
      this.setState({navFormBar: 'none'})
    } else {
      this.setState({navFormBar: formName})
    }
  }

  render() {
    return (
      <div>
        <div id="nav-bar-frame">
          <div id="nav-bar-main"><NavMain handleNavFormBar={this.handleNavFormBar}/></div>
          <div id="nav-bar-register">Sign in here!!!</div>
        </div>
          {
          this.state.navFormBar === 'findPet' ? <div id="nav-form-bar-drop">find pet</div> :
          this.state.navFormBar === 'breeds' ? <div id="nav-form-bar-drop">breeds</div> :
          this.state.navFormBar === 'resources' ? <div id="nav-form-bar-drop">resources<br></br></div> :
          <div id="blank"></div>}
      </div>
    );
  }
}
export default Nav;