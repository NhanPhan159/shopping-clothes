import { useDispatch, useSelector } from "react-redux";
import { InputNumber } from 'antd';

// self-define
import { IState } from "../reducers/cartReducers";


const CartItem = () => {
    const cartProduct = useSelector((state) => state.cartReducers)
    const dispatch = useDispatch()
    
    const addCart = (data: IState) => dispatch({ type: "UPDATE_CART", data: data })
    const removeCart = (id: number) => dispatch({ type: "REMOVE_CART", id: id })
    
    const onchange = (value: number, curr: IState) => {
        addCart({...curr,quantity:value})
    }
    function calToTal(price:number, quantity:number):number {
        return price * quantity
    }
    
    return ( 

        <div className="flex-1">
            <h1 className="mb-3 text-lg">Shopping cart</h1>
            <hr className="mb-14"/>
            {cartProduct.length > 0 && 
                (
                <div>
                    <div className="flex gap-4 mb-3">
                        <p className="flex-initial w-40"></p>
                        <p className="flex-1">Item</p>
                        <p className="flex-initial w-28">Item price</p>
                        <p className="flex-initial w-28">Quantity</p>
                        <p className="flex-initial w-28">Total Price</p>
                    </div>
                    <hr className="mb-4"/>
                    {cartProduct.map((curr: IState) => (
                        <>
                            <div key={curr.data.id+"-data"} className="flex gap-4 mb-4 relative">
                                <img className="flex-initial w-40 h-52" src={curr.data.imgSrc} alt="" />
                                <div className="flex-1">
                                    <p className="mb-4">{curr.data.name}</p>
                                    <span className="text-xs font-semibold">Description: </span>
                                    <span className="text-xs">{ curr.data.description}</span>
                                </div>
                                <p className="flex-initial w-28">{"$"+curr.data.price+".00"}</p>
                                <div className="flex-initial w-28">
                                    <InputNumber  size="large" min={1} max={100000} defaultValue={curr.quantity} onChange={(e:any)=>onchange(e,curr)} />
                                </div>
                                <p className="flex-initial w-28 font-semibold">{"$" + calToTal(curr.data.price,curr.quantity) + ".00" }</p>
                                <button
                                    onClick={()=>removeCart(curr.data.id)}
                                    className="absolute bottom-0 right-0 hover:text-red-400 underline text-slate-400 hover:no-underline">remove</button>
                            </div>
                            <hr key={curr.data.id+"-hr"}/>
                        </>
                    ))}
                </div>
                )
            }
         
        </div>
            
     );
}

export default CartItem;
