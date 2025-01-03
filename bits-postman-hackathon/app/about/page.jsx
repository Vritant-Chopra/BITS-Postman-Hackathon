import React from "react";
import Navbar from "../components/Navbar"
import Image from "next/image";
import about_img from "../assests/images/about-us.png"

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="text-white text-6xl text-center pt-[10rem]">
                ABOUT US
            </div>
            <div className="flex items-center justify-between gap-4">
                <Image
                    src={about_img}
                    alt="About Us Image"
                    className="h-[45%] w-[45%] p-20"
                />
                <div className="text-lg flex flex-col gap-3 m-11">
                <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                <p className="font-bold text-xl">Our Vision</p>
                <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </div>
            </div>
        </div>
    );
};

export default About;