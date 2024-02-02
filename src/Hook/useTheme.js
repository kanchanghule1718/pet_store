import { useContext } from "react"
import { themeContext } from "../ThemeProvider"

export const useTheme=()=>{
    const context=useContext(themeContext)
    return context
}