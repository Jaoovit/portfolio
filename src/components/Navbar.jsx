import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About Me</Link>
    </div>
  )
}

export default Navbar
