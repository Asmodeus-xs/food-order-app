import { type CheckoutSubmit } from "../Header";
import Button from "../UI/Button"
import Modal from "../UI/Modal"



type ResultProps = {
    onModalClose: () => void;
    submittedData: CheckoutSubmit | undefined
}

export default function Result({ onModalClose, submittedData }: ResultProps) {



    return (
        <Modal onCloseModal={onModalClose}>
            <h2 className="my-4 text-2xl font-bold">Success!!!</h2>
            <p className="my-2">Your order was submitted successfully.</p>
            <p className="my-2">We will get beck to you with more details via email within the next few minutes</p>

            {
                submittedData && <div>
                    <h2 className="my-4 text-2xl font-bold">Your submitted info</h2>
                    <p>{`Name: ${submittedData.name}`}</p>
                    <p>{`Mail: ${submittedData.mail}`}</p>
                    <p>{`Street: ${submittedData.street}`}</p>
                    <p>{`Postal: ${submittedData.postal}`}</p>
                    <p>{`City: ${submittedData.city}`}</p>
                </div>
            }


            <div className="flex justify-end">
                <Button onClick={onModalClose}>Okay</Button>
            </div>
        </Modal>
    )
}