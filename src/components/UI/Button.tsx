import { ComponentProps } from "react"


type ButtonProps = {
    textOnly?: true;
    additonClass?: string
} & ComponentProps<"button">

export default function Button({ textOnly, children, additonClass, ...props }: ButtonProps) {


    if (textOnly) {
        return (<button className={`bg-transparent border-none text-orange hover:text-dark-orange ${additonClass ? additonClass : ""}`} {...props}>{children}</button>)
    }

    return (
        <button className="text-dark-grey bg-orange border border-orange hover:bg-dark-orange hover:border-dark-orange rounded py-2 px-6" {...props}>{children}</button>
    )
}