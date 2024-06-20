import { useState } from "react";

//self-define
import ModalCustom from "./modal";

export interface IProduct {
    data: {
        id: number,
        category: string,
        name: string,
        price: number,
        imgSrc: string,
        description: string
    },
    action: ()=>void
}

const ProductItem = (props: IProduct) => {
    const [isHover,setIsHover] = useState(false)
    return ( 
        <div>
            <div className="relative w-[300px] h-[450px]" onMouseLeave={()=>setIsHover(false)} onMouseOver={()=>setIsHover(true)}>
                <img src={props.data.imgSrc} alt="" />
                {
                    isHover &&
                    <div className="cursor-pointer absolute py-5 text-center bottom-0 w-full bg-opacity-10 bg-white">
                        <ModalCustom action={props.action} data={props.data}/>
                    </div>
                }
            </div>
            <p className="w-[19rem]">{ props.data.name}</p>
            <p className="text-xs">{ "$"+props.data.price+".00"}</p>
        </div>
     );
}
 
export default ProductItem;