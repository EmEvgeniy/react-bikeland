import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
	status: false,
};

export const favoriteSlice = createSlice({
	name: "favoriteSlice",
	initialState,
	reducers: {
		setItemIntoFavorite: (state, action) => {
			if (!state.value.some((el) => el.id === action.payload.id)) {
				state.value.push(action.payload);
			} else {
				return;
			}
		},
		removeItemFromFavorite: (state, action) => {
			state.value = state.value.filter((el) => el.id !== action.payload.id);
		},
		setFavoriteStatus: (state, action) => {
			state.status = action.payload;
		},
	},
});

export const {
	setItemIntoFavorite,
	removeItemFromFavorite,
	setFavoriteStatus,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
