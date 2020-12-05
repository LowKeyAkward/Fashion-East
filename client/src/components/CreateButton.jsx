import React from 'react';
import Addbutton from "../assets/icons/button.png"
import {useHistory} from "react-router-dom"

function CreateButton(props) {
  const history = useHistory()

  const handleClick = () => {
    history.push("/posts/create")
  }

  return (
    <div>
      <button onClick={handleClick}>
        <image src={Addbutton} alt="Create Post"/>
      </button>
    </div>
  );
}

export default CreateButton;