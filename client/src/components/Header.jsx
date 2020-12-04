import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  const { currentUser } = props
  return (
    <div>

      <h1>Fashion East</h1>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
          :
          <Link to="/login">Login/Register</Link>
      }

      

      <hr />

    </div>
  );
}

export default Header;