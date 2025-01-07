 import { Input } from "./ui/input";
 import { Button } from "./ui/button";


 export default function Footer() {
   return (
     <footer>
     <div className="grid grid-cols-4  mt-20 mx-auto gap-0">
       <div className="flex justify-center items-center ">
         <div>
           <p>400 University Drive Suite 200 Coral</p>
           <p>Gables,</p>
           <p>FL 33134 USA</p>
         </div>
       </div>
       
       <div className="flex justify-center items-center">
         <div>
             <h3 className="text-[#9F9F9F]">Link</h3>
             <ul>
           
           <li className=" pt-5 text-sm font-medium ">Home</li>
           <li className=" pt-5 text-sm font-medium ">Shop</li>
           <li className=" pt-5 text-sm font-medium ">About</li>
           <li className=" pt-5 text-sm font-medium ">Contact</li>
             </ul>
         </div>
       </div>
       <div className="flex justify-center items-center">
         <div>
             <h3 className="text-[#9F9F9F]">Help</h3>
         <ul>
           
           <li className=" pt-5 text-sm font-medium ">Payment Option</li>
           <li className=" pt-5 text-sm font-medium ">Return</li>
           <li className=" pt-5 text-sm font-medium ">Privacy Policies</li>
           
           </ul>
         </div>
       </div>
       <div className="flex justify-center items-center">
         <div>
             <h3 className="text-[#9F9F9F]">Newsletter</h3>
             <ul>
                 <li></li>
             </ul>
             <div className="flex items-center max-w-sm space-x-2 w-full">
             <Input type="email" placeholder="Email"/>
             <Button className="hover:bg-red-600 hover:text-white bg-white text-black border-b-2  ">Subscribe</Button>
             </div>
         </div>
       </div>
       
     </div>
     <div className="ml-9 mt-20 text-gray-600 border-t-2 mr-9 border-gray-500 my-4">
     <p className="mt-5">© 2022 Meubel House. All rights reserved.</p>
   </div>
   </footer>
    
   );
 }





{/* // import React from 'react';
// import Link from 'next/link';

// function Footer() { */}
{/* //   return (
//     <footer className="bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <p className="text-gray-700">
//               400 University Drive Suite 200 Coral Gables, FL 33134 USA
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Links</h3>
//             <ul>
//               <li>
//                 <Link className="text-gray-700 hover:text-gray-900" href="/Home">  Home
//                               </Link>
//               </li>
//               <li>
//                 <Link className="text-gray-700 hover:text-gray-900" href="/shop">Shop
//                               </Link>
//               </li>
//               <li>
//                 <Link className="text-gray-700 hover:text-gray-900" href="/about">About 
//                                </Link>
//               </li>
//               <li>
//                 <Link className="text-gray-700 hover:text-gray-900" href="/contact"> contact
                  
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Help</h3>
//             <ul>
//               <li>
//                 <Link  className="text-gray-700 hover:text-gray-900" href="/payment-options">
//                 payment-options
//                 </Link>
//               </li>
//               <li>
//                 <Link  className="text-gray-700 hover:text-gray-900" href="/returns">
//                 returns
//                 </Link>
//               </li>
//               <li>
//                 <Link  className="text-gray-700 hover:text-gray-900" href="/privacy-policies">
//                 privacy-policies
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Newsletter</h3>
//             <form>
//               <div className="flex"> */}
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email Address"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-gray-500"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-900"
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="text-center mt-8 text-gray-600">
//           <p>© 2022 Meubel House. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;