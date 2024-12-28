import Image from "next/image";
import { Button } from "./ui/button";

export default function Instagram() {
  return (
    <div className=" flex items-center justify-center relative">
      
        <div className="text-center absolute">
        
        <h1 className="text-6xl font-bold ">Our Instagram</h1>
        <p className="mt-3">Follow our store on Instagram</p>
        <Button className="bg-[#FAF4F4] text-black rounded-3xl drop-shadow-xl w-40 mt-3 hover:text-white">
          Follow Us
        </Button>
        
        </div>
      

      <div>
        <Image
          src="/Instagram/Rectangle 17.png"
          alt="Instagram Section Image"
          width={1440}
          height={450}
          className="object-cover"
        />
      </div>
    </div>
  );
}
