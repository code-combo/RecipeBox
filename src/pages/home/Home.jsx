import { useFetch } from "../../hooks/useFetch";

// styles
import "./Home.css"

// custom hooks
import { useTheme } from "../../hooks/useTheme";

// components
import RecipeList from "../../components/RecipeList";


export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');
  const { mode } = useTheme();

  return (
    <div 
      className="home"
    >
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes = {data}/>}
    </div>
  )
}