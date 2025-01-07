import Shopnav from "./Shopnav";
import { ChevronRight, FacebookIcon, LinkedinIcon, Star, XIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";


export default function Singlepro() {
  return (
    <div className="max-w-7xl mx-auto ">
        
      {/* <div>
        <Shopnav />
      </div>
      <div className="">
        <p className="p-5 space-x-3">
          <span className="inline-block font-medium text-[#9F9F9F]">Home</span>
          <span className="inline-block">
            <ChevronRight className="inline-block" />
          </span>
          <span className="inline-block font-light text-[#9F9F9F]">Shop</span>
          <span>
            <ChevronRight className="inline-block" />
          </span>{" "}
          <span className="text-3xl text-[#9F9F9F]">|</span>{" "}
          <span>Asgaard sofa</span>
        </p>
      </div>
      {/* main part */}
      {/* <div className="grid grid-cols-3 "> */}
        {/* colum 1  es main 4 rows images han jo side par hn */}
        {/* <div className="grid grid-rows-4 gap-7 w-20  ">

            <div className="">
          <div>
            <Image
              src={"/Singlepro/Group 94.png"}
              height={76}
              width={80}
              alt="image"
              className="bg-[#FFF9E5]"
            />
          </div>
          <div>
            <Image
              src={"/Singlepro/Group 98.png"}
              height={76}
              width={80}
              alt="image"
              className="bg-[#FFF9E5]"
            />
          </div>
          <div>
            <Image
              src={"/Singlepro/Group 97.png"}
              height={76}
              width={80}
              alt="image"
              className="bg-[#FFF9E5]"
            />
          </div>
          <div>
            <Image
              src={"/Singlepro/Group 96.png"}
              height={76}
              width={80}
              alt="image"
              className="bg-[#FFF9E5]"
            />
          </div>
          </div>
        </div>
        {/* col-2 es ma sofa ki picture hn */}
        {/* <div className="h-[500px]  bg-[#FFF9E5] ">
          <Image
            src={"/Singlepro/Asgaard sofa 3.png"}
            height={391}
            width={450}
            alt="image"
            className=""
          />
        </div>
        <div> */} 
            {/* col-3 */}
          {/* <div>
            <h1 className="text-4xl">Asgaard sofa</h1>
            <p className="text-2xl text-[#9F9F9F] mt-3">Rs. 250,000.00</p>
            <p className="flex mt-4">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <span className="ml-4 text-xl text-[#9F9F9F]">|</span>
              <span className="ml-4 text-[#9F9F9F]">5 Customer Review</span>
            </p>
            <p className="mt-4">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <h3 className="mt-4">Size</h3>
            <div className="flex items-center gap-7 mt-3 text-center">
              <h1 className="bg-[#FBEBB5] w-8 h-8 rounded-md ">L</h1>
              <h1 className="bg-[#FFF9E5] w-8 h-8 rounded-md">XL</h1>
              <h1 className="bg-[#FFF9E5] w-8 h-8 rounded-md">XS</h1>
            </div>
            <h3 className="mt-4">Color</h3>
            <div className="flex gap-7 mt-3">
              <h1 className="bg-[#816DFA] w-8 h-8 rounded-full "></h1>
              <h1 className="bg-[#000000] w-8 h-8 rounded-full"></h1>
              <h1 className="bg-[#CDBA7B] w-8 h-8 rounded-full"></h1>
            </div>
            <div className="flex gap-5 mt-6">
              <div className="w-28 h-16 border border-[#9F9F9F] rounded-lg flex justify-center items-center gap-7">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <div className="">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="w-40 h-16 rounded-lg"
                >
                    Add To Cart
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full border border-[#9F9F9F] mt-10">

          </div>
          <div >
            <p className="mt-3"><span>SKU</span><span>:  SS001</span></p>
            <p className="mt-3"><span>Category</span><span>:  Sofas</span></p>
            <p className="mt-3"><span>Tags</span><span>:  Sofa, Chair, Home, Shop</span></p>
            <div >
            <p className=" mt-3"><span>Share</span><span >:  <FacebookIcon className="w-5 h-5"/></span> <span><LinkedinIcon className="w-5 h-5"/></span><span> <XIcon className="w-5 h-5"/></span></p>
            </div>
          </div>
          
        </div>

      </div> */} 
      <div><Shopnav /></div>
      <div className="">
        <p className="p-5 space-x-3">
          <span className="inline-block font-medium text-[#9F9F9F]">Home</span>
          <span className="inline-block">
            <ChevronRight className="inline-block" />
          </span>
          <span className="inline-block font-light text-[#9F9F9F]">Shop</span>
          <span>
            <ChevronRight className="inline-block" />
          </span>{" "}
          <span className="text-3xl text-[#9F9F9F]">|</span>{" "}
          <span>Asgaard sofa</span>
        </p>
      </div>
      <div className="grid grid-cols-3 ">
      <div className="flex flex-col">
      <div className=" justify-end">
          

            <div>
              <Image
                src={"/Singlepro/Group 94.png"}
                height={76}
                width={80}
                alt="image"
                className="bg-[#FFF9E5]"
              />
            </div>
            <div>
              <Image
                src={"/Singlepro/Group 96.png"}
                height={76}
                width={80}
                alt="image"
                className="bg-[#FFF9E5]"
              />
            </div>
            <div>
              <Image
                src={"/Singlepro/Group 97.png"}
                height={76}
                width={80}
                alt="image"
                className="bg-[#FFF9E5]"
              />
            </div>
            <div>
              <Image
                src={"/Singlepro/Group 98.png"}
                height={76}
                width={80}
                alt="image"
                className="bg-[#FFF9E5]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start -ml-[300px]">
        <div className="h-[500px] bg-[#FFF9E5] items-center flex">
          {/* Change path as per image folder */}
        <Image
            src={"/Singlepro/Asgaard sofa 3.png"}
            height={391}
            width={450}
            alt="image"
            className=""
          />
        </div>
        </div>
        <div className="-ml-[200px]">
          <div>
            <h1 className="text-4xl">Asgaard sofa</h1>
            <p className="text-2xl text-[#9F9F9F] mt-3">Rs. 250,000.00</p>
            <p className="flex mt-4">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <span className="ml-4 text-xl text-[#9F9F9F]">|</span>
              <span className="ml-4 text-[#9F9F9F]">5 Customer Review</span>
            </p>
            <p className="mt-4 text-balance">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <h3 className="mt-4">Size</h3>
            <div className="flex items-center gap-7 mt-3 text-center">
              <h1 className="bg-[#FBEBB5] w-8 h-8 rounded-md ">L</h1>
              <h1 className="bg-[#FFF9E5] w-8 h-8 rounded-md">XL</h1>
              <h1 className="bg-[#FFF9E5] w-8 h-8 rounded-md">XS</h1>
            </div>
            <h3 className="mt-4">Color</h3>
            <div className="flex gap-7 mt-3">
              <h1 className="bg-[#816DFA] w-8 h-8 rounded-full "></h1>
              <h1 className="bg-[#000000] w-8 h-8 rounded-full"></h1>
              <h1 className="bg-[#CDBA7B] w-8 h-8 rounded-full"></h1>
            </div>
            <div className="flex gap-5 mt-6">
              <div className="w-28 h-16 border border-[#9F9F9F] rounded-lg flex justify-center items-center gap-7">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <div className="">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="w-40 h-16 rounded-lg"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full border border-[#9F9F9F] mt-10"></div>
          <div>
            <p className="mt-3">
              <span>SKU</span>
              <span>: SS001</span>
            </p>
            <p className="mt-3">
              <span>Category</span>
              <span>: Sofas</span>
            </p>
            <p className="mt-3">
              <span>Tags</span>
              <span>: Sofa, Chair, Home, Shop</span>
            </p>
            <div className="mt-4 ">
              
                
                <div className="flex gap-x-3">
                <span>Share :</span>
                {/* <span className="">
                   <FacebookIcon className=""/>
                </span>{" "} */}
                <span>
                  <LinkedinIcon />
                </span>
                <span>
                  {" "}
                  <XIcon />
                </span>
                <span className="">
                   <FacebookIcon className=""/>
                </span>{" "}
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-[#9F9F9F] mt-5"></div>
      <div>
        <div className="flex justify-center space-x-20 mt-20">
            <h1 className="text-2xl">
            Description
            </h1>
            <h1 className="text-2xl text-[#9F9F9F]">
            Additional Information
            </h1>
            <h1 className="text-2xl text-[#9F9F9F]">
            Reviews [5]
            </h1>
            </div>
        <div className="max-w-5xl mx-auto  space-y-8 mt-5">
            <p className="text-[#9F9F9F]">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p className="text-[#9F9F9F] ">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className="grid grid-cols-2 mx-auto mt-5">
          <div className="flex justify-center"><Image
              src={"/Singlepro/Cloud sofa three seater + ottoman_2 1.png"}
              height={348}
              width={550}
              alt="image"
              className="bg-[#FFF9E5]"
            /></div>
          <div className="flex justify-center"><Image
              src={"/Singlepro/Cloud sofa three seater + ottoman_1 1.png"}
              height={348}
              width={550}
              alt="image"
              className="bg-[#FFF9E5]"
            /></div>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-4">
                <div className="text-center mb-4">

                  <h1 className="text-4xl font-medium mt-10">Related Product</h1>
                  
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
       {/* <Footer/> */}
    </div>
  );
}
