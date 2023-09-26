import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "Экипировки",
};
export const titleSlice = createSlice({
	name: "titleSlice",
	initialState,
	reducers: {
		changeTitle: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { changeTitle } = titleSlice.actions;
export default titleSlice.reducer;
