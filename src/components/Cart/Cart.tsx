import Modal from "../UI/Modal"

import { type CartSliceState } from "../../store/cart-slice"
import Button from "../UI/Button";
import CartItem from "./CartItem";

type CartProps = {
    cartState: CartSliceState[];
    onCloseModal: () => void;
    onOpenCheckout: () => void;
    totalPrice: number
}

export default function Cart({ cartState, onCloseModal, onOpenCheckout, totalPrice }: CartProps) {

    const isCartEmpty = cartState.length === 0;

    return (
        <Modal onCloseModal={onCloseModal}>
            <h2 className="my-4 text-2xl font-bold">Your Cart</h2>
            {isCartEmpty && <p>Cart is empty</p>}
            <ul>
                {cartState.map((item) => <CartItem key={item.id} {...item} />)}
            </ul>
            <div className=" flex justify-end my-8 text-lg font-bold text-more-light-grey"><span>${totalPrice}</span></div>
            <div className="flex justify-end gap-4">
                <Button textOnly onClick={onCloseModal} className="text-dark-grey hover:text-light-grey">Cancel</Button>
                {!isCartEmpty && <Button onClick={onOpenCheckout}>Order</Button>}
            </div>
        </Modal>
    )
}