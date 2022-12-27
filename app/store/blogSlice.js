import { createSlice } from "@reduxjs/toolkit";
import blogsJson from './blogsJson'
const initialState = blogsJson

const blogSlice = createSlice({
    name:'blogs',
    initialState:initialState    
})


export default blogSlice