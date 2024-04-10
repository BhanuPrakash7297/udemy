import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

const ProfileMenu = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        {" "}
        <div className="flex justify-center items-center">
          <div className="w-[40px] h-[40px] rounded-full bg-[#2d2f31] text-white font-bold flex items-center justify-center object-cover:fit text-[16px] p-2">
            BS
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="mt-4 mr-4 bg-white w-[300px] p-0 flex flex-col filter brightness-120">
        <div
          className="flex items-center justify-center gap-2 w-full"
          style={{ borderBottom: "1px solid #d1d7dc" }}
        >
          <div className="flex justify-center items-center p-2">
            <div className="w-[70px] h-[70px] rounded-full bg-[#2d2f31] text-white font-bold flex items-center justify-center object-cover:fit text-[20px]">
              BS
            </div>
          </div>
          <div className="flex flex-col gap-1 w-[60%]">
            <div className="text-[#2d2f31] text-[14px] font-bold">
              Bhanu Prakash Sen
            </div>
            <div className="truncate text-[6a6f73] text-[12px]">
              myselfbhanuprakash6602@gmail.com
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-5 p-5"
          style={{ borderBottom: "1px solid #d1d7dc" }}
        >
          <Link href="/my-learning" className="hover:text-[#5624d0]">
            My Learning
          </Link>
          <Link href="/my-cart" className="hover:text-[#5624d0]">
            My Cart
          </Link>
          <Link href="/my-whislist" className="hover:text-[#5624d0]">
            Whislist
          </Link>
          <Link href="/tech-on-udemy" className="hover:text-[#5624d0]">
            Tech on Udemy{" "}
          </Link>
        </div>

        <div
          className="flex flex-col gap-5 p-5"
          style={{ borderBottom: "1px solid #d1d7dc" }}
        >
          <Link href="/my-learning" className="hover:text-[#5624d0]">
            Notifications
          </Link>
          <Link href="/my-cart" className="hover:text-[#5624d0]">
            Messages
          </Link>
        </div>

        <div
          className="flex flex-col gap-5 p-5"
          style={{ borderBottom: "1px solid #d1d7dc" }}
        >
          <Link href="/account-setting" className="hover:text-[#5624d0]">
            Account settings
          </Link>
          <Link href="/payment-methods" className="hover:text-[#5624d0]">
            Payment methods
          </Link>
          <Link href="/subscriptions" className="hover:text-[#5624d0]">
            Subscriptions
          </Link>
          <Link href="/udemy-credits" className="hover:text-[#5624d0]">
            Udemy credits
          </Link>
          <Link href="/purchase-history" className="hover:text-[#5624d0]">
            Purchase history
          </Link>
        </div>

        <div
          className="flex flex-col gap-5 p-5"
          style={{ borderBottom: "1px solid #d1d7dc" }}
        >
          <Link href="/language" className="hover:text-[#5624d0]">
            Language
          </Link>
        </div>

        <div
          className="flex flex-col gap-5 p-5"
          style={{ borderBottom: "1px solid #d1d7dc" }}
        >
          <Link href="/public-profile" className="hover:text-[#5624d0]">
            Public profile
          </Link>
          <Link href="/edit-profile" className="hover:text-[#5624d0]">
            Edit profile
          </Link>
        </div>

        <div
          className="flex flex-col gap-5 p-5"
          style={{ borderBottom: "1px solid #d1d7dc" }}
        >
          <Link href="/help" className="hover:text-[#5624d0]">
            help
          </Link>
          <Link href="/log-out" className="hover:text-[#5624d0]">
            Log out
          </Link>
        </div>

        <div className="flex justify-center items-center p-5">
          <h2 className="font-bold text-2xl">Bhanu Prakash Sen</h2>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProfileMenu;



