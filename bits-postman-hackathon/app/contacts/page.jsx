import React from "react";
import Navbar from "../components/Navbar"
import Image from "next/image";
import contact_img from "../assests/images/contact.png"
import Link from "next/link"
import Footer from "../components/Footer.jsx"

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="text-white text-6xl text-center pt-[10rem]">
                CONTACT US
            </div>
            <div className="flex items-center justify-center gap-4">
                <Image
                    src={contact_img}
                    alt="About Us Image"
                    className="h-[45%] w-[45%] p-20"
                />
                <div className="text-lg flex flex-col gap-5 m-11">
                    <p className="font-bold text-xl">Our Office</p>
                    <p>
                        00000 Willms Station
                        Suite 000, Washington, USA
                    </p>
                    <p>
                        Tel: (000) 000-0000
                        <br />Email: greatstackdev@gmail.com
                    </p>
                    <p className="font-bold text-xl">CAREERS</p>
                    <p>
                    Learn more about our teams and be update on our job openings.
                    </p>
                    <Link href="/careers">
                        <button className="bg-white border-black border-2 text-black h-[3rem] w-[11rem] hover:bg-[#2E5077] hover:border-[#2E5077]">
                            Explore Jobs
                        </button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;