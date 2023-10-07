// styles
import "./RecipeList.css"

import React from 'react'

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
        {recipes.map(recipe => (
            <div key = {recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <p>{recipe.method}</p>
            </div>
        ))}
    </div>
  )
}
