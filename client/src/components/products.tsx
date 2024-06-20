import { useLoaderData } from "react-router-dom";

//self-define
import ProductItem from "./productItem";
import { IProduct } from "./productItem";
const Products = (props:{action:()=>void}) => {
    const products = useLoaderData() as IProduct[]
    return ( 
        <div>
            <p className="font-semibold mb-3">Men's Clothing {products.length} products</p>
            <div className="flex flex-wrap gap-5">
                {products.map((curr,index) => <ProductItem key={index} data={curr} action={props.action}/>)}
            </div>
        </div>
     );
}
 
export default Products;