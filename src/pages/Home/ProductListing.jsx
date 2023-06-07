import React, { useState } from "react";
import axios from "axios";

export default function ProductListing(){
    const[productList, setProductList] = useState();
    const fetchProducts = async()=>{
        try{
            const products = await axios.get("/api/products");
            console.log(products.data.products);
            setProductList(products.data.products);
        }
        catch(e){
            console.error(e);
        }
    }

    fetchProducts();
    return(
        <div>
            <p>This is product listing page</p>
            <ul>
            {
                productList?.map((product)=>(
                    <li style={{listStyle : "none"}}>{product.productName}</li>
                ))
            }       
            </ul>
            
        </div>
    )

}