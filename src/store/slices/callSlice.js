import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	value: false
}

export const callSlice =createSlice({
	name: "callSlice",
	initialState,
	reducers:{
		changeCallStatus: (state,action) =>{
			state.value =action.payload
		}
	}
})

export const {changeCallStatus} = callSlice.actions
export default callSlice.reducer