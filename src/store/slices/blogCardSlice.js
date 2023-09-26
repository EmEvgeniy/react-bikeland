import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
	status: false,
};

export const blogCardSlice = createSlice({
	name: "blogCardSlice",
	initialState,
	reducers: {
		changeBlogStatus: (state, action) => {
			state.status = action.payload;
		},
		addBlogItem: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { changeBlogStatus,addBlogItem } = blogCardSlice.actions;
export default blogCardSlice.reducer;
