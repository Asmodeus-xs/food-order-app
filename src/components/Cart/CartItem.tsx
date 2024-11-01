import { useStoreDispatch } from "../../store/store-hooks"
import { cartActions } from "../../store/cart-slice"

type CartItemProps = {
    name: string;
    price: string;
    amount: number;
    id: string
}


export default function CartItem({ name, price, amount, id }: CartItemProps) {

    const cartDispatch = useStoreDispatch()

    const buttonStyle = "rounded-[50%] text-base w-6 h-6 border-none bg-light-grey text-orange flex justify-center items-center hover:bg-dark-grey hover:text-dark-orange"




    return (
        <li className=" flex justify-between items-center my-2">
            <p className="m-0">{`${name} - ${amount} x ${price}`}</p>
            <div className="flex items-center gap-2 text-center">
                <button className={buttonStyle} onClick={() => { cartDispatch(cartActions.removeFromCart(id)) }}>-</button>
                <span className="w-4">{amount}</span>
                <button className={buttonStyle} onClick={() => { cartDispatch(cartActions.addToCart({ name, price, amount, id })) }}>+</button>
            </div>
        </li>
    )
}