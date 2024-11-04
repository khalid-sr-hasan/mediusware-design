import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import ServicesCard from "../../components/ServicesCard";
import { IoArrowForward, IoSendSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import img1 from "/images/clutch.jpg";
import img2 from "/images/upwork.jpg";
import img3 from "/images/google.jpg";
import img4 from "/images/swd.jpg";
import ceoImg from "/images/ceo-img.png";
import { FiDownload, FiPhoneCall } from "react-icons/fi";
import Review from "../../components/Review";
import Projects from "../../components/Projects";

const Home = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <div className="">
            <Banner />

            <div className="container mx-auto px-2 md:px-0 py-8 md:py-16 lg:py-28">
                <div className="mb-8 lg:mb-16">
                    <h2 className="text-xl md:text-3xl lg:text-5xl text-center font-semibold">
                        Things We’re{" "}
                        <span className="text-[#2EB8A2]">Good At</span>
                    </h2>
                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServicesCard key={service.id} service={service} />
                    ))}
                </div>
                <div className="text-center pt-12">
                    <button className="btn px-6 btn-info text-white">
                        See All
                        <IoArrowForward />
                    </button>
                </div>
            </div>

            {/* about us */}
            <div className="py-16 px-2 md:px-0 lg:py-28 bg-[#F0F8FF] ">
                <div className="container mx-auto ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 relative">
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                className="w-full"
                                src="http://surl.li/wneybf"
                                alt=""
                            />
                            <img
                                className="absolute w-14 lg:w-20 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-50"
                                src="./images/play.png"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-black opacity-15"></div>
                        </div>
                        <div className=" lg:absolute lg:w-3/5 mt-6 lg:right-0 lg:top-1/2 lg:-translate-y-1/2  rounded-lg border p-4 lg:p-8 bg-white  lg:mt-0 ">
                            <h2 className="text-xl md:text-3xl lg:text-5xl mb-4  font-semibold">
                                A Little Bit {""}
                                <span className="text-[#2EB8A2]">About Us</span>
                            </h2>
                            <p className="text-xs md:text-base">
                                Incepted in 2015, Mediusware Ltd. has been
                                serving as a leading IT Solution provider in USA
                                & Bangladesh. Our aim is to help businesses all
                                around the world by providing the digital
                                solutions according to their need. Serving a
                                number of renowned companies from the USA, UK,
                                and many other countries, we have already
                                created a wide range of satisfied clients!
                            </p>

                            <div className="mt-4 grid gap-4 grid-cols-3 ">
                                <div className="bg-[#F1F5F9] p-4 rounded-lg">
                                    <h5 className="text-xl md:text-3xl mb-2 font-semibold">
                                        800+
                                    </h5>
                                    <p className="text-xs md:text-base">
                                        Projects Completed
                                    </p>
                                </div>
                                <div className="bg-[#F1F5F9] p-4 rounded-lg">
                                    <h5 className="text-xl md:text-3xl mb-2 font-semibold">
                                        100+
                                    </h5>
                                    <p className="text-xs md:text-base">
                                        Team Members
                                    </p>
                                </div>

                                <div className="bg-[#F1F5F9] p-4 rounded-lg">
                                    <h5 className="text-xl md:text-3xl mb-2 font-semibold">
                                        1000+
                                    </h5>
                                    <p className="text-xs md:text-base">
                                        Happy Customers
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 md:mt-8 flex flex-col md:flex-row gap-6">
                                <button className="btn px-6 btn-info text-white">
                                    <FiPhoneCall />
                                    Contact Us
                                </button>
                                <button className="btn bg-transparent border border-gray-300 px-6 btn-info hover:text-white ">
                                    <FiDownload />
                                    Company Deck
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <AboutUs1 /> */}

            {/* work together section */}
            <div className="container mx-auto px-2 md:px-0 py-16 lg:py-28">
                <div className="grid gap-6 grid-cols-12">
                    <div className=" col-span-12 lg:col-span-6">
                        <h3 className="text-xl font-semibold mb-4  md:font-bold md:text-3xl lg:text-5xl">
                            How We{" "}
                            <span className="text-[#2EB8A2]">
                                Work Together
                            </span>
                        </h3>
                        <p>
                            Mediusware is a US-based software development
                            company with unique access to premium developers &
                            Designers. We follow a structured process to ensure
                            project success. Our approach guarantees reliability
                            and ongoing support for every project. Here is the
                            process we work on:
                        </p>
                    </div>

                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Planning
                            </h5>
                            <p>
                                Collaborate with clients to create a detailed
                                project plan.
                            </p>
                        </div>
                    </div>

                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Planning
                            </h5>
                            <p>
                                Collaborate with clients to create a detailed
                                project plan.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Planning
                            </h5>
                            <p>
                                Collaborate with clients to create a detailed
                                project plan.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Planning
                            </h5>
                            <p>
                                Collaborate with clients to create a detailed
                                project plan.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Planning
                            </h5>
                            <p>
                                Collaborate with clients to create a detailed
                                project plan.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-xl p-6 bg-[#F1F5F9] col-span-12 md:col-span-6 lg:col-span-3">
                        <img src="./images/planning.png" alt="" />
                        <div className="mt-4 lg:mt-11">
                            <h5 className="text-2xl font-semibold mb-3">
                                Planning
                            </h5>
                            <p>
                                Collaborate with clients to create a detailed
                                project plan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <Review />

            {/* projects */}
            <Projects />

            {/*  */}
            <div className="bg-[#F0F8FF] py-16 lg:py-28">
                <div className="container mx-auto px-2 md:px-0">
                    <div className="md:w-10/12 lg:w-8/12 mx-auto ">
                        <div className="text-center ">
                            <h3 className="text-xl mb-6 font-semibold  md:font-bold md:text-3xl lg:text-5xl">
                                Achievements {""}
                                <span className="text-[#2EB8A2]">& Awards</span>
                            </h3>
                            <p>
                                People know us for our top-notch work and great
                                customer service, all of whom have expressed
                                nothing but positive feedback about our
                                services. Take a moment to see for yourself.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-4">
                        <div className="bg-white  rounded-xl ">
                            <img src={img1} alt="" />
                        </div>
                        <div className="bg-white  rounded-xl">
                            <img src={img2} alt="" />
                        </div>
                        <div className="bg-white  rounded-xl">
                            <img src={img3} alt="" />
                        </div>
                        <div className="bg-white  rounded-xl">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* news latter */}
            <div className="px-2 md:px-0">
                <div className="container mx-auto my-28 rounded-xl bg-[#072B4A]">
                    <div className="flex flex-col lg:flex-row justify-between items-center p-4 md:p-16">
                        <div className="text-white text-center md:text-left">
                            <h3 className="text-[18px] md:text-xl lg:text-3xl font-semibold">
                                Want to know what we are up to?
                            </h3>
                            <p className="mt-2">Subscribe to our newsletter.</p>
                        </div>

                        <div className="flex gap-4 mt-5 lg:mt-0">
                            <input
                                type="email"
                                className="w-48 md:w-80 rounded-lg px-3 outline-none"
                                placeholder="Enter your email"
                            />
                            <button className="btn px-6 btn-info text-white">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* query */}
            <div className="container mx-auto px-3 md:px-0 mb-28">
                <div className="flex flex-col gap-8 justify-between lg:flex-row">
                    <div className=" w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                className="w-32 lg:w-1/3"
                                src={ceoImg}
                                alt=""
                            />
                            <div className=" rounded-lg p-4 md:p-6 absolute bottom-0 left-[22%] lg:left-[30%] bg-[#A5EADA4D]/20  backdrop-blur-md">
                                <h4 className="text-base lg:text-xl font-semibold">
                                    Md. Shahinur Rahman
                                </h4>
                                <span className="text-xs lg:text-base">
                                    Managing Director, Mediusware Ltd
                                </span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="mb-4">
                                I'd be excited to talk with you about your
                                projects or what you need.
                            </p>
                            <p>
                                Fill in the form or send us an email to
                                “info@mediusware.com”
                            </p>
                            <h3 className="text-xl font-semibold my-8">
                                Talk to you in less than 24hs.
                            </h3>
                        </div>

                        <div className="bg-[#F0F8FF] p-6 rounded-lg">
                            <div>
                                <h5 className="font-semibold">Book a call</h5>
                                <p>
                                    Feel free to select a time at your
                                    convenience!
                                </p>
                                <button className="mt-2 flex items-center gap-4 text-[#0C98EB] font-semibold">
                                    <span> Let's Talk</span>{" "}
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" lg:w-1/2 p-4 md:p-6 bg-[#F0F8FF] rounded-lg border shadow-lg">
                        <div>
                            <h4 className="text-2xl font-semibold mb-4">
                                Got an idea? We’ve got the skills.
                            </h4>
                            <p>
                                Fill out our contact form and we’ll get in
                                touch!
                            </p>
                        </div>

                        <form className="mt-8">
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                                <div>
                                    <label
                                        className="font-medium"
                                        htmlFor="username"
                                    >
                                        Name*
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "
                                    />
                                </div>
                                <div>
                                    <label
                                        className="font-medium"
                                        htmlFor="username"
                                    >
                                        Email*
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "
                                    />
                                </div>
                                <div>
                                    <label
                                        className="font-medium"
                                        htmlFor="username"
                                    >
                                        Phone Number (Optional)
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "
                                    />
                                </div>
                                <div>
                                    <label htmlFor="username">
                                        <span className="font-medium">
                                            Company Name
                                        </span>{" "}
                                        (Optional)
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="username">
                                    <span className="font-medium">
                                        Deep details about your query
                                    </span>{" "}
                                    (Optional)
                                </label>
                                <textarea
                                    name="comment"
                                    id=""
                                    className="block w-full h-[100px] px-4 py-2 mt-2 rounded-md outline-none"
                                ></textarea>
                            </div>
                            <div className="mt-5 text-right">
                                <button className="btn px-6 btn-info text-white">
                                    Submit Inquiry
                                    <IoSendSharp />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
