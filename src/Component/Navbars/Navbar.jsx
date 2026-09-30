import React from "react";
import {
  Search,
  Palette,
  Settings,
  CircleDot,
  Menu
} from "lucide-react";
import MegaMenu from "./MegaMenu";
import AppsMenu from "./AppMenu";
import LanguageMenu from "./LanguageMenu";
import ProfileMenu from "./ProfileMenu";
import ThemeMenu from "./ThemeMenu";
import GridMenu from "./GrifMenu";
import NotificationMenu from "./NotificationMenu";
import { useState, useEffect } from 'react'
import FullscreenToggle from "./FullScreen";
import LogoIcon from '../../assets/paces-logo-icon.png'

const Navbarone = ({ onMenuClick }) => {

  const [isMono, setIsMono] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('mono-mode', isMono)
  }, [isMono])



  return (
    <>
      <div className="w-full h-16.5 grid grid-cols-[68px_auto] lg:grid-cols-[245px_auto] fixed top-0 z-50">
        <div className="w-17 lg:w-61.25 px-5 h-16.5 flex items-center justify-between bg-[#1e1f27]">
          <img className="w-22 hidden lg:block" src="public\logo.png" />
          <img className="flex lg:hidden" src={LogoIcon} alt="" />
          <CircleDot className="hidden lg:flex hover:text-white" strokeWidth={3} size={20} />
        </div>
        <div className="flex flex-1 top-0 right-0 h-16.5 bg-backCol px-5">
          <div className="w-full flex items-center gap-3 lg:gap-7">
            <button
              onClick={onMenuClick}
              className="lg:hidden self-center mr-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0"
            >
              <Menu size={18} />
            </button>
            <div className=" hidden lg:flex justify-center gap-1 w-56 border-0 rounded-3xl h-8 items-center bg-[#2e2d3c]">
              <div>
                <Search size={16} strokeWidth={2.5} />
              </div>
              <input
                className="rounded, bg-[#2E2D3C] w-40 outline-none [&::-webkit-search-cancel-button]:invert "
                type="search"
                placeholder="Quick Search..."
              />
            </div>
            <MegaMenu />
            <AppsMenu />
          </div>
          <div className="flex justify-center gap-3 items-center">
            <ThemeMenu />
            <GridMenu />
            <NotificationMenu />
            <FullscreenToggle />
            <button onClick={() => setIsMono(!isMono)} className="px-1.5 hover:text-white hidden sm:flex">
              <Palette strokeWidth={2.5} />
            </button>
            <div className="px-1.5 animate-spin hover:text-white hidden sm:flex">
              <Settings strokeWidth={2.5} />
            </div>

            <div className="flex gap-5 items-center">
              <LanguageMenu />
              <div>
                <p>|</p>
              </div>
              <ProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbarone;
