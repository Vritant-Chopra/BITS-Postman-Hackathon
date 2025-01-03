import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../assests/images/logo.png";
import emergency from "../assests/images/emergency.svg";

const Navbar = () => {
    return (
        <nav className="bg-[#2E5077] fixed p-3 font-bold flex justify-between items-center font-sans h-[10%] w-screen overflow-hidden z-10">
            <Link href="/" className="flex items-center gap-3 size-15">
                <Image
                    src={logo}
                    alt="Logo"
                    className="h-50 size-15"
                />
                <div className="flex flex-col">
                    <span className="text-4xl text-black">
                        MAX
                    </span>
                    <span className="text-md">
                        Healthcare
                    </span>
                </div>
            </Link>
            <div className="p-5 flex gap-10 items-center text-black">
                <Link href="/about" className="hover:text-gray-100">
                    <button>About Us</button>
                </Link>
                <Link href="/contacts" className="hover:text-gray-100">
                    <button>Contact Us</button>
                </Link>
                <Link href="/login" className="h-10 w-20 text-center hover:text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-white hover:border-pink-800 border-white border-2 rounded-xl">
                    <button className="p-1.5">Log In</button>
                </Link>
                <Link href="/signup" className="h-10 w-20 text-center hover:text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-white hover:border-pink-800 border-white border-2 rounded-xl">
                    <button className="p-1.5">Sign Up</button>
                </Link>
                <Link href="/emergency" className="flex flex-col items-center justify-center bg-white p-2 rounded-lg border-black border-2 shadow size-15 hover:bg-red-600 hover:text-white">
                    <Image src={emergency} alt="Emergency Icon" className="size-9" />
                    <button className="text-black text-xs">Emergency</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
