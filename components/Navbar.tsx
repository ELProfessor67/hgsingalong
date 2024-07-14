import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full px-6 py-4 lg:px-10 ">
      <Link href="/dashboard" className="flex items-center gap-1 z-20">
        <Image
          src="/icons/full-logo.png"
          width={70}
          height={70}
          alt="Sing Along logo"
          className="max-sm:size-10"
        />
        <span className="text-center" style={{ marginLeft: 20 }}>
            <h3
              style={{
                color: "#eb6e0c",
                marginBottom: 0,
                fontWeight: "bold",
                lineHeight: '20px'
              }}
            >
              Sing Along
            </h3>
          </span>
        
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in"/>
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
