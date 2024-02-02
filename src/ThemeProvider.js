import { createContext, useReducer } from "react";

export const themeContext=createContext()
 
const themeReducer=(state,action)=>{
    switch(action.type){
        case 'CHANGE THEME':return{
            ...state,
            theme:action.payload
        }
        default:
            return state
    }
}

export default function ThemeProvider(props){

    const[state,dispatch]=useReducer(themeReducer,{theme:true})

const changeTheme=(themeValue)=>{
    dispatch({type:"CHANGE THEME", payload:themeValue})
}
return(
    <themeContext.Provider value={{...state,changeTheme}}>
        {props.children}
    </themeContext.Provider>
)
}
