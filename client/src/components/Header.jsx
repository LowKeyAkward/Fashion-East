import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import "./Header.css"
import Dynamite from "../assets/music/Dynamite.mp3"

function Header(props) {
  const { currentUser } = props
  const [playing, setPlaying] = useState(false)

  let audio = new Audio(Dynamite)
  audio.volume = 0.2

  const toggle = () => {
    if (playing) {
      setPlaying(false)
    } else if (!playing) {
      setPlaying(true)
    }
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  return (
    <div className="header-div">
      
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      <Link to="/home" className="header-title">Fashion East</Link>
      
      <div className="header-sign">
        {
          currentUser ?
            <div className="signout">
              <p className="header-username">Welcome Back {currentUser.username}</p>
              <button className="header-button" onClick={props.handleLogout}>Logout</button>
            </div>
            :
            <Link className="header-link" to="/login">Login/Register</Link>
        }
      </div>

    </div>
  );
}

export default Header;