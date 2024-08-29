import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CreateMainCategory } from "./createCategory"
import { useEffect } from "react"
import { setMainCategory } from "../../store.js/maincategirySlice"
import axios from "axios"

export function MainCategoryList() {
    const mainCategories = useSelector(store => store.mainCategory)
    const dispatch = useDispatch()

    useEffect(() => {
        // const data = [
        //     {
        //         "id": "6",
        //         "name": "Electronics",
        //         "description": "Explore a wide range of electronic items"
        //     }, {
        //         "id": "6",
        //         "name": "Electronics",
        //         "description": "Explore a wide range of electronic items"
        //     }
        // ]
        axios({
            method:"Get",
            url:'http://localhost:3002/categories'
        })
        .then(res=>{
            // console.log(res.data)
            dispatch(setMainCategory(res.data))
        })

    }, [])
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-end">

                <Link to={CreateMainCategory} className="btn btn-primary">Create MainCategory</Link>
            </div>
            <table className="table table-hover">
                <thead className="bg-bg-danger text-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>CreateAt</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mainCategories.map(item => {
                            return <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.createAt}</td>
                                <td>{item.description}</td>
                            </tr>
                        })

                    }
                </tbody>
            </table>
        </div>
    )
}