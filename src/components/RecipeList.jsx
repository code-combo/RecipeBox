// styles
import "./RecipeList.css"

import { Link } from 'react-router-dom'

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
        {recipes.map(recipe => (
            <div key = {recipe.id} className="card">
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <p>{recipe.method.substring(0, 100)}...</p>
                <Link to = {`/recipe/${recipe.id}`}>Cook This</Link>
            </div>
        ))}
    </div>
  )
}
