import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import ServicesCard from "../../components/ServicesCard";
import { IoArrowForward } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import img1 from "/images/clutch.jpg";
import img2 from "/images/upwork.jpg";
import img3 from "/images/google.jpg";
import img4 from "/images/swd.jpg";

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

            <div className="container mx-auto py-8 md:py-16 lg:py-28">
                <div className="mb-16">
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
            {/* work together section */}
            <div className="container mx-auto py-28">
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
            <div className="bg-[#F0F8FF] py-28">
                <div className="container mx-auto">
                    <div className="md:w-10/12 lg:w-8/12 mx-auto mb-16">
                        <div className="text-center ">
                            <h3 className="text-xl mb-6 font-semibold  md:font-bold md:text-3xl lg:text-5xl">
                                What the People {""}
                                <span className="text-[#2EB8A2]">
                                    Are Saying
                                </span>
                            </h3>
                            <p>
                                Explore success stories from clients across a
                                range of industries, spanning from techpreneurs
                                and start-ups to established enterprises.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="w-full  border p-5 overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="relative">
                                <img
                                    className="object-cover  rounded-lg w-full h-56"
                                    src="http://surl.li/ffojfw"
                                    alt="avatar"
                                />

                                <img
                                    className="absolute w-12 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"
                                    src="./images/play.png"
                                    alt=""
                                />
                            </div>

                            <div className="pt-5 ">
                                <h3 className="text-lg font-medium mb-4">
                                    Mediusware renewed our trust in outsourcing
                                    IT development in the USA.
                                </h3>
                                <p>John Doe</p>
                                <p className="text-sm">Software Engineer</p>
                            </div>
                        </div>
                        <div className="w-full  border p-5 overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="relative">
                                <img
                                    className="object-cover  rounded-lg w-full h-56"
                                    src="http://surl.li/ffojfw"
                                    alt="avatar"
                                />

                                <img
                                    className="absolute w-12 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"
                                    src="./images/play.png"
                                    alt=""
                                />
                            </div>

                            <div className="pt-5 ">
                                <h3 className="text-lg font-medium mb-4">
                                    Mediusware renewed our trust in outsourcing
                                    IT development in the USA.
                                </h3>
                                <p>John Doe</p>
                                <p className="text-sm">Software Engineer</p>
                            </div>
                        </div>
                        <div className="w-full  border p-5 overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="relative">
                                <img
                                    className="object-cover  rounded-lg w-full h-56"
                                    src="http://surl.li/ffojfw"
                                    alt="avatar"
                                />

                                <img
                                    className="absolute w-12 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"
                                    src="./images/play.png"
                                    alt=""
                                />
                            </div>

                            <div className="pt-5 ">
                                <h3 className="text-lg font-medium mb-4">
                                    Mediusware renewed our trust in outsourcing
                                    IT development in the USA.
                                </h3>
                                <p>John Doe</p>
                                <p className="text-sm">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* projects */}
            <div className="container mx-auto py-28">
                <div className="grid gap-4 grid-cols-12">
                    <div className="col-span-12 md:col-span-10">
                        <h3 className="text-xl mb-6 font-semibold  md:font-bold md:text-3xl lg:text-5xl">
                            Projects We’d Hang on
                            <span className="text-[#2EB8A2]">
                                Our Refrigerator
                            </span>
                        </h3>
                        <p>
                            Discover our latest work, showcasing innovative
                            solutions and successful collaborations that
                            highlight our expertise in delivering high-quality
                            software development projects.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-2 lg:flex lg:justify-end lg:items-end">
                        <button className="btn px-6 btn-info text-white">
                            See All
                            <IoArrowForward />
                        </button>
                    </div>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="card card-compact  overflow-hidden  shadow-xl">
                        <figure>
                            <img
                                className=" w-full  h-[250px] lg:h-[320px]"
                                src="http://surl.li/jsfkbo"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body bg-[#F0F8FF]">
                            <h2 className="card-title font-semibold">
                                Go Thruhike Website Redesign
                            </h2>
                            <p>
                                Thruhike is the ultimate platform for
                                discovering and sharing your favorite places and
                                products. Our mission is to celebrate local
                                business and inspire new experiences.
                            </p>
                            <div className="mt-4">
                                <button className="flex items-center gap-4 text-[#0C98EB] font-semibold">
                                    <span> View Project</span>{" "}
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact  overflow-hidden  shadow-xl">
                        <figure>
                            <img
                                className="w-full h-[250px] lg:h-[320px]"
                                src="http://surl.li/mcjetj"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body bg-[#F0F8FF]">
                            <h2 className="card-title font-semibold">
                                Go Thruhike Website Redesign
                            </h2>
                            <p>
                                Thruhike is the ultimate platform for
                                discovering and sharing your favorite places and
                                products. Our mission is to celebrate local
                                business and inspire new experiences.
                            </p>
                            <div className="mt-4">
                                <button className="flex items-center gap-4 text-[#0C98EB] font-semibold">
                                    <span> View Project</span>{" "}
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact  overflow-hidden  shadow-xl">
                        <figure>
                            <img
                                className="w-full h-[250px] lg:h-[320px]"
                                src="http://surl.li/lipblf"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body bg-[#F0F8FF]">
                            <h2 className="card-title font-semibold">
                                Go Thruhike Website Redesign
                            </h2>
                            <p>
                                Thruhike is the ultimate platform for
                                discovering and sharing your favorite places and
                                products. Our mission is to celebrate local
                                business and inspire new experiences.
                            </p>
                            <div className="mt-4">
                                <button className="flex items-center gap-4 text-[#0C98EB] font-semibold">
                                    <span> View Project</span>{" "}
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="bg-[#F0F8FF] py-28">
                <div className="container mx-auto">
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
            <div className="container mx-auto my-28 rounded-xl bg-[#072B4A]">
                <div className="flex flex-col lg:flex-row justify-between items-center p-4 md:p-16">
                    <div className="text-white">
                        <h3 className="text-[18px] md:text-xl lg:text-3xl font-semibold">
                            Want to know what we are up to?
                        </h3>
                        <p className="mt-2">Subscribe to our newsletter.</p>
                    </div>

                    <div className="flex gap-4">
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

            {/* query */}
            <div className="container mx-auto mb-28">
                <div className="flex flex-col gap-8 justify-between lg:flex-row">
                    <div className=" w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                className="w-32 lg:w-1/3"
                                src="/public/images/ceo-img.png"
                                alt=""
                            />
                            <div className=" rounded-lg p-6 absolute bottom-0 left-[15%] lg:left-[30%] bg-[#A5EADA4D]/20  backdrop-blur-md">
                                <h4 className="text-xl font-semibold">
                                    Md. Shahinur Rahman
                                </h4>
                                <span>Managing Director, Mediusware Ltd</span>
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

                    <div className=" lg:w-1/2 p-6 bg-[#F0F8FF] rounded-lg">
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
                                    className="block w-full h-[120px] px-4 py-2 mt-2 rounded-md outline-none"
                                ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
