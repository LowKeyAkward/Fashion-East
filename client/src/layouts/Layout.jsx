import Header from "../components/Header"

export default function header(props) {
  return (
    <div>
      <Header currentUser = {props.currentUser} />
      {props.children}
    </div>
  )
}