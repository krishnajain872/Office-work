import { createSlice } from "@reduxjs/toolkit";


const initialState= {
  id:null,
  isLoggedIn: false,
  name: "",
  email: "",
  phone: "",
  altNumber:'',
  token: "",
  profileImage: "",
  firebaseIdToken:""
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state,action){
      const {
        _id,name,email,phone,token
      } = action.payload
      
      return {
        ...state,
        isLoggedIn:true,
        id:_id,
        name,
        email,
        phone,
        token
      }

    },
    setPhone(state, action) {
      state.phone = action.payload;
    },

    setToken(state, action) {
      state.token = action.payload;
    },

    setVerify(state, action) {
      state.verify = action.payload;
    },
    logout(state,action){
        return initialState
    }
    ,setFirebaseIdToken(state,action){
      state.firebaseIdToken = action.payload
    }
  },
});
export const { setToken, setPhone, setVerify ,setAuth, logout, setFirebaseIdToken} = authSlice.actions;

export default authSlice;
