// import { useParams } from "react-router-dom"

// // styles
// import "./Recipe.css"
// // custom hooks
// import { useFetch } from "../../hooks/useFetch";

// export default function Recipe() {

//   const { id } = useParams();
//   const url = "http://localhost:3000/recipes/" + id;
//   const {error, isPending, data: recipe} = useFetch(url);

//   return (
//     <div>
//       {error && <p className="error">{error}</p>}
//       {isPending && <p className="loading">Loading...</p>}
//       {recipe && (
//         <>
//           <h2 className="page-title">{recipe.title}</h2>
//           <p>it takse {recipe.cookingTime} to cook.</p>
//           <ul>
//             {recipe.ingridients.map(ing => <li key = {ing}>{ing}</li>)}
//           </ul>
//           <p className="method">{recipe.method}</p>
//         </>
//       )}
//     </div>
//   )
// }

import { useParams } from "react-router-dom";
import "./Recipe.css";
import { useFetch } from "../../hooks/useFetch";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { error, isPending, data: recipe } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>It takes {recipe.cookingTime} to make.</p>
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            <ul>
              {recipe.ingredients.map((ing, index) => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients available.</p>
          )}
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
