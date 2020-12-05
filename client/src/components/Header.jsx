import React from 'react';
import { Link } from 'react-router-dom'
import "./Header.css"

function Header(props) {
  const { currentUser } = props
  return (
    <div className="header-div">

      <h1 className="header-title">Fashion East</h1>
      
      <div className="header-sign">
        {
          currentUser ?
            <>
              <p className="header-username">{currentUser.username}</p>
              <button className="header-button" onClick={props.handleLogout}>Logout</button>
            </>
            :
            <Link className="header-link" to="/login">Login/Register</Link>
        }
      </div>

    </div>
  );
}

export default Header;