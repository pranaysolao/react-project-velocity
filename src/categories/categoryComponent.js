import { Routes, Route, Navigate, } from "react-router-dom"
import { MainCategoryList } from "./main-categories/MainCategoryList";
import { CategorySub } from "./sub-categories/categorysub";
import { CreateMainCategory } from "./main-categories/createCategory";
import { CreateSubCategory } from "./sub-categories/createsubCategory";


export function CategoriesComponent(){
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to={"maincategory"} replace={true} />}></Route>
                <Route path="maincategory" element={<MainCategoryList />}> </Route>
                <Route path="maincategory/create" element={<CreateMainCategory />}/>
                <Route path="subcategory" element={<CategorySub />}></Route>
                <Route path="subcategory/create" element={<CreateSubCategory />}/>
            </Routes>
        </div>
    )
}