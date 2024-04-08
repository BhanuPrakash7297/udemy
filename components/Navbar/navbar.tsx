"use client"


import { Bell, Heart, ShoppingCart } from "lucide-react";
import { Form,FormField,FormItem,FormLabel,FormControl,FormDescription,FormMessage} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { Separator } from "../ui/separator";
import Search from "../Search";
import Dropdown from "../Dropdown";
import MyLearningDropDown from "../MyLearningDropDown";

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

 

export const Navbar = () => {
   const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex-col">
      <div
        className="search container w-full flex items-center gap-5 px-3 py-2 bg-[#fff] leading-none"
        style={{ fontSize: "14px" }}
      >
        <div>Udemy CLone</div>
        <div>Categories</div>
        <Search placeholder="Search Course...." />
        <div>
          <Dropdown firstName="udemy" lastName="Business" />
        </div>
        <div>
          <Dropdown firstName="Tech" lastName="Udemy" />
        </div>
        <div><MyLearningDropDown firstName="My"  lastName="Learning" /></div>
        <div className="flex justify-center items-center gap-5">
          <div>
            <Heart />
          </div>
          <div>
            <ShoppingCart />
          </div>
          <div>
            <Bell />
          </div>
          <div>Profile</div>
        </div>
      </div>
    </div>
  );
};
