"use client"

import { Bell, Heart, ShoppingCart } from "lucide-react";
import Search from "../Search";
import Dropdown from "../Dropdown";
import MyLearningDropDown from "../MyLearningDropDown";
import Image from "next/image";
import ProfileMenu from "../profile/ProfileMenu";

export const Navbar = () => {

  return (
    <div className="flex-col">
      <div
        className="search container w-full flex items-center gap-5 px-1 py-2 bg-[#fff] leading-none"
        style={{ fontSize: "14px" }}
      >
        <Image src='/assets/logo/logo-udemy.svg' objectFit="cover" alt='udemy logo..' width={80} height={80}/>
        <div className="cursor-pointer">Categories</div>
        <Search placeholder="Search Course...." />
        <div className="hidden lg:flex">
          <Dropdown firstName="udemy" lastName="Business" />
        </div>
        <div className="hidden size-930:flex">
          <Dropdown firstName="Tech" lastName="Udemy" />
        </div>
        <div><MyLearningDropDown firstName="My"  lastName="Learning" /></div>
        <div className="flex justify-center items-center gap-5">
          <div className="cursor-pointer">
            <Heart />
          </div>
          <div className="cursor-pointer">
            <ShoppingCart />
          </div>
          <div className="curosr-pointer">
            <Bell />
          </div>
          <div className="cursor-pointer"><ProfileMenu/></div>
        </div>
      </div>
    </div>
  );
};



