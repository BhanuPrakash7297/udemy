'use client'


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "../Card/card"
 
export const SliderCourse = () => {
  return (
 <div className="slider-main-container mx-[10px] mw-[1200px]">
   <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 25 }).map((_, index) => (
          <CarouselItem key={index} className="sm:w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="flex justify-center"> {/* Center the content */}
    <Card /></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4" />
      <CarouselNext className="absolute right-5"/>
    </Carousel>
    
 </div>
  )
}
