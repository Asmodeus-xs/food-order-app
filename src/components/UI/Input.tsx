import { ComponentProps } from "react"


type InputProps = {
    id: string;
    label: string;
} & ComponentProps<"input">

export default function Input({ id, label, ...props }: InputProps) {


    return (
        <div className=" flex flex-col my-2">
            <label className=" font-bold mb-2" htmlFor={id}>{label}</label>
            <input className="w-full max-w-80 p-2 rounded border border-solid border-[#ccc]" id={id} {...props} required />
        </div>
    )

}