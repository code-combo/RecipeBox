// styles
import { useTheme } from "../hooks/useTheme"
import "./RecipeList.css"

import { Link } from 'react-router-dom'
// import { useFetch } from "../hooks/useFetch";
// import { useEffect, useState } from "react";

export default function RecipeList({ recipes }) {

  const { mode } = useTheme();

  if(recipes.length === 0) {
    return <div className="error">No Recipes To Load...</div>
  }

  return (
    <div className="recipe-list">
        {recipes.map(recipe => (
            <div key = {recipe.id} className= {`card ${mode}`}>
                <h3>{recipe.title}</h3>
                {/* <button className="del-btn" onClick={() => handleDelete(recipe.id)}>Delete</button> */}
                <p>{recipe.cookingTime} to make.</p>
                <p>{recipe.method.substring(0, 100)}...</p>
                <Link to = {`/recipe/${recipe.id}`  }>Cook This</Link>
            </div>
        ))}
    </div>
  )
}
