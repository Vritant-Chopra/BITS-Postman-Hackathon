import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../assests/images/logo.png";
import emergency from "../assests/images/emergency.svg";
import blacklogo from "../assests/images/logo-dark.png"
import { UilInstagram, UilFacebookF, UilTwitter, UilLinkedin, UilYoutube } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <div className="text-black text-center  border-3 bg-gray-300 w-[100%] grid grid-cols-3">
            <div className="mb-5">
                <Link href="/" className="flex items-center gap-3 size-15 m-3 p-2">
                    <Image
                        src={blacklogo}
                        alt="Logo"
                        className="h-50 size-15"
                    />
                    <div className="flex flex-col font-bold">
                        <span className="text-4xl text-black">
                            MAX
                        </span>
                        <span className="text-md">
                            Healthcare
                        </span>
                    </div>
                </Link>
                <div className="text-left text-zinc-600">
                    <p className="m-3 p-2 text-sm hover:text-black">
                        With BOOKNMEET productivity tool, be successful in avoiding unscheduled absences. let our tool support you to be a leader in your medical practice. The best online appointment scheduling Platform enhances your practice management with online profile visibility.
                    </p>
                    <div className="m-3 p-2 text-sm hover:text-black">
                        <div className="mb-3">
                            Subscribe to BOOKNMEET Newsletter to get Important News, Amazing Offers & Inside Scoops:
                        </div>
                        <input type="text" placeholder={"Email"} className="border-2 border-blue-300 p-1 rounded-md w-[100%] ml-[-0.15rem] mb-2" />
                        <button className="text-white bg-blue-600 p-2 w-[45%] hover:bg-indigo-600">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className=" text-left m-3 p-2">
                <h1 className="font-bold font-serif text-3xl ml-[-0.5rem] p-3">QUICK LINKS</h1>
                <p className="hover:text-black font-sans text-zinc-500 text-md p-1">About Us</p>
                <p className="hover:text-black font-sans text-zinc-500 text-md p-1">Our Blogs</p>
                <p className="hover:text-black font-sans text-zinc-500 text-md p-1">Location Map</p>
                <p className="hover:text-black font-sans text-zinc-500 text-md p-1">Quality and Safety Standards</p>
                <p className="hover:text-black font-sans text-zinc-500 text-md p-1">Disclaimer</p>
                <p className="hover:text-black font-sans text-zinc-500 text-md p-1">Contact Us</p>
            </div>
            <div className=" text-left m-3 p-2">
                <h1 className="font-bold font-serif text-3xl ml-[-0.5rem] p-3">GET IN TOUCH</h1>
                <div>
                    <p className="hover:text-black font-sans text-zinc-500 text-md p-1">24x7 Helpline : +0-000-000-000</p>
                    <p className="hover:text-black font-sans text-zinc-500 text-md p-1">f20212501@pilani.bits-pilani.ac.in</p>

                    <div className="flex gap-2"></div>
                    <div className="flex gap-2 mt-5">
                        <UilInstagram size="30" color="#909090" />
                        <UilFacebookF size="30" color="#909090" />
                        <UilTwitter size="30" color="#909090" />
                        <UilLinkedin size="30" color="#909090" />
                        <UilYoutube size="30" color="#909090" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
