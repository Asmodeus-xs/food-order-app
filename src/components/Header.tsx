import { FormEvent, useState } from "react";
import { useCartSelector, useStoreDispatch } from "../store/store-hooks";

import Button from "./UI/Button";
import logo from "../assets/logo.jpg"
import Cart from "./Cart/Cart";
import Checkout from "./Cart/Checkout";
import Result from "./Cart/Result";
import { cartActions } from "../store/cart-slice";


export type CheckoutSubmit = {
    name: string,
    mail: string,
    street: string,
    postal: string,
    city: string
}

export default function Header() {

    const [isCartOpen, setisCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isResultOpen, setIsResultOpen] = useState(false);

    const [submittedData, setSubmittedData] = useState<CheckoutSubmit>()

    const dispatch = useStoreDispatch()

    function handleCartClose() {
        setisCartOpen(false)
    }
    function handleOpenCart() {
        setisCartOpen(true)
    }

    function handleOpenCheckout() {
        handleCartClose();
        setIsCheckoutOpen(true);
    }
    function handleCloseCheckout() {
        setIsCheckoutOpen(false)
    }
    function handleCloseResult() {
        setIsResultOpen(false)
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData) as CheckoutSubmit
        setSubmittedData(data);
        setIsCheckoutOpen(false);
        setIsResultOpen(true);
        dispatch(cartActions.clearCart());
    }

    const cartState = useCartSelector(state => state.cart)

    const totalItemPrice = +cartState.reduce((acc, item) => acc + +item.price * item.amount, 0).toFixed(2)
    const totalItemAmount = cartState.reduce((acc, meal) => acc + meal.amount, 0)


    return (
        <header className="flex justify-between mx-2  py-12 px-[10%] items-center">
            <div className="flex gap-4 items-center">
                <img src={logo} alt="logo" className="w-16 h-16 rounded-[50%] border-2 border-orange" />
                <h1 className=" font-Lato font-bold text-[2rem] text-orange tracking-widest uppercase">React Food</h1>
            </div>
            <Button additonClass="font-Lato text-2xl" onClick={handleOpenCart} textOnly>Cart ({totalItemAmount})</Button>
            {isCartOpen && <Cart onCloseModal={handleCartClose} cartState={cartState} totalPrice={totalItemPrice} onOpenCheckout={handleOpenCheckout} />}
            {isCheckoutOpen && <Checkout totalPrice={totalItemPrice} onCloseModal={handleCloseCheckout} onSubmit={handleFormSubmit} />}
            {isResultOpen && <Result onModalClose={handleCloseResult} submittedData={submittedData} />}
        </header>
    )
}