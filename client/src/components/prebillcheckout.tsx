import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type NotificationType = 'success' | 'info' | 'warning' | 'error';
interface IPreBill {
    action: (type: NotificationType, message: string, description: string)=>void
}

const PreBillCheckout = (props:IPreBill) => {
    const totalBill = useSelector(state => state.cartReducers.reduce((res: number, curr: IState) => res + curr.data.price * curr.quantity, 0))
    const valid = useSelector(state => state.checkoutReducer.valid)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const clearCart = ()=>dispatch({type:"CLEAR_CART"})
    const handleForm = () => {
        if (valid) {
            props.action("success", "Order success", "Your bill is prepared")
            setTimeout(() => {
                clearCart()
                navigate("/")
            }, 4500);
        }
        else {
            props.action("error", "Order error", "Please fullfill your information carefully")
        }
    }
    return (
        <div>
            
            <h1 className='mb-2 text-lg'>Order Summary</h1>
            <Card bordered={true} style={{ width: 300 }}>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between'>
                        <p>Subtotal</p>
                        <p>${totalBill}.00</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Shipping</p>
                        <p>TBD</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Total</p>
                        <p>${totalBill}.00</p>
                    </div>
                        <button onClick={handleForm} className='bg-black block py-3 px-5 text-lg font-semibold text-white'>Continue</button>
                </div>
            </Card>
        </div>
    );
}
 
export default PreBillCheckout;