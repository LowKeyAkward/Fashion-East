import React from 'react';
import { useHistory } from "react-router-dom"
import "./Landing.css"

function Landing(props) {
  const history = useHistory()
  
  const handleOnSubmit = () => {
    history.push("/home")
  }

  return (
    <div className="landing-div">
      <div className="enter-div">
        <div className="landing-title">
        <h1>Welcome</h1>
        <h1>To</h1>
        <h1>Fashion East</h1>
      </div>
        <button  className="landing-button" onClick={handleOnSubmit}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default Landing;