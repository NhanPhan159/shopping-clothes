import { notification } from "antd";

//self-define
import FormCheckout from "../components/formCheckout";
import PreBillCheckout from "../components/prebillcheckout";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Checkout = () => {
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type: NotificationType, message: string, description: string) => {
        api[type]({
            message: message,
            description: description
        });
    };
    return ( 
        <>
            {contextHolder}
            <div className="flex mt-20 gap-20">
                <div className="grow-[2]">
                    <FormCheckout/>
                </div>
                <div className="grow-[1] flex justify-center">
                    <PreBillCheckout action={openNotificationWithIcon}/>
                </div>
            </div>
        </>
     );
}
 
export default Checkout;