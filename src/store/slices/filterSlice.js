import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "По умолчанию",
};

export const filterSlice = createSlice({
	name: "filterSlice",
	initialState,
	reducers: {
		addFilterValue: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { addFilterValue } = filterSlice.actions;
export default filterSlice.reducer;
