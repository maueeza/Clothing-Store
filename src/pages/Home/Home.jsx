import { categories } from "../../backend/db/categories";

export default function Home(){
    return (<div>
        {
            categories.map((category)=>{
                return(<div>
                    <p>{category.categoryName}</p>
                </div>)
            })
        }
    </div>)
}