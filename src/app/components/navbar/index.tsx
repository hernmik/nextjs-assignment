import React from "react";
import Link from "next/link";
// import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-green-600 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/today/nextday">
                  <p>Next Day</p>
                </Link>
              </li>
              <li>
                <Link href="/today/search">
                  <p>Search</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;