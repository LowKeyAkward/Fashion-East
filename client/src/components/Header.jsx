import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div>
      <h1>Fashion East</h1>
      <Link to="/login">
        Login/Register
      </Link>
      <hr />
    </div>
  );
}

export default Header;