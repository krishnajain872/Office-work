import { useSelector } from "react-redux"

export const setTheme = (scheme)=>{
    document.querySelector('body').setAttribute('theme-scheme',scheme)
    localStorage.setItem('theme-scheme',scheme)
}


export const loadSavedTheme = () =>{
    document.querySelector('body').setAttribute(
        localStorage.getItem('theme-scheme')
    )
}


function saveTheme(){
    
}