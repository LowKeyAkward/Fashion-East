import CreateButton from "../components/CreateButton"
import Header from "../components/Header"
import "./Layout.css"

export default function header(props) {
  return (
    <div className="layout-div">
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <CreateButton/>
      {props.children}
    </div>
  )
}