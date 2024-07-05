import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-20 py-9 text-xl font-bold">
      <Link className="hover:text-amber-400 duration-300" to='/'>Home</Link>
      <Link className="hover:text-amber-400 duration-300" to='/projects'>Projects</Link>
      <Link className="hover:text-amber-400 duration-300" to='/about'>About Me</Link>
    </div>
  )
}

export default Navbar
