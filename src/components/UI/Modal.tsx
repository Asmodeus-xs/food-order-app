import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";


type ModalProps = {
    onCloseModal: () => void,
    children: ReactNode
}

export default function Modal({ onCloseModal, children }: ModalProps) {


    const modal = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        modal.current?.showModal()
    }, [])

    return createPortal(
        <dialog className="bg-creamy rounded-md border-none shadow-custom p-4 w-4/5 max-w-[40rem] animate-fade-slide-up" onClose={onCloseModal} ref={modal}>
            {children}
        </dialog>, document.getElementById("modal")!
    )
}