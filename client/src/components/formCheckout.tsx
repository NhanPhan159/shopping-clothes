import { Input,Select } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//self-define
import { IStateValid } from '../reducers/checkoutReducer';

const FormCheckout = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch()

    const setValidDispatch = (data: IStateValid)=>dispatch({type: "SET_VALID",data:data})
    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }
    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const phoneChangeHandler = (e) => {
        setPhone(e.target.value)
    }
    const addressChangeHandler = (e) => {
        setAddress(e.target.value)
    }

    useEffect(() => {
        if (!!email && !!name && !!address && !!phone) {
            setValidDispatch({ valid: true })
        }
        else
            setValidDispatch({ valid: false }) 
    }, [email, name, address, phone])
    
    return ( 
        <>
            <form>
                <div className="border p-4 mb-5 border-slate-600">
                    <p className='mb-2 text-lg'>Checkout as a Guest</p>
                    <label>Your email</label>
                    <Input value={email} onChange={emailChangeHandler} className='w-[18.5rem]'/>
                </div>
                <div>
                <p className='mb-2 text-lg'>Delivery address</p>
                <div className='flex gap-4 mb-3 w-full'>
                    <div className='flex-1'>
                        <label htmlFor="FirstName">Your Name</label>
                        <Input value={name} onChange={nameChangeHandler}/>
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="Phone">Phone number</label>
                        <Input value={phone} onChange={phoneChangeHandler}/>
                    </div>
                </div>
                <div className='mb-3'>
                    <div>
                        <label htmlFor="Address">Address</label>
                        <Input value={address} onChange={addressChangeHandler}/>
                    </div>
                </div>
                </div>
            </form>
        </>
     );
}
 
export default FormCheckout;