// import Image from 'next/image'

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand d-flex align-items-center" href="#">
          {/* <Image src="/favicon.ico" width="30" height="30" className="d-inline-block" alt="icon" /> */}
          <span className="pl-3 pr-3">{props.header}</span>
        </a>
      </nav>
    </div>
  )
}