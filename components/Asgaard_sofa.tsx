import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export default function Asgaard () {
    return(
        <div className="grid grid-cols-2 container mx-auto bg-[#FFF9E5]">
            <div className="flex justify-start items-center">
            <Image
              src={"/Asgaard sofa/A1.png"}
              height={800}
              width={800}
              alt="table"
              className="ml-40"
            />
            </div>
            <div className="flex justify-center items-center">
                <div className="ml-20">
                <p className="text-2xl font-medium text-center">New Arrivals</p>
                <h1 className="text-5xl font-bold">Asgaard sofa</h1>
                <Button variant={"outline"}  className=" text-lg w-60 font-light ml-8 h-14 mt-3 hover:bg-[#FBEBB5]"> <Link href="/OrderProduct">
                    Order Now
                    </Link>
                </Button>
                </div>
            </div>
        </div>
    )
}