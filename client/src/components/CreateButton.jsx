import React from 'react';
import Addbutton from "../assets/icons/button.png"
import { useHistory } from "react-router-dom"
import "./CreateButton.css"

function CreateButton(props) {
  const history = useHistory()

  const handleClick = () => {
    history.push("/posts/create")
  }

  return (
    <div className="button-div">
      <button className="button" onClick={handleClick}>
        <img className="button-icon" src={Addbutton} alt="Create Post"/>
      </button>
    </div>
  );
}

export default CreateButton;