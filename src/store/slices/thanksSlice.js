import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: false,
};

export const thanksSlice = createSlice({
	name: "thanksSlice",
	initialState,
	reducers: {
		changeThanksStatus: (state, action) => {
			state.status = action.payload;
		},
	},
});

export const { changeThanksStatus } = thanksSlice.actions;
export default thanksSlice.reducer;
