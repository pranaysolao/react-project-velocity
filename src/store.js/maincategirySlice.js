
import { createSlice } from '@reduxjs/toolkit'


const initialState = []

export const mainCategorySlice = createSlice({
    name: 'Main Category',
    initialState,
    reducers: {
        setMainCategory: (state, action) => {
            state= action.payload; // Make sure to return the new state
            return state
        }

    }
})
// Action creators are generated for each case reducer function
export const { setMainCategory } = mainCategorySlice.actions;
export default mainCategorySlice.reducer;