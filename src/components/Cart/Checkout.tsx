import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { type FormEvent, useRef } from "react";


type CheckoutPorps = {
    totalPrice: number;
    onCloseModal: () => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function Checkout({ totalPrice, onCloseModal, onSubmit }: CheckoutPorps) {

    const form = useRef<HTMLFormElement>(null)

    function handleCloseCheckout() {
        form.current?.reset()
        onCloseModal()
    }

    return (
        <Modal onCloseModal={handleCloseCheckout}>
            <form onSubmit={onSubmit} ref={form}>
                <h2 className="my-4 text-2xl font-bold">Checkout</h2>
                <p>{`Total Amount: $${totalPrice}`}</p>

                <Input id="name" name="name" type="text" label="Full Name" />
                <Input id="mail" name="mail" type="email" label="E-Mail Address" />
                <Input id="street" name="street" type="text" label="Street" />
                <div className=" flex justify-start gap-4">
                    <Input id="postal" name="postal" type="text" label="Postal Code" />
                    <Input id="city" name="city" type="text" label="City" />
                </div>
                <div>
                    <div className="flex justify-end gap-4">
                        <Button textOnly onClick={handleCloseCheckout} className="text-dark-grey hover:text-light-grey">Cancel</Button>
                        <Button>Order</Button>
                    </div>
                </div>
            </form>

        </Modal>
    )
}