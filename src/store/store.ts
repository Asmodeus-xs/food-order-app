import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cart-slice"





const store = configureStore({
    reducer: { cart: cartSlice.reducer }
})



export type DispatchType = typeof store.dispatch
export type SelectorType = ReturnType<typeof store.getState>

export default store;