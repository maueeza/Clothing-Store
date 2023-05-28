import { useEffect, useState } from "react";
import axios from "axios"

export default function Home(){
    const [categoryList, setCategoryList] = useState([]);
    const fetchCategories = async() =>{
        try{
            const response = await axios.get("/api/categories");
            console.log(response.data.categories);
            setCategoryList(response.data.categories);
        }
        catch(e)
        {
            console.error(e);
        }
    }
    useEffect(()=>{
        fetchCategories();
    },[])
    return (<div>
        {
            categoryList.map((category)=>{
                return(<div key={category._id}>
                    <p>{category.categoryName}</p>
                </div>)
            })
        }
    </div>)
}