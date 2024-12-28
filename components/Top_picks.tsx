import Image from "next/image";
import { Button } from "./ui/button";

export default function Top_picks() {
  return (
    <div>
      <div className="container mx-auto py-5">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-medium mt-10">Top Picks For You</h1>
          <p className="text-sm text-[#9F9F9F] mt-3">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
        <div className="grid grid-cols-4 mt-16 mx-auto gap-2 ml-20">
          <div>
            <Image
              src={"/Top-picks/M1.png"}
              height={200}
              width={200}
              alt="table"
            />
            <div>
              <p className=" w-56 text-sm">Trenton modular sofa_3</p>
              <h1 className="font-medium text-xl mt-3">Rs. 25,000.00</h1>
            </div>
          </div>
          <div className="mt-10">
            <Image
              src={"/Top-picks/G2.png"}
              height={200}
              width={200}
              alt="table"
            />
            <div className="mt-5">
              <p className=" w-56 text-sm">Granite dining table with dining chair</p>
              <h1 className="font-medium text-xl mt-3">Rs. 25,000.00</h1>
            </div>
          </div>
          <div>
            <Image
              src={"/Top-picks/M3.png"}
              height={200}
              width={200}
              alt="table"
            />
            <div>
              <p className=" w-48 text-sm">Outdoor bar table and stool</p>
              <h1 className="font-medium text-xl mt-3">Rs. 25,000.00</h1>
            </div>
          </div>
          <div>
            <Image
              src={"/Top-picks/M4.png"}
              height={200}
              width={200}
              alt="table"
            />
            <div>
              <p className=" w-48 text-sm">Plain console with teak mirror</p>
              <h1 className="font-medium text-xl mt-3">Rs. 25,000.00</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
            <Button variant={"link"} size={"icon"} className=" ml-4 font-semibold mt-5 ">
                    View More
            </Button>
        </div>
      </div>
    </div>
  );
}
