import { Link } from "react-router-dom";

// styles
import "./Navbar.css"

// custom hooks
import { useTheme } from "../hooks/useTheme";

// components
import Searchbar from "./Searchbar";
import ThemeSelector from "./ThemeSelector";

export default function Navbar() {

  const { color } = useTheme();

  return (
    <div 
      className="navbar" 
      style = {{background: color}} 
    >
        <nav>
          <Link to = "/" className="brand">
              <h1>Recipe Box</h1>
          </Link>
          <Searchbar/>
          <Link to = "create">Create Recipe</Link>
        </nav>
    </div>
  )
}
