"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export const Hero = () => {


    const Arrays=[{
        url:'/hero.jpg'
    },
{
    url:'/hero_image_2.jpg'
},
{
    url:'/hero_image_3.jpg'
}]
  return (
    <div className="her0-content-wrapper flex-col">
         <div className="nav-container flex justify-center shadow-md relative" style={{borderTop:'1px solid #d1d7dc'}}>
             <ul className="flex p-3 text-sm">
                <li className="ud-nav-li">Development</li>
                <li className="ud-nav-li">Business</li>
                <li className="ud-nav-li">Finance & Accounting</li>
                <li className="ud-nav-li">IT Software</li>
                <li className="ud-nav-li">Office Productivity</li>
                <li className="ud-nav-li">Personal Development</li>
                <li className="ud-nav-li">Design</li>
                <li className="ud-nav-li">Marketing</li>
                <li className="ud-nav-li">Health & Fitness</li>
                <li className="ud-nav-li">Music</li>
             </ul>
         </div>
         <div className="w-full flex items-center justify-center">
             <Carousel className="w-[1350px]">
      <CarouselContent>
        {Arrays.map((val, index) => (
          <CarouselItem key={index} className="relative">
            <div className="p-1 w-full">
             <Image
             src={val.url}
             alt="image not found"
             width={800}
             height={800}
             style={{ width: '100%', height:'400px' }}
             objectFit="cover" 
             
        />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
       {/* <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-100000 bg-black rounded-full p-2 text-white" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-100000 bg-black rounded-full p-2 text-white" /> */}
          <CarouselPrevious className="absolute left-4 top-[200px] bg-black rounded-full p-2 text-white z-100000"/>
          <CarouselNext className="absolute right-4 top-[200px] bg-black rounded-full p-2 text-white z-100000"/>
        </Carousel>
         </div>
    </div>
  )
}


