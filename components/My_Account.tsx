import { ArrowRight } from "lucide-react";
import Shopnav from "./Shopnav";
import Image from "next/image";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import Footer from "./Footer";
import Reuse_comp from "./Reuse_comp";

export default function My_Account() {
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
            className="ml-20 "
          />
          <h1 className="text-5xl font-medium ">My Account</h1>
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
            <h1 className="text-4xl font-semibold">Login</h1>
            <div className="mt-5">
              <label className="text-sm">Username or email address</label>
              <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
            </div>
            <div className="mt-5">
              <label className="text-sm">Password</label>
              <Input
                type="password "
                className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
              />
            </div>
            <div className="flex mt-5 gap-3">
              <Checkbox className="" />
              <label htmlFor="" className="text-sm">
                Remember me
              </label>
            </div>
            <div className="flex gap-5 mt-10">
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-xl w-40 h-12 border border-[#000000]"
              >
                Log In
              </Button>
              <p className="pt-4 text-sm text-[#9F9F9F]">Lost Your Password?</p>
            </div>
          </div>
          {/* col2 */}
          <div>
            <div className="ml-[100px]">
              <h1 className="text-4xl font-semibold">Register</h1>
              <div className="mt-5">
                <label className="text-sm ">Email address</label>
                <Input
                  type="email"
                  className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
                />
              </div>
              <div className="mt-5">
                <p>
                  A link to set a new password will be sent to your email
                  address.
                </p>
              </div>
              <div className=" mt-5 gap-3 ">
                <p className="text-balance">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-bold">privacy policy.</span>
                </p>
              </div>
              <div className="flex gap-5 mt-12">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-xl w-40 h-12 border border-[#000000]"
                >
                  Register
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
