import React from "react";
import Nav from "react-bootstrap/Nav";

class NavBar extends React.Component {
  render() {
    return (
      <Nav>
        <div>
          Screamer
          <div className="logoutButton">
            <button onClick={this.props.clickHandler}>Log out</button>
          </div>
        </div>
      </Nav>
    );
  }
}

export default NavBar;
