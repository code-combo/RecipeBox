

import { Outlet } from "react-router-dom";

// styles
import "./RecipeLayout.css"
import "../index.css"

// Components
import Navbar from "../components/Navbar";
import ThemeSelector from "../components/ThemeSelector";

// Custom hook
import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";

export default function RootLayout() {

  const { mode } = useTheme();

  useEffect(() => {
    document.body.className = mode
  }, [mode])

  return (
    <div>
        <Navbar/>
        <ThemeSelector/>
        <Outlet/>
    </div>
  )
}
