import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(context === undefined) {
        throw new error("useTheme() must be inside a ThemeProvider");
    }

    return context;
}