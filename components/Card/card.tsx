import Image from 'next/image'
import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export const Card = () => {
  return (
    <div className='max-w-xl'>
        <div className="relative w-full sm:w-[400px] md:w-[320px]  lg:w-[280px] h-[330px] xl:w-[280px] flex-col bg-white border-none cursor-pointer" style={{border:'2px solid #d1d7dc',borderRadius:'8px'}}>
          <a href="#">
            <Image className="rounded-t-lg" src="/card-image-1.jpg" alt="image not found" width={300} height={330} style={{width:'100%'}}/>
          </a>
          <div className="pt-2 pb-2 flex-col ml-4">
            <div className='card-description' style={{ fontSize: '1rem', fontWeight: '700', padding: "2px" }}>
              <h3>Learn C # Programming(In Ten Easy Steps)</h3>
            </div>
            <div className='card-instructor' style={{ fontSize: '.8rem', fontWeight: '400', padding: "2px" }}>
              <span>Bhanu Prakash</span>
            </div>
            <div className='card-rating flex'>
              <span>4.5</span>
              <div className="flex items-center">
                {/* Stars SVGs */}
              </div>
              <span>(1,696)</span>
            </div>
            <div className='card-price' style={{ fontSize: '1rem', fontWeight: '700', padding: '2px' }}>
              <span>$1000</span>
            </div>
          </div>
        </div>
  
    </div>
    
  );
};
