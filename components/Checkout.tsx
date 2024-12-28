import { ArrowRight, Dot } from "lucide-react";
import Image from "next/image";
import Shopnav from "./Shopnav";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import Footer from "./Footer";
import Reuse_comp from "./Reuse_comp";

export default function Checkout() {
  return (
    <div className="max-w-7xl mx-auto">
      <Shopnav />
      <div className=" flex justify-center items-center relative m-8">
        <div className="absolute">
          <Image
            src={"/Shophero/Meubel House_Logos-05.png"}
            height={77}
            width={77}
            alt="logo"
            className="ml-16 "
          />
          <h1 className="text-5xl font-medium ">Checkout</h1>
          <p className="text-center ">
            <span className="inline-block font-medium">Home</span>
            <span className="inline-block">
              <ArrowRight className="pt-2" />
            </span>
            <span className="inline-block font-light">Shop</span>
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
      {/* form */}
      <div className="mt-20 py-14">
        <div className="grid grid-cols-2 ">
          <div className="ml-[200px]">
            <h1 className="text-4xl font-semibold">Belling details</h1>
            <div className="mt-5 flex">
              <label className="text-sm">First Name</label>
              <Input className="w-[120px] h-12 border border-[#9F9F9F] mt-4" />
              <label className="text-sm">Last Name</label>
              <Input className="w-[120px] h-12 border border-[#9F9F9F] mt-4" />
            </div>
            <div className="mt-5">
              <label className="text-sm">Company Name (Optional)</label>
              <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
            </div>
            <div className="mt-5">
              <label className="text-sm">Country / Region</label>
              <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
            </div>
            <div className="mt-5">
              <label className="text-sm">Street address</label>
              <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
            </div>
            <div className="mt-5">
              <label className="text-sm">Town / City</label>
              <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
            </div>
            <div className="mt-5">
              <label className="text-sm">Province</label>
              <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
            </div>
            <div className="mt-5">
              <label className="text-sm">ZIP code</label>
              <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
            </div>
            <div className="mt-5">
              <label className="text-sm">Phone</label>
              <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
            </div>
            <div className="mt-5">
              <label className="text-sm">Email address</label>
              <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
            </div>
            <div className="mt-8">
              <label></label>
              <Input
                placeholder="Additional information"
                className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
              />
            </div>
          </div>
          {/* col2 */}
          <div className="ml-[100px]">
            <div className="grid grid-cols-2">
              <div>
                <h1 className="text-2xl font-semibold">Product</h1>
                <p className="text-[#9F9F9F] mt-5">
                  Asgaard sofa <span className="text-[#000000]">X 1</span>
                </p>
                <p className="text-sm mt-5">Subtotal</p>
                <p className="text-sm mt-5">Total</p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Subtotal</h1>
                <p className="text-sm mt-5">Rs. 250,000.00</p>
                <p className="text-sm mt-5">Rs. 250,000.00</p>
                <p className="text-2xl mt-5 font-semibold text-[#B88E2F]">
                  Rs. 250,000.00
                </p>
              </div>
            </div>
            <div className="w-full border border-[#9F9F9F] mt-8"></div>
            <div className="mt-5">
              <div className="flex gap-2">
                <p className="bg-black rounded-full w-3 h-3 mt-1.5"></p>

                <h1 className=""> Direct Bank Transfer</h1>
              </div>
              <div className="mt-5">
                <p className="text-balance">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
              <div className="flex gap-2 mt-5">
                <p className="border border-[#9F9F9F] rounded-full w-3 h-3 mt-1.5"></p>

                <h1 className=""> Direct Bank Transfer</h1>
              </div>
              <div className="flex gap-2 mt-3">
                <p className="border border-[#9F9F9F] rounded-full w-3 h-3 mt-1.5"></p>

                <h1 className=""> Cash On Delivery</h1>
              </div>
              <div className="mt-5">
                <p className="text-balance">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-bold">privacy policy.</span>
                </p>
              </div>
              <div className="flex justify-center mt-8 ">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-xl w-56 mr-10 h-12 border border-[#000000]"
                >
                  Place order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reuse_comp/>
    </div>
  );
}
