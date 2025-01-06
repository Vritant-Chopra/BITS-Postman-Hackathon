"use client"
import React from "react";
import { useState } from "react";
import logo from "../assests/images/logo.png"
import Image from "next/image"
import Link from "next/link";
import emergency from "../assests/images/emergency.png"
import homedoc from "../assests/images/doctor.svg"
import Navbar from "../components/Navbar.jsx"
import arrowRight from "../assests/images/arrow right.svg"
import CountUp from "../../node_modules/react-countup"
import ScrollTrigger from "react-scroll-trigger";
import { useInView } from "react-intersection-observer";
import Typewriter from "../../node_modules/typewriter-effect"
import Footer from "../components/Footer.jsx"

const Landing = () => {
    const [counterOn, setCounterOn] = useState(false);

    // Using useInView to monitor the CountUp section
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation happens only once
        threshold: 0.5,    // Trigger when 50% of the section is in view
    });

    // Trigger CountUp when the section comes into view
    React.useEffect(() => {
        if (inView) setCounterOn(true);
    }, [inView]);

    return (
        <div>
            <Navbar />
            <section className="h-screen flex items-center">
                <Image src={homedoc} alt="MAX Healthcare" className="h-[85%] w-2/3 mt-[5rem] ml-[-1.75rem]" />
                <div className="h-screen flex flex-col items-center justify-center w-1/3 gap-10">
                    <div className="">
                        <h1 className="text-5xl font-nova text-left font-bold">
                            MAX is transforming healthcare one <span className="text-[#ffd32c] font-mono text-6xl">Click</span> at a time!
                        </h1>
                    </div>
                    <div className="text-xl">
                        <Typewriter options={{
                            strings: ['Opt for the Healthcare you deserve!', 'MAX is transforming healthcare', 'Doctor at your Doorstep!'],
                            autoStart: true,
                            loop: true,
                            cursor: '|'
                        }} />
                    </div>
                    <Link href="/maps">
                        <button className="bg-[#38b5b7] text-2xl font-mono flex items-center">
                            <div className="p-4 hover:bg-[#0b6f71]">Find A Hospital Nearby</div>
                            <Image src={arrowRight} alt="Right Arrow" className="size-8 bg-[#0b6f71] relative h-[100%]" />
                        </button>
                    </Link>
                </div>
            </section>
            <section
                ref={ref}
                className="w-screen h-[20%] bg-white grid grid-cols-4 text-center items-center text-black m-0 p-5"
            >
                <div>
                    {counterOn && (
                        <CountUp start={0} end={20000} duration={2} delay={0} className="font-bold text-3xl font-sans" />
                    )}<span className="text-orange-500 font-bold text-3xl">+</span>
                    <br /><p>Happy Patients</p>
                </div>
                <div>
                    {counterOn && (
                        <CountUp start={0} end={40} duration={2} delay={0} className="font-bold text-3xl font-sans" />
                    )}<span className="text-orange-500 font-bold text-3xl">+</span>
                    <br />Doctors
                </div>
                <div>
                    {counterOn && (
                        <CountUp start={0} end={45} duration={2} delay={0} className="font-bold text-3xl font-sans" />
                    )}<span className="text-orange-500 font-bold text-3xl"> mins</span>
                    <br />Average Response Time
                </div>
                <div>
                    {counterOn && (
                        <CountUp start={0} end={40} duration={2} delay={0} className="font-bold text-3xl font-sans" />
                    )}<span className="text-orange-500 font-bold text-3xl">+</span>
                    <br />Cities
                </div>
            </section>
            <section className="h-[100%] bg-[#2E5077] relative m-0">
                <div className="text-black font-bold text-center text-4xl p-3 m-3">
                    OUR PROCESS
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Landing;
