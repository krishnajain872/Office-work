import { createSlice,applyMiddleware } from "@reduxjs/toolkit";
// const storedMode = window.navigator.localStorage.getItem('theme-mode')
// const mode = ['light','dark'].includes(storedMode) ? storedMode : 'light'
const mode  ='light'


const themeSlice = createSlice({
    name:'theme',
    initialState:{
        mode:mode
    }
    
    ,
    reducers:{
        toggleMode(state,action){
            state.mode = state.mode==='light'?'dark':'light';
        },
        setMode(state,action){
            state.mode = action.payload
        }
       
    }
    
})

export const {toggleMode,setMode} = themeSlice.actions
export default themeSlice