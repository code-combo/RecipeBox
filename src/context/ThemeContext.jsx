import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload} 
        case "CHANGE_MODE":
            return { ...state, mode: action.payload}
        default:
            state
    }
}

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: "#58249c",
        mode: "dark"
    });

    const changeColor = color => {
        dispatch({type: "CHANGE_COLOR", payload: color}); // the { type: "ANYTHING", payload: NILL } represents the "action" argument for the reducer function, in our case that should be the themeReducer() function
    }

    const changeMode = (mode) => {
        dispatch({ type: "CHANGE_MODE", payload: mode })
    }

    // console.log("state:", state);



    return (
        <ThemeContext.Provider value = {{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}