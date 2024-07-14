'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { BsCalendar2Check } from "react-icons/bs";
import { BsCalendar2Minus } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineVideoCamera } from "react-icons/ai";

interface IconMap {
  [key: string]: JSX.Element;
}



const MobileNav = () => {
  const pathname = usePathname();

  const icons: IconMap = {
    '1': <AiOutlineVideoCamera size={24} />,
    '2': <BsCalendar2Minus size={24} />,
    '3': <BsCalendar2Check size={24} />,
    '4': <MdOutlineDashboard size={24} />,
  };

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/full-logo.png"
              width={32}
              height={32}
              alt="Sing Along logo"
            />
            <p className="text-[26px] font-extrabold text-white">Sing Along</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;
                  const ss: number = item.Icon;
                  const Icon = icons[ss];
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                          {
                            'bg-blue-1': isActive,
                          }
                        )}
                      >
                        <span className={`${isActive ? 'text-white' : 'text-black/70'}`}>

                          {Icon}
                        </span>
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
