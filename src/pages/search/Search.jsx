import { useLocation } from "react-router-dom"

// Styles
import "./Search.css"

// Custom hook
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

// Components
import RecipeList from "../../components/RecipeList";

export default function Search() {

  const queryString = useLocation();
  // console.log(queryString);
  
  const queryParams = new URLSearchParams(queryString.search);
  const query = queryParams.get("q");
  // console.log(query);

  const url = "http://localhost:3000/recipes?q=" + query
  // console.log(url);

  const { error, isPending, data} = useFetch(url);

  // const { color, setColor } = useTheme();

  return (
    <div className="search"> 
      {/* <h2 className="page-title">Recipes including "{query}"</h2> */}

      {/* <button className="theme-btn theme1" onClick={() => setColor("teal")}></button>
      <button className="theme-btn theme2" onClick={() => setColor("orange")}></button>
      <button className="theme-btn theme3" onClick={() => setColor("crimson")}></button> */}

      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes = {data}/>}
    </div>
  )
}
