import Header from "../components/Header"

export default function header(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}