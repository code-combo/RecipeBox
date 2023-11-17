import { useState, useEffect } from "react"

// styles
import "./Create.css"
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
// import { useTheme } from "../../hooks/useTheme";

export default function Create() {

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("")
  const [ingredients, setIngredients] = useState([]);

  const { mode } = useTheme()
  // const ingredientInput = useRef(null);
  const navigate = useNavigate();

  const {postData, data, error} = useFetch("http://localhost:3000/recipes", "POST");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(title, method, cookingTime, ingredients);
    postData({title, ingredients, method, cookingTime: cookingTime + " minutes"})

    console.log(data);
  }

  const handleAdd = e => {
    e.preventDefault();
    const ing = newIngredient.trim();

    // avoiding a user from adding the same ingridient twice 
    if(ing && !ingredients.includes(ing)){ 
      setIngredients(prevIngredients => [...prevIngredients, ing]);
    } else {
      console.log("can't add the the same ingredient twice");
    }

    setNewIngredient("");
    // ingredientInput.current.focus(); 
  }

  useEffect(() => {
    if(data){
      navigate("/");
    }
  }, [data]);

  // const { color } = useTheme();

  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title">Add A New Recipe</h2>

      <form onSubmit = {handleSubmit}>
        <label>
          <span>Recipe Title:</span> 
          <input type="text" 
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        {/* ingridients go here! */}
        <label>
          <span>Recipe Ingridients:</span>
          <div className="ingredients">
            <input type="text" 
              onChange = {e => setNewIngredient(e.target.value)}
              value = {newIngredient}
              // autoFocus
            />
            <button className="btn" onClick={handleAdd}>Add</button>
          </div>
        </label>
        <p>Current ingredient: {ingredients.map(i => (
          <em key = {i}>{i}, </em>
        ))}</p>

        <label> 
          <span>Recipe Method:</span>
          <textarea 
            onChange={e => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label> 
          <span>Cooking Time (minutes):</span>
          <input type="number"
            onChange={e => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}