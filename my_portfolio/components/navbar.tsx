"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-400 text-white p-4 mx-auto">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Jason Tran
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-30">
          <Link href="/" className="hover:underline">
            Web Developer
          </Link>
          <Link href="/contact" className="hover:underline">
            App Developer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
