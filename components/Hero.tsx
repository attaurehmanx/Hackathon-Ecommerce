import Image from "next/image"
import { Button } from "./ui/button"
export default function Hero () {
    return (
        <div className="h-[800px] bg-[#FBEBB5] grid grid-cols-2 items-center ">
            <div className="ml-60">
                <h1 className="font-medium text-6xl">Rocket single</h1>
                <h1 className="font-medium text-6xl">seater</h1>
                <Button variant={"link"} size={"icon"} className=" ml-4 font-semibold ">
                    Shop Now
                    </Button>
            </div>
            <div>
                <Image src={"/sofa.png"} height={500} width={800} alt="sofa"/>
                </div>
        </div>
    )
}