import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import store from "..";
import { setAuth } from "../authSlice";
import { setAuthLoading } from "../uiSlice";
var isInitial = true;
var baseUrl = process.env.NEXT_PUBLIC_API_URL;
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (isInitial && token) {
        isInitial = false;
        store.dispatch(setAuthLoading(true));
        const res = await fetch(`${baseUrl}/me`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok && data) {
          console.log("users info recieved : ", data);
          store.dispatch(setAuth({ ...data, token: token }));
        } else {
          console.log("not logged in : ", data);
        }
        store.dispatch(setAuthLoading(false));
      }
      if (getState().auth.token || token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    }
    }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ firebaseIdToken }) => ({
        url: "/auth/signin",
        method: "POST",
        body: { firebaseIdToken },
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    getRepairData: builder.query({
      query: () => "/data/repair"
    }),
    getAddress: builder.query({
      query: () => ({
        url: "/address",
      }),
      keepUnusedDataFor: 1,
    }),
    createAddress: builder.mutation({
      query: (address) => ({
        url: "/address",
        method: "POST",
        body: address,
      }),
    }),
    deleteAddress: builder.mutation({
      query: (addressId) => ({
        url: `/address/${addressId}`,
        method: "DELETE",
      })
    }),
    updateAddress: builder.mutation({
      query: ({ id, ...address }) => ({
        url: `/address/${id}`,
        method: "POST",
        body: address,
      }),
    }),
    createOrder: builder.mutation({
      query: (order) => ({
        url: "/order/repair",
        method: "POST",
        body: order,
      }),
    }),
    readRepairOrder: builder.query({
      query: () => "/order/repair"
    })
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetRepairDataQuery,
  useGetAddressQuery,
  useCreateAddressMutation,
  useDeleteAddressMutation,
  useLazyGetAddressQuery,
  useCreateOrderMutation,
  useReadRepairOrderQuery } = api;

export default api;
