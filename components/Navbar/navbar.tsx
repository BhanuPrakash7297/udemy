"use client"


import { Bell, Heart, Search, ShoppingCart } from "lucide-react";
import { Form,FormField,FormItem,FormLabel,FormControl,FormDescription,FormMessage} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

 

export const Navbar = () => {
   const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
<div className="flex-col">
    <div className="search container w-full flex items-center justify-between p-3"> 
    <span>Udemy CLone</span>
    <span>Categories</span>
         <form className="flex items-center border border-gray-300 p-4 w-[610px] h-[46px]" style={{borderRadius:'9999px', backgroundColor:'#f7f9fa'}}>
            <button type="submit" className="px-4 py-2 rounded-md">
       <Search></Search>
      </button>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        className="px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
        style={{backgroundColor:'transparent'}}
      />
      
    </form>
    <span>Udemy business</span>
    <span>Tech on Udemy</span>
    <span>My Learning</span>

    <span><ShoppingCart/></span>
    <span><Bell></Bell></span>
    <span><Heart></Heart></span>
    <span>Profile</span>
    </div>
</div>
  );
};
