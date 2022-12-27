import {configureStore} from  '@reduxjs/toolkit'
import authSlice from './authSlice'
import themeSlice from './themeSlice'
import uiSlice from './uiSlice'
import apiSlice from './apiSlice'
import repairOrderSlice from './repairOrederSlice'
import authMiddleware from './middlewares/authMiddleware'
import addressSlice from './addressSlice'
import apiErrorHandler from './middlewares/apiErrorHandler'
import screenProtectionSlice from './screenProtectionSlice'
import blogSlice from './blogSlice'

export default configureStore({
    reducer:{
        [themeSlice.name]:themeSlice.reducer,
        [authSlice.name]:authSlice.reducer,
        [uiSlice.name]:uiSlice.reducer,
        [repairOrderSlice.name]:repairOrderSlice.reducer,
        [screenProtectionSlice.name]:screenProtectionSlice.reducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
        [addressSlice.name]:addressSlice.reducer,
        [blogSlice.name]:blogSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware,authMiddleware,apiErrorHandler),
}) 




  