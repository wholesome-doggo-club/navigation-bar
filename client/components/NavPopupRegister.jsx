import React from "react";
import Popup from "reactjs-popup";

export default () => (
    <Popup
    trigger={<button className="nav-top-button no-bold"><table align="center"><tr><td>👤</td><td>Sign In / Register</td></tr></table></button>} modal closeOnDocumentClick>

    <div id="nav-pop-up-main">
      <div className="nav-popup-left-container">Pet finder</div>
      <div className="nav-popup-right-container">Log in</div>
    </div>
  </Popup>
)