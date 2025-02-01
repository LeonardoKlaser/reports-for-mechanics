import "@/app/globals.css"
export interface buttonProps{
    label: string,
    style: string
}
export default function Button(props: buttonProps){
    const primary = "bg-primaryButton text-lg font-bold text-white w-300 h-16 px-4 py-2 rounded-xl"
    const secondary = "bg-secondaryButton text-lg font-bold text-white w-300 h-14 px-4 py-2 rounded-xl"
    return(
        <button className= {props.style === "primary" ? primary : secondary}>
        {props.label}
      </button>
    )
}