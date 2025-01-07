import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Shophero() {
    return(
        <div className="mx-auto max-w-7xl flex justify-center items-center relative m-8">
            <div className="absolute">
                <Image src={'/Shophero/Meubel House_Logos-05.png'} height={77} width={77} alt="logo" className="ml-3"/>
                <h1 className="text-5xl font-medium ">Shop</h1>
                <p ><span className="inline-block font-medium">Home</span><span className="inline-block"><ArrowRight className="pt-2"/></span><span className="inline-block font-light">Shop</span></p>
            </div>
            <div>
            <Image src={'/Shophero/Rectangle 1.png'} height={316} width={1440} alt="image" />
            </div>
        </div>
    )
}