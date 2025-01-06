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
import { subscriptionContext } from '@/providers/SubscriptionProvider'

const Sidebar = () => {
  const pathname = usePathname();
  const { subscription } = useContext(subscriptionContext)


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
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-background-3 shadow-md p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route
          const ss: number = item.Icon;
          const Icon = icons[ss];
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start',
                {
                  'bg-orange-500': isActive,
                }
              )}
            >
              <span className={`${isActive ? 'text-white' : 'text-white'}`}>

                {Icon}
              </span>

              <p className={`text-lg  ${isActive ? "text-white" : "text-white"} font-semibold `}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>



      <div className='py-2 border-b border-t border-white/40 flex items-center justify-between !bg-[url("/images/green.jpg")] rounded-md p-2'>
        <div className='flex flex-col'>
          <h4 className='text-white/90 text-2xl mb-1'>{subscription}</h4>
          <p className='text-white/70 text-xs'> No Cost ${planslist[subscription].price}/month</p>
        </div>
        <Link href={'/plans'} className='block py-2 px-4 text-white/90 rounded-3xl hover:bg-black/30 text-sm '>Upgrade</Link>
      </div>

      {
        subscription == "free" &&
        <Link href={'/donate'} className='flex items-center justify-center mt-2'>
          <button
            className="relative flex items-center px-6 py-3 w-full overflow-hidden font-medium transition-all bg-orange-500 rounded-md group"
          >
            <span
              className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4"
            >
              <span
                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-background-3"
              ></span>
            </span>
            <span
              className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-ml-4 group-hover:-mb-4"
            >
              <span
                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-background-3"
              ></span>
            </span>
            <span
              className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-orange-600 rounded-md group-hover:translate-x-0"
            ></span>
            <span
              className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
            >Donate Now</span
            >
          </button>

        </Link>
      }


    </section>
  );
};

export default Sidebar;