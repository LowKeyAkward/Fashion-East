import CreateButton from "../components/CreateButton"
import Header from "../components/Header"

export default function header(props) {
  return (
    <div>
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <CreateButton/>
      {props.children}
    </div>
  )
}