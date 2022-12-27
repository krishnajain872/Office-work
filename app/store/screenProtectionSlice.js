import { createSlice } from "@reduxjs/toolkit";

// const apiSchema = {
//   device_brand: "Apple",
//   device_model: "iphone 11",
//   device_imei: "3434343434",
//   invoice_amount: "30000",
//   device_purchased_date: "12-12-2021",
//   screen_protection_plan_id: "1",
//   plan_amount: "999",
//   coupon_id: null,
// };

const initialState = {
  brand: "",
  model: "",
  imei: "",
  invoiceAmount: "",
  purchaseDate: "",
  planId: "",
  bestPlanPrice: 0,
};

const repairOrderSlice = createSlice({
  name: "screenProtectionOrder",
  initialState: initialState,
  reducers: {
    setPhoneDetail(state, action) {
      const data = action.payload;
      return {
        ...state,
        ...data,
      };
    },
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setPlanId(state, action) {
      state.planId = action.payload;
    },
    setPurchaseDate(state, action) {
      state.purchaseDate = action.payload;
    },
    setModel(state, action) {
      state.model = action.payload;
    },
    setInvoiceAmount(state, action) {
      state.invoiceAmount = action.payload;
    },
    setMobileIdentityNumber(state, action) {
      state.imei = action.payload;
    },
    clearFields(state, action) {
      state = initialState;
    },
    setBestPlanPrice(state, action) {
      state.bestPlanPrice = action.payload;
    },
    setByKey(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {
  setBrand,
  setModel,
  setInvoiceAmount,
  setMobileIdentityNumber,
  setPurchaseDate,
  setBestPlanPrice,
  setPlanId,
  setByKey
} = repairOrderSlice.actions;
export default repairOrderSlice;
