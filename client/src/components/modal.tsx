import { useState } from 'react';
import { Button, Modal, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';

//self-define
import { IState } from '../reducers/cartReducers';
import { IProduct } from './productItem';
import "../modal.css"

const ModalCustom = (props: IProduct) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()
    const addCart = (data:IState) => dispatch({type: "ADD_CART",data:data})

    const onChange = (value: number|null) => {
        value &&setQuantity(value)
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return ( 
        <>
            <Button type='primary' onClick={showModal}>
                Quick Shop
            </Button>
            <Modal className="modal" title="Basic Modal" width={700} open={isModalOpen}  onCancel={handleCancel}>
                <div className='flex gap-3'>
                    <img className='w-[300px] h-[450px]' src={props.data.imgSrc} alt="" />
                    <div className=''>
                        <h1 className='text-2xl'>{ props.data.name}</h1>
                        <p className='text-lg mb-4'>${props.data.price}.00</p>
                        <p className='text-sm text-slate-400'>Description</p>
                        <p className='text-lg'>{ props.data.description}</p>
                        <hr className='mb-32 mt-3'/>
                        <div className='flex gap-4 items-center'>
                            <p>Quantity:</p>
                            <InputNumber size="large" min={1} max={100000} defaultValue={quantity} onChange={onChange} />
                            <button
                                onClick={() => {
                                    addCart({ ...props, quantity: quantity })
                                    props.action()
                                    handleCancel()
                                }
                                }
                                className='flex-1 py-2 px-5 text-xl font-semibold text-white hover:bg-opacity-75 bg-black'>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
     );
}
 
export default ModalCustom;