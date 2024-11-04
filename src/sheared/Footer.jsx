import React from "react";
import google from "/images/google.png";
import upwork from "/images/upwork.png";
import clutch from "/images/clutch.png";
import img4 from "/images/swd.jpg";
const Footer = () => {
    return (
        <div className="bg-[#072B4A] pt-32 pb-8">
            <div className="container mx-auto px-2 md:px-0 text-white">
                <div className="flex gap-8 flex-col lg:flex-row justify-between">
                    <div className=" w-full lg:w-1/2">
                        <div>
                            <img
                                className="md:mb-4 mb-6 w-32 md:mx-0 mx-auto"
                                src="/images/Logo.svg"
                                alt="Logo"
                            />
                            <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
                                <img
                                    className="w-6  rounded-full"
                                    src="/images/linkedin.svg"
                                    alt="LinkedIn"
                                />
                                <img
                                    className="w-6  rounded-full"
                                    src="/images/x.svg"
                                    alt="Twitter"
                                />
                                <img
                                    className="w-6  rounded-full"
                                    src="/images/fb.svg"
                                    alt="Facebook"
                                />
                                <img
                                    className="w-6 h-6 rounded-full"
                                    src="/images/youtube.svg"
                                    alt="YouTube"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div>
                                <img src={clutch} alt="" />
                            </div>
                            <div>
                                <img src={google} alt="" />
                            </div>
                            <div>
                                <img src={upwork} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=" w-full lg:w-1/2">
                        <div className="grid gap-6 md:gap-0 grid-cols-12">
                            <div className="col-span-12 md:col-span-4">
                                <h4 className="text-xl font-semibold">
                                    Company
                                </h4>
                                <ul className="text-sm mt-3 md:mt-6 flex gap-4 md:gap-0 md:flex-col">
                                    <li>Home</li>
                                    <li>Service</li>
                                    <li>Projects</li>
                                    <li>About Us</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className="col-span-6 md:col-span-4">
                                <h4 className="text-xl font-semibold">
                                    Services
                                </h4>
                                <ul className="text-sm mt-3 md:mt-7">
                                    <li>Software Development </li>
                                    <li>UI/UX Design & Dev</li>
                                    <li>Web Development</li>
                                    <li>API Integration </li>
                                    <li>Mobile App Design</li>
                                    <li>E commerce Solutions</li>
                                </ul>
                            </div>
                            <div className="col-span-6 md:col-span-4">
                                <ul className="text-sm mt-14 ">
                                    <li>Mobile App Development</li>
                                    <li>Enterprise Solution</li>
                                    <li>SQA Solution</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between px-2 py-10 gap-8">
                    <div className="flex md:flex-row flex-col   items-start bg-[#FFFFFF1A] gap-4 p-4 rounded-md flex-1">
                        <img
                            className="md:w-36 w-20"
                            src="/images/loc-usa.png"
                            alt="USA Office"
                        />
                        <div>
                            <h1 className="text-white font-semibold text-lg mb-2">
                                USA Office
                            </h1>
                            <span className="text-white flex items-center gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
                                </svg>
                                1903 Commonwealth St, Houston, TX 77006, USA
                            </span>
                            <span className="text-white flex items-center gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="none"
                                        d="M0 0h24v24H0V0z"
                                    ></path>
                                    <path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z"></path>
                                </svg>{" "}
                                +1 (978) 431-0122
                            </span>
                            <span className="text-white flex items-center gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="none"
                                        d="M0 0h24v24H0V0z"
                                    ></path>
                                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
                                </svg>
                                info@mediusware.com
                            </span>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col  items-start bg-[#FFFFFF1A] gap-4 p-4 rounded-md flex-1">
                        <img
                            className="md:w-36 w-20"
                            src="/images/loc-bd.png"
                            alt="Bangladesh Office"
                        />
                        <div>
                            <h1 className="text-white font-semibold text-lg mb-2">
                                Bangladesh Office
                            </h1>
                            <span className="text-white flex items-center gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"></path>
                                </svg>
                                1903 Commonwealth St, Dhaka, BD
                            </span>
                            <span className="text-white flex items-center gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="none"
                                        d="M0 0h24v24H0V0z"
                                    ></path>
                                    <path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z"></path>
                                </svg>{" "}
                                +880 1750-020408
                            </span>
                            <span className="text-white flex items-center gap-2">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="none"
                                        d="M0 0h24v24H0V0z"
                                    ></path>
                                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
                                </svg>
                                info@mediusware.com
                            </span>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 " />

                <div>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        © Brand 2024 - All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
