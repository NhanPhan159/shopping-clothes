import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//self-define
import { IState } from '../reducers/cartReducers';

const PreBill = () => {
    const navigate = useNavigate()
    const totalBill = useSelector(state=>state.cartReducers.reduce((res:number,curr:IState)=>res + curr.data.price * curr.quantity,0))
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
                        <p>Estimated Tax</p>
                        <p>$0.00</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Total</p>
                        <p>${totalBill}.00</p>
                    </div>
                    {totalBill > 0
                        ? <button onClick={() => navigate("/checkout")} className='bg-[rgb(12,138,1)] block py-3 px-5 text-lg font-semibold text-white'>Proceed to checkout</button>
                        : <p className='block bg-slate-50 py-3 px-5 text-lg font-semibold text-black text-center border'>Your cart is item now</p>
                    }
                    </div>
            </Card>
        </div>
     );
}
 
export default PreBill;