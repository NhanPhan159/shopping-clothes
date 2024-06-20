import CartItem from "../components/cartItem";
import PreBill from "../components/prebill";

const CartPage = () => {
    return ( 
        <div className="flex gap-10 mt-14">
            <CartItem/>
            <PreBill/>
        </div>
     );
}
 
export default CartPage;