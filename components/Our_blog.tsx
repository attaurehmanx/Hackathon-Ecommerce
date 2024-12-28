import Image from "next/image"
import { Button } from "./ui/button"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function Our_blog() {
    return(
        <div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-medium mt-10">Our Blogs</h1>
          <p className="text-sm text-[#9F9F9F] mt-3">
            Find a bright ideal to suit your taste with our great selection.
          </p>
        </div>
        <div className="grid grid-cols-3 mt-16 mx-auto gap-4 ml-15">
          <div>
            <Image
              src={"/Our Blog/Rectangle 13.png"}
              height={400}
              width={400}
              alt="table"
            />
            <div>
              <p className=" text-lg mt-3 text-center">Going all-in with millennial design</p>
              <div className="flex justify-center">             
              <Button variant={"link"} size={"icon"} className=" font-medium mt-2 text-xl">
                    Read More
            </Button>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
                <span>
            <Clock/>
            </span>
            <span>5 min</span>
            <span><Calendar/></span>
            <span>12<sup>th</sup> Oct 2022</span>
                
                </div>
            </div>
          </div>
          <div className="">
            <Image
              src={"/Our Blog/Rectangle 14.png"}
              height={400}
              width={400}
              alt="table"
            />
            <div>
              <p className=" text-lg mt-3 text-center">Going all-in with millennial design</p>
              <div className="flex justify-center">             
              <Button variant={"link"} size={"icon"} className=" font-medium mt-2 text-xl">
                    Read More
            </Button>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
                <span>
            <Clock/>
            </span>
            <span>5 min</span>
            <span><Calendar/></span>
            <span>12<sup>th</sup> Oct 2022</span>
                
                </div>
            </div>
          </div>
          <div>
            <Image
              src={"/Our Blog/Rectangle 15.png"}
              height={400}
              width={400}
              alt="table"
            />
            <div>
              <p className=" text-lg mt-3 text-center">Going all-in with millennial design</p>
              <div className="flex justify-center">             
              <Button variant={"link"} size={"icon"} className=" font-medium mt-2 text-xl">
                    Read More
            </Button>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
              
                <span>
            <Clock/>
            </span>
            <span>5 min</span>
            <span><Calendar/></span>
            <span>12<sup>th</sup> Oct 2022</span>
                
                </div>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-7">
            <Button variant={"link"} size={"icon"} className=" p-20 font-semibold  ">
              <Link href="/Blogs">
                    View All Post
              </Link>
            </Button>
        </div>
      </div>
    </div>
    )
}