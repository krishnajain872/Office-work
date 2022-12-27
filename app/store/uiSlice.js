import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name:'ui',
    initialState:{
        searchBarVis:false,
        drawerVis:false,
        isLoading:false,
        authLoading:false,
        clickCords:{x:0,y:0},
        redirects:{
            successLogin:'/'
        }
    },
    reducers:{
        setSearchBarVis(state,action){
            state.searchBarVis  = action.payload
        }
        , 
        toggleDrawerVis(state,action){
            state.drawerVis  = action.payload
        },
        setIsLoading(state,action){
            state.isLoading = action.payload
           
        },
        setSuccessLoginRedirect(state,action){
            state.redirects.successLogin = action.payload
        }

        ,
        setAuthLoading(state,action){
            state.authLoading = Boolean(action.payload)
        }
    }
    
})


export const {setIsLoading,setSuccessLoginRedirect,toggleDrawerVis,setAuthLoading} = uiSlice.actions 
export default uiSlice


