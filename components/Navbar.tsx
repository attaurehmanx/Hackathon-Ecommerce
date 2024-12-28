import { Heart, Search, ShoppingCartIcon, UserCheck2Icon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"




export default function navbar()  {
    return(
        <div className=" flex items-center justify-between  bg-[#FBEBB5] border-b border-gray-200">
            <div className="max-w-7xl mx-auto p-5">
                <div className="flex gap-16 font-semibold text-base">
                <Link href="/">Home</Link>
                <Link href="/Shop">Shop</Link>
                <Link href="/Blogs">About</Link>
                <Link href="/Contact">Contact</Link>
                </div>
                
            </div>

            <div className="flex gap-8 mr-16">

                <Button variant={"ghost"} size={"icon"} className="rounded-full">
                    <Link href="/Account">
                    <UserCheck2Icon />
                    </Link>
                    </Button>
                <Button variant={"ghost"} size={"icon"} className="rounded-full">
                    <Search/>
                    </Button>
                <Button variant={"ghost"} size={"icon"} className="rounded-full">
                    <Link href={"/CheckOuts"}>
                    <Heart />
                    </Link>
                    </Button>
                <Button variant={"ghost"} size={"icon"} className="rounded-full">
                    <Link href={"/Cart"}>
                    <ShoppingCartIcon/>
                    </Link>
                    </Button>
            </div>
        </div>
    )
}