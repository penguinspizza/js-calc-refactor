export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="./favicon.ico" width="30" height="30" className="d-inline-block align-top" alt="" />
          <span className="p-3">{props.header}</span>
        </a>
      </nav>
    </div>
  )
}