import React, { useState } from "react";
import logo from "./../assets/images/logo-d-plus.svg";
import login from "./../assets/images/user-3296.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlus,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";

import {HiDotsVertical} from "react-icons/hi"
import HeaderItem from "./HeaderItem";

const Header = () => {
    const [toggle, setToggle] = useState(false)
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="logo"
          className="w-[60px] md:w-[80px] object-cover"
        />
        <div className="hidden md:flex gap-4">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-5">
          {menu.map((item,index) => index<3&& (
            <HeaderItem name={''} Icon={item.icon} />
          ))}
          <div onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle ? <div className="absolute border border-gray-500 mt-4 p-4 rounded-xl">
                {menu.map((item,index) => index>2&& (
                <HeaderItem name={item.name} Icon={item.icon} />
                ))}
            </div> :null}           
          </div>
        </div>
      </div>
      <img src={login} alt="" className="bg-white rounded-full w-[40px]" />
    </div>
  );
};

export default Header;
