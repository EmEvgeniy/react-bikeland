import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
	status: false,
};

export const cardDetailsSlice = createSlice({
	name: "cardDetailsSlice",
	initialState,
	reducers: {
		changeCardStatus: (state, action) => {
			state.status = action.payload;
		},
		addCardItem: (state, action) => {
			state.value = action.payload;
		},

	},
});

export const {changeCardStatus,addCardItem} = cardDetailsSlice.actions
export default cardDetailsSlice.reducer