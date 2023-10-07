import { Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from "react-router-dom"

// styles
import "./App.css"

// Page Components
import RootLayout from "./Layouts/RootLayout"
import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Search from "./pages/search/Search"
import RecipeLayout from "./Layouts/RecipeLayout"
import Recipe from "./pages/recipe/Recipe"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<RootLayout/>}>
        <Route 
          index 
          element = {<Home/>}
          // loader = {homeLoader}
        />
        <Route path="create" element = {<Create/>}/>
        <Route path="search" element = {<Search/>}/>
        <Route path="recipe" element = {<RecipeLayout/>}>
          <Route 
          path = ":id" 
          element = {<Recipe/>}
          />
        </Route>
      </Route>
    )
  )

  return (
    // <div className="App">
    // </div>
    <RouterProvider router = {router}/>
  )
}

export default App
