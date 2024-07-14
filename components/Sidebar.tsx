'use client';
import Image from 'next/image';


import { BsCalendar2Check } from "react-icons/bs";
import { BsCalendar2Minus } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { planslist, sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { useContext } from 'react';
import {subscriptionContext} from '@/providers/SubscriptionProvider'

const Sidebar = () => {
  const pathname = usePathname();
  const {subscription} = useContext(subscriptionContext)


  interface IconMap {
    [key: string]: JSX.Element;
  }
  const icons: IconMap = {
    '1': <AiOutlineVideoCamera size={24} />,
    '2': <BsCalendar2Minus size={24} />,
    '3': <BsCalendar2Check size={24} />,
    '4': <MdOutlineDashboard size={24} />,
  };
  
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-white shadow-md p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route
          const ss:number = item.Icon;
          const Icon = icons[ss];
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start',
                {
                  'bg-foregroud-primary': isActive,
                }
              )}
            >
              <span className={`${isActive ? 'text-white': 'text-black/70'}`}>

               {Icon}
              </span>
              
              <p className={`text-lg  ${isActive ? "text-white" : "text-black/70"} font-semibold `}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      
     

      <div className='py-2 border-b border-t border-black/40 flex items-center justify-between'>
        <div className='flex flex-col'>
          <h4 className='text-black/90 text-2xl mb-1'>{subscription}</h4>
          <p className='text-black/70 text-xs'> No Cost ${planslist[subscription].price}/month</p>
        </div>
       <Link href={'/plans'} className='block py-2 px-4 text-black/90 rounded-3xl hover:bg-black/30 text-sm'>Upgrade</Link>
      </div>
      
    </section>
  );
};

export default Sidebar;
