import React from "react";
import { Search,Moon,ChevronDown,LayoutGrid,Bell} from "lucide-react"; 

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
          <div className=" flex items-center px-2 ">
            <p>Mega Menu </p>
            <ChevronDown className="pt-1" size={20} strokeWidth={2.25} />
          </div>
          <div className=" flex items-center px-2 ">
            <p>App </p>
            <ChevronDown className="pt-1" size={20} strokeWidth={2.25} />
          </div>
        </div>
        <div className="flex justify-center gap-2">
            <div className="px-1.5">
                <Moon />
            </div>
            <div className="px-1.5">
                <LayoutGrid />
            </div>
            <div className="px-1.5">
                <Bell strokeWidth={2.5} />
            </div>
            <div className="px-1.5"></div>
            <div className="px-1.5"></div>
            <div className="px-1.5"></div>
            <div>
                <p>EN</p>
            </div>
            <div>
                <div>
                    <p>|</p>
                </div>
                <div>
                    <div></div>
                    <div>
                        <div>
                            <h5>David Dev</h5>
                            <span>Admin Head</span>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbarone;
