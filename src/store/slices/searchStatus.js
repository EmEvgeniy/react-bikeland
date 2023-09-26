import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const searchStatus = createSlice({
	name: "searchStatus",
	initialState,
	reducers: {
		changeSearchStatus: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { changeSearchStatus } = searchStatus.actions;
export default searchStatus.reducer;
