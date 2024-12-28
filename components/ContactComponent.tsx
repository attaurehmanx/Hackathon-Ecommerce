import Image from "next/image";
import Shopnav from "./Shopnav";
import {
  ArrowRight,
  Clock,
  LocateFixed,
  
  Phone,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Reuse_comp from "./Reuse_comp";

export default function Contact() {
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
            className="ml-10 "
          />
          <h1 className="text-5xl font-medium ">Contact</h1>
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
      <div className="p-10">
        <div className="text-center ">
          <h1 className="text-4xl font-semibold mt-10">Get In Touch With Us</h1>
          <div className="flex justify-center">
            <p className="text-sm text-[#9F9F9F] mt-3 text-center  w-96">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 p-10">
          {/* col1 */}
          <div className="ml-56">
            <div className="mt-7">
              <div className="flex gap-3">
                <LocateFixed />
                <h3 className="text-xl font-medium">Address</h3>
              </div>
              <p className="text-start w-40 text-sm">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>

            <div className="mt-7">
              <div className="flex gap-3">
                <Phone />
                <h3 className="text-xl font-medium">Phone</h3>
              </div>
              <p className="text-start w-40 text-sm">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>

            <div className="mt-7">
              <div className="flex gap-3">
                <Clock />
                <h3 className="text-xl font-medium">Working Time</h3>
              </div>
              <p className="text-start w-40 text-sm ">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
          {/* col2 */}
          <div>
            <div className="">
              <div className="mt-5">
                <label className="text-sm">Your Name</label>
                <Input
                  placeholder="abc"
                  className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
                />
              </div>
              <div className="mt-5">
                <label className="text-sm">Email address</label>
                <Input
                  placeholder="abc@defgmail.com"
                  className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
                />
              </div>
              <div className="mt-5">
                <label className="text-sm">Subject</label>
                <Input
                  placeholder="This an optional"
                  className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
                />
              </div>
              <div className="mt-5">
                <label className="text-sm">Message</label>
                <Input
                  placeholder="Message"
                  className="w-[323px] h-16 border border-[#9F9F9F] mt-4"
                />
              </div>
              <div className=" mt-8 ">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-xl w-56 mr-10 h-12 border border-[#000000]"
                >
                  Submit
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
