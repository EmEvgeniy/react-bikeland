import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
	status: false,
};

export const basketSlice = createSlice({
	name: "basketSlice",
	initialState,
	reducers: {
		setItemIntoBasket: (state, action) => {
			if (!state.value.some((el) => el.id === action.payload.id)) {
				state.value.push(action.payload);
			} else {
				return;
			}
		},
		removerItemIntoBasket: (state, action) => {
			state.value = state.value.filter((el) => el.id !== action.payload.id);
		},
		setBasketStatus: (state, action) => {
			state.status = action.payload;
		},
		plusNum: (state, action) => {
			let i = state.value.findIndex((el) => el.id === action.payload.id);
			state.value[i].num = state.value[i].num + 1;
		},
		minusNum: (state, action) => {
			let i = state.value.findIndex((el) => el.id === action.payload.id);
			state.value[i].num === 1
				? (state.value = state.value.filter(
						(el) => el.id !== action.payload.id
				  ))
				: (state.value[i].num = state.value[i].num - 1);
		},
	},
});

export const {
	setItemIntoBasket,
	removerItemIntoBasket,
	setBasketStatus,
	plusNum,
	minusNum,
} = basketSlice.actions;
export default basketSlice.reducer;
