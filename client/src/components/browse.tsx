import { Link } from "react-router-dom";

const Browser = () => {
    return ( 
        <div>
            <p className="text-sm font-semibold pb-2">Browser By</p>
            <hr className="w-[8rem] pb-10"/>
            <div className="flex flex-col gap-4">
                <Link to={`/products/T-shirt`}>T-shirt</Link>
                <Link to={`/products/Sweater`}>Sweater</Link>
            </div>
        </div>
     );
}
 
export default Browser;