import { ArrowRight } from "lucide-react";
import Shopnav from "./Shopnav";
import Image from "next/image";
import { Button } from "./ui/button";

import Reuse_comp from "./Reuse_comp";

export default function Cart() {
  return (
    <div className="max-w-7xl mx-auto">
      <Shopnav />
      {/* 1st */}
      <div className=" flex justify-center items-center relative m-8">
        <div className="absolute">
          <Image
            src={"/Shophero/Meubel House_Logos-05.png"}
            height={77}
            width={77}
            alt="logo"
            className="ml-3 "
          />
          <h1 className="text-5xl font-medium ">Cart</h1>
          <p className="text-center ">
            <span className="inline-block font-medium">Home</span>
            <span className="inline-block">
              <ArrowRight className="pt-2" />
            </span>
            <span className="inline-block font-light">Cart</span>
          </p>
        </div>
        <div>
          <Image
            src={"/Shophero/Rectangle 1.png"}
            height={316}
            width={1440}
            alt="image"
          />
        </div>
      </div>
      {/* 2nd */}
      <div className="grid grid-cols-2 p-10">
        <div className="ml-16">
          <div className="flex justify-center items-center bg-[#FFF9E5] gap-24 p-2 ">
            <h3>Product</h3>
            <h3 className="">Price</h3>
            <h3 className="">Quantity</h3>
            <h3>Subtotal</h3>
          </div>
          <div className="flex justify-center items-center gap-24 mt-10">
            <div className="flex ">
              <Image
                src={"/Cart/Asgaard sofa 4.png"}
                height={92}
                width={130}
                alt="logo"
                className="bg-[#FBEBB5] "
              />
              <p className="mt-5 text-[#9F9F9F]"> Asgaard sofa</p>
            </div>
            <p className="text-[#9F9F9F]">Rs.250,000</p>
            <p className="border px-2 border-[#9F9F9F] rounded-md">1</p>
            <p>Rs.250,000</p>
          </div>
        </div>
        <div className="w-[393px] bg-[#FFF9E5]  ml-40 p-12">
          <h1 className="text-center font-semibold text-3xl">Cart Totals</h1>
          <div className="grid grid-cols-2 text-center">
            <div className="mt-16">
              <h1 className="font-medium">Subtotal</h1>
              <h1 className="font-medium mt-5">Total</h1>
            </div>
            <div className="mt-16">
              <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
              <p className="mt-5 text-[#B88E2F] text-xl">Rs. 250,000.00</p>
            </div>
          </div>
          <div className="flex justify-center mt-8 ">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-xl w-48 h-16 border text-xl border-[#000000]"
                >
                  Check Out
                </Button>
              </div>
        </div>
      </div>
      
          <Reuse_comp/>
    </div>
  );
}
