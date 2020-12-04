import Header from "../components/Header"

export default function header(props) {
  return (
    <div>
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      {props.children}
    </div>
  )
}