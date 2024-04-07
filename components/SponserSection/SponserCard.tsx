import Image from 'next/image';
import React from 'react'

const SponserCard = () => {
  return (
    <div className='w-full mx-[134rem] ml-auto mr-auto pl-[2rem] pr-[2rem]'>
    <div className='w-full p-[1.5rem] md:p-[6.4rem] justify-center items-center text-center'>
        <h2 className='mb-[2.5rem] text-[#6a6f73] text-[1.2rem] font-normal'>Trusted by over 15,000 companies and millions of learners around the world</h2>
         <ul className='grid grid-cols-4 gap-4 lg:grid-cols-8 list-none justify-between items-center'>
            <li>
                <Image alt='Loading.....' width={70} height={70} src={'/volkswagen.svg'}></Image>
            </li>
            <li>
                <Image alt='Loading.....' width={70} height={70} src={'/samsung.svg'}></Image>
            </li>
            <li>
                <Image alt='Loading.....' width={70} height={70} src={'/cisco.svg'}></Image>
            </li>
            <li>
                <Image alt='Loading.....' width={70} height={70} src={'/att.svg'}></Image>
            </li>
            <li>
                <Image alt='Loading.....' width={70} height={70} src={'/procter_gamble.svg'}></Image>
            </li>
            <li>
                <Image alt='Loading.....' width={70} height={70} src={'/hewlett_packard_enterprise.svg'}></Image>
            </li>
            <li>
                <Image alt='Loading.....' width={70} height={70} src={'/citi.svg'}></Image>
            </li>
            <li>
                <Image alt='Loading.....' width={70} height={70} src={'/ericsson.svg'}></Image>
            </li>
            
         </ul>
    </div>
    </div>
  )
}

export default SponserCard;