import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact Me</Link>
    </div>
  )
}

export default Navbar
