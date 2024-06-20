import Browser from "../components/browse";
import Products from "../components/products";
import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/all-products');
    return await response.json();
};
export const fetchProductsCategory = async ({ params }) => {
    const response = await fetch(`http://localhost:3000/products/${params.category}`);
    return await response.json();
};

const ProductPage = () => {
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Add success',
            description:
                'Your item is added to cart',
            duration: 1.5,
        });
    };
    

    const NotificationAddCart = () => {
        openNotificationWithIcon("success")
    }
    return ( 
        <>
            {contextHolder}
            <div className='mt-7 flex gap-8'>
                <Browser />
                <Products action={NotificationAddCart}/>
            </div>
        </>
     );
}
 
export default ProductPage;