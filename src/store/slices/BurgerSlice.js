import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const BurgerSlice = createSlice({
	name: "burger",
	initialState,
	reducers: {
		changeBurgerStatus: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { changeBurgerStatus } = BurgerSlice.actions;
export default BurgerSlice.reducer;
