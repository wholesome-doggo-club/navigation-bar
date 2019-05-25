import React from "react";
import Popup from "reactjs-popup";

export default () => (
    <Popup
    trigger={<button className="nav-top-button no-bold"><table align="center"><tbody><tr><td>👤</td><td>Sign In / Register</td></tr></tbody></table></button>} modal closeOnDocumentClick>

    {/* <div id="nav-pop-up-main">
      <span className="nav-popup-left-container">
      <h1>Petfinder Makes Adopting Easier</h1>
      <ul>
        <li>Create and save your adopter profile.</li>
        <li>Save and manage your pet searches and email communications.</li>
        <li>Learn helpful pet care tips and receive expert advice.</li>
        <li>Get involved and help promote adoptable pets in your area.</li>
      </ul>



    </span>
      <span className="nav-popup-right-container">
        <h1>Log in to Petfinder</h1>
        <form>
          <input type="text"></input><br></br>
          <input type="text"></input><br></br>
          <input type="submit"></input>
        </form><br></br>
        Forgot password?<br></br>
        Don't have an account? Register

      
      </span>
    </div> */}
  </Popup>
)