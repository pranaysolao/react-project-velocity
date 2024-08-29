import { Public } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export const subCategorySlice=createSlice({
    name:"sub Category",
    initialState:[],
    reducers:{
        setSubCategory :(state,action)=>{
            state= action.payload
            return state
        }
    }
});
export const {setSubCategory}=subCategorySlice.actions
export default subCategorySlice.reducer;