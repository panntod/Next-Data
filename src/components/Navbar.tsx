"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { H4 } from "./Text";

const Navbar = () => {
  const location = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navOptions = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed z-50 top-0 w-full backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between sm:justify-around h-24">
          <Link href="/" className="flex items-center gap-1 sm:gap-3">
            <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]">
              <Image
                width={200}
                height={80}
                src="/nextdata.svg"
                alt="NextData"
                className="object-contain w-full h-full"
              />
            </div>
            <H4 className="text-dark text-xl sm:text-2xl">NextData</H4>
          </Link>
          <div className="flex items-center">
            <div className="hidden md:flex ml-10 items-baseline space-x-4">
              {navOptions.map((navOption) => (
                <Link
                  key={navOption.name}
                  href={navOption.link}
                  className={
                    location.split("/")[1] === navOption.link.split("/")[1]
                      ? "text-primary-blue"
                      : "text-gray-700 hover:text-primary-blue duration-300 transition-all"
                  }
                >
                  {navOption.name}
                </Link>
              ))}
            </div>

            {/* <div className="hidden md:flex gap-2">
              <ButtonLink href="login" variant="text-primary">
                Login
              </ButtonLink>
              <ButtonLink
                href="register"
                variant="text-primary"
                className="border border-primary-blue"
              >
                Register
              </ButtonLink>
            </div> */}

            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-xl w-full px-4 pb-4 shadow-md transition-all">
          <div className="flex flex-col space-y-4">
            {navOptions.map((navOption) => (
              <Link
                key={navOption.name}
                href={navOption.link}
                className={
                  location.split("/")[1] === navOption.link.split("/")[1]
                    ? "text-primary-blue text-center"
                    : "text-gray-700 hover:text-primary-blue duration-300 transition-all text-center"
                }
                onClick={toggleMenu}
              >
                {navOption.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
