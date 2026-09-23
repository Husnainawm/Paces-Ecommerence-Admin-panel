import React from "react";
import { Search,Moon,ChevronDown,LayoutGrid,Bell, Maximize, Palette, Settings} from "lucide-react"; 

const Navbarone = () => {
  return (
    <>
      <div className="flex fixed top-0 w-full h-16.5 bg-backCol px-5">
        <div className="w-full flex items-center gap-7">
          <div className="flex justify-center gap-1 w-56 border-0 rounded-3xl h-8 items-center bg-[#2e2d3c]">
            <div>
              <Search size={16} strokeWidth={2.5} />
            </div>
            <input
              className="rounded, bg-[#2E2D3C] w-40 outline-none [&::-webkit-search-cancel-button]:invert "
              type="search"
              placeholder="Quick Search..."
            />
          </div>
          <div className=" flex items-center px-2 hover:text-white ">
            <p>Mega Menu </p>
            <ChevronDown className="pt-1" size={20} strokeWidth={2.25} />
          </div>
          <div className=" flex items-center px-2  hover:text-white">
            <p>App </p>
            <ChevronDown className="pt-1" size={20} strokeWidth={2.25} />
          </div>
        </div>
        <div className="flex justify-center gap-3 items-center">
            <div className="px-1.5 hover:text-white">
                <Moon />
            </div>
            <div className="px-1.5 hover:text-white">
                <LayoutGrid />
            </div>
            <div className="px-1.5 hover:text-white">
                <Bell strokeWidth={2.5} />
            </div>
            <div className="px-1.5 hover:text-white">
                <Maximize strokeWidth={2.5} />
            </div>
            <div className="px-1.5 hover:text-white">
                <Palette strokeWidth={2.5} />
            </div>
            <div className="px-1.5 animate-spin hover:text-white">
                <Settings strokeWidth={2.5} />
            </div>
            <div className="flex w-13 gap-2 items-center">
                <img className="h-5 w-5 objectcover rounded-full" src="src\assets\Flags\us.svg" />
                <p className="hover:text-white">EN</p>
            </div>
            <div className="flex gap-5 items-center">
                <div>
                    <p>|</p>
                </div>
                <div className="flex items-center">
                    <div className="w-10 h-8 pr-2">
                        <img className="object-cover rounded-full" src=".\src\assets\user-1.jpg" />
                    </div>
                        <div className=" w-18">
                            <h5 className="text-sm">David Dev</h5>
                            <p className="text-[12px] hover:text-white">Admin Head</p>
                        </div>
                        <div className="flex items-center">
                            <ChevronDown className="pt-1" size={20} strokeWidth={2.25} />
                        </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbarone;
