
import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from './ui/button';
import Link from 'next/link';
const Dropdown = ({firstName,lastName}:{firstName:string,lastName:string}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Link href={'/'} className='flex gap-1'>
            <span>{firstName}</span>
            <span>{lastName}</span>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="mt-8 bg-white">
        <div className="flex flex-col gap-4 p-1">
          <div className="text-[1.2rem] font-bold leading-normal mx-w-[40em]">
            Get your team access to over 25,000 top Udemy courses, anytime,
            anywhere.
          </div>
          <Button
            className="bg-black hover:bg-grey-500  text-white font-bold py-2 px-4 rounded shadow cursor-pointer font-sans"
            style={{ fontSize: "1rem" }}
          >
            Try Udemy Business
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default Dropdown;
