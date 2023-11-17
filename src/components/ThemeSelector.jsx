// styles
import "./ThemeSelector.css"

// custom hooks
import { useTheme } from "../hooks/useTheme"

// icons
import lightMode from "../assets/light-mode.svg"

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark");
        // console.log(mode);
    }

    console.log(mode);

  return (
    <div className="theme-selector">
        <div className="mode-toggle">
            <img 
                src={lightMode} 
                alt="dark/light toggle button" 
                onClick = {toggleMode}
                style = {{ filter: mode === "dark" ? 'invert(100%)' : 'invert(20%)' }}
            />
        </div>
        <div className="theme-buttons">
            {themeColors.map(color => (
                <div
                    key = {color}
                    onClick={() => changeColor(color)}
                    style = {{background: color}}
                />
            ))}
        </div>
    </div>
    // <h1>Alaye!</h1>
  )
}
