export default function Footer(props) {
  return (
    <div>
      <footer className="footer bg-light">
        <p className="text-center text-muted p-3">{props.footer}</p>
      </footer>
    </div>
  )
}