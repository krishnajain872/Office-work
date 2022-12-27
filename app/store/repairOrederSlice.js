import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mobile: {},
  color: "",
  issues: [],
  repairDate : "",
  timeSlotId: "",
  addressId : null,
  
}

const repairOrderSlice = createSlice({
    name:'repairOrder',
    initialState:initialState,
    reducers:{
      setDetails(state,action){
        const data =action.payload
        return {
          ...state,
          ...data
        }
      },
      setAddressId(state,action){
       const id = action.payload
       state.addressId = id
      },
      clearFields(state,action){
        state = initialState;
      }
    }

    
})

export const {setDetails,setAddressId} = repairOrderSlice.actions
export default repairOrderSlice