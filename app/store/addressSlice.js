import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
      _id:'',
      name:"",
      phone: "",
      altPhone: "",
      plotNumber: "",
      area: "",
      pincode: "",
      landmark: "",
      addressType:"",
      city:'',
      state:''
      
  },
  reducers: {
    setAddress(state,action){
        return {
          ...state,
          ...action.payload
        }
    }
  },
});
export const {setAddress} = addressSlice.actions;

export default addressSlice;
