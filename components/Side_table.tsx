import Image from "next/image";
import { Button } from "./ui/button";
export default function Side_table() {
  return (
    <div className="bg-[#FAF4F4] h-[500px] grid grid-cols-2 items-center mx-auto ">
      <div className="relative">
        <Image src={"/table.png"} height={500} width={500} alt="table" />
        <div className="absolute bottom-2 left-0   p-4 text-center">
          <h1 className="ml-32 text-4xl font-medium">Side table </h1>
          <Button
            variant={"link"}
            size={"icon"}
            className=" ml-12 font-semibold shadow-2xl shadow-black"
          >
            View more
          </Button>
        </div>
      </div>

      <div className="">
        <div className="relative">
        <Image src={"/Cloud sofa.png"} height={500} width={500} alt="table" />
        <div className="absolute bottom-0 left-0 right-0   p-4 ">
        <h1 className="ml-32 text-4xl font-medium">Side table </h1>
        <Button
          variant={"link"}
          size={"icon"}
          className=" ml-[152px] font-semibold  "
        >
          View more
        </Button>
        
        </div>
        </div>
      </div>
    </div>
  );
}
