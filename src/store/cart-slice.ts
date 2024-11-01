import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartSliceState = {
    id: string;
    name: string;
    price: string;
    amount: number;
}

const initialState: CartSliceState[] = []

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartSliceState>) {
            const meal = state.findIndex(meal => meal.id === action.payload.id)

            if (meal === -1) {
                action.payload.amount++;
                state.push(action.payload);
                return;
            }
            state[meal].amount++
        },

        removeFromCart(state, action: PayloadAction<string>) {

            const meal = state.findIndex(meal => meal.id === action.payload)

            if (state[meal].amount === 1) {
                state.splice(meal, 1)
                return;
            }
            state[meal].amount--
        },
        clearCart(state) {
            state.splice(0)
        }
    }

})

export const cartActions = cartSlice.actions;
export default cartSlice;
