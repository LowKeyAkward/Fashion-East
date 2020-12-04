import React from 'react';
import { useHistory } from "react-router-dom"

function Landing(props) {
  const history = useHistory()
  
  const handleOnSubmit = () => {
    history.push("/home")
  }

  return (
    <div>
      <div>
        <h1>Welcome</h1>
        <h1>To</h1>
        <h1>Fashion East</h1>
      </div>
        <button onClick={handleOnSubmit}>
          Enter
        </button>
    </div>
  );
}

export default Landing;