import { useStoreDispatch } from "../../store/store-hooks"
import { cartActions } from "../../store/cart-slice";

import Button from "../UI/Button";


export type MealType = {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
}


export default function Meal({ id, name, price, description, image }: MealType) {


    const dispatch = useStoreDispatch()

    const formatter = Intl.NumberFormat("en-us", { style: "currency", currency: "USD", })

    function handleAddToCart() {

        const cartItem = {
            id,
            name,
            price,
            amount: 0
        }

        dispatch(cartActions.addToCart(cartItem))

    }

    return (
        <div className=" bg-dark-grey rounded-2xl overflow-hidden text-center shadow-custom">
            <article className="h-full flex flex-col items-center justify-between">
                <img className="w-full h-80 object-cover" src={image} alt="meal image" />
                <h3 className="text-2xl font-bold my-3">{name}</h3>
                <p className=" inline-block bg-light-grey text-orange text-[0.9rem] font-bold py-2 px-8 m-0 rounded">{formatter.format(+price)}</p>
                <p className="m-4">{description}</p>
                <div className=" mb-6">
                    <Button onClick={handleAddToCart}>Add to cart</Button>
                </div>
            </article>
        </div>
    )
}