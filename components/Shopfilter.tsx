import { AlignHorizontalSpaceAround, AlignVerticalSpaceAround, Filter, FilterIcon, FilterXIcon, LayoutGrid, ListFilter, LucideFilter, Menu, SlidersHorizontal } from "lucide-react";


export default function Shopfilter() {
    return (
         <nav className="mx-auto max-w-7xl p-5 bg-[#FAF4F4]">
                <div className="flex items-center justify-around ">
                    
                        <div className="flex gap-4">
                        <span>
                    <SlidersHorizontal/>
                    </span>
                    <span className="text-xl">Filter</span>
                    <LayoutGrid/>
                    <AlignVerticalSpaceAround/>
                    <span>|</span>
                    <span className="text-sm">Showing 1-16 of 32 results</span>
                    </div>
                    <div className="flex gap-3">
                    <span>show</span>
                     <span className="text-[#9F9F9F] bg-[#FFFFFF]">16</span>
                    <span>Short by</span>
                     <span className="text-[#9F9F9F] bg-[#FFFFFF]">Default </span>
                     </div>
                </div>
         </nav>
    )
}