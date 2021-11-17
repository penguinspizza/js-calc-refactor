export default function Footer(props) {
  return (
    <div>
      <footer className="footer bg-light fixed-bottom">
        <p className="text-center text-muted p-3">{props.footer}</p>
      </footer>
    </div>
  )
}