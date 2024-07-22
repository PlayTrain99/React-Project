import { type ReactNode } from "react"

interface goalsImgProps{
    image:{
        src: string,
        alt: string
    }
    children: ReactNode
}

export default function Header({image, children}: goalsImgProps){
    return(
        <header>
            <img {...image}/>
            {children}
        </header>

    )
}