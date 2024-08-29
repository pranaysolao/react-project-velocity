import { configureStore } from '@reduxjs/toolkit';
import   mainCategorySlice  from './maincategirySlice';

import   subCategorySlice  from './subcategory';

export const store = configureStore({
    reducer: {
        mainCategory: mainCategorySlice,
        subcategory:subCategorySlice
       
    },
});
