import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CreateSubCategory } from "./createsubCategory"
import { useEffect } from "react"
import { setSubCategory } from "../../store.js/subcategory"
import axios from "axios"

export function CategorySub() {
    const subCategories = useSelector(store => store.subcategory)
    const dispatch=useDispatch()

    useEffect(()=>{
        // const data=[
        //     {
        //         "id": "1",
        //         "categoryId": null,
        //         "totalItems": 2,
        //         "name": "Smartphones",
        //         "description": "Browse the latest smartphones",
        //         "imageUrl": "https://example.com/images/smartphones.jpg"
        //       },
        //       {
        //         "id": "2",
        //         "categoryId": null,
        //         "name": "Laptops",
        //         "totalItems": 2,
        //         "description": "Choose from a variety of laptops",
        //         "imageUrl": "https://example.com/images/laptops.jpg"
        //       },
        // ]
   
           axios({
            method:"Get",
            url:"http://localhost:3002/subCategories"
           })
           .then(res=>{
               dispatch(setSubCategory(res.data))
           })
    },[])
    return (

        <div className="container-fluid">
            <div className="d-flex justify-content-end">

                <Link to={CreateSubCategory} className="btn btn-primary">Create MainCategory</Link>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category Name</th>
                        <th>Item</th>
                        <th>description</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subCategories.map(item => {
                            return <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.totalitem}</td>
                                <td>{item.description}</td>
                                <td>{item.imageurl}</td>
                                <td>
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger ms-3">Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}