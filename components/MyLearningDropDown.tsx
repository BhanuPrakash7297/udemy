import React from 'react'
import { Separator } from "@/components/ui/separator";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import Link from 'next/link';
import Image from 'next/image';
import { PurchasedCourses } from '@/constants';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const MyLearningDropDown = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
    const router=useRouter();
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

 const onClick = () => {
   return router.push(`/${firstName}-${lastName}`);
 };

  return (
    <HoverCard>
      <HoverCardTrigger>
        <div
          className="flex gap-1 cursor-pointer hover:text-[#5624d0]"
          onClick={onClick}
        >
          <span>{firstName}</span>
          <span>{lastName}</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="mt-8 bg-white w-[300px] flex flex-col gap-2 p-0 filter brightness-120">
        {PurchasedCourses.map((val, index) => (
          <div
            key={index}
            className="flex-col gap-2 w-full p-1 items-center justify-center object-cover object-center"
            style={{ borderBottom: "1px solid #d1d7dc" }}
          >
            <div className="flex gap-1 p-2 w-full">
              <Image
                src={val.imageUrl}
                alt="my-learning-1"
                width={80}
                height={80}
              />
              <div className="flex flex-col">
                <p className="font-bold text-[.8rem] leading-normal">
                  {val.title}
                </p>
                <div>
                  <Progress
                    value={50}
                    className="w-full bg-gray-200"
                    fill="primary"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
};

export default MyLearningDropDown;


