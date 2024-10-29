import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import ServicesCard from "../../components/ServicesCard";
import { IoArrowForward } from "react-icons/io5";

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
                <div>
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
                    <div className="border col-span-12 lg:col-span-6">
                        <h3 className="text-xl font-semibold  md:font-bold md:text-3xl lg:text-5xl">
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
                    <div className="md:w-10/12 lg:w-8/12 mx-auto ">
                        <div className="text-center ">
                            <h3 className="text-xl mb-6 font-semibold  md:font-bold md:text-3xl lg:text-5xl">
                                How We{" "}
                                <span className="text-[#2EB8A2]">
                                    Work Together
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

                        <div className="w-full p-5 overflow-hidden bg-white rounded-lg shadow-lg">
                            <img
                                className="object-cover w-full h-56"
                                src="http://surl.li/gibcek"
                                alt="avatar"
                            />

                            <div className="py-5 text-center">
                                <a
                                    href="#"
                                    className="block text-xl font-bold "
                                    tabindex="0"
                                    role="link"
                                >
                                    John Doe
                                </a>
                                <span className="text-sm ">
                                    Software Engineer
                                </span>
                            </div>
                        </div>
                        <div className="w-full  overflow-hidden bg-white rounded-lg shadow-lg">
                            <img
                                className="object-cover w-full h-56"
                                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                alt="avatar"
                            />

                            <div className="py-5 text-center">
                                <a
                                    href="#"
                                    className="block text-xl font-bold text-gray-800 dark:text-white"
                                    tabindex="0"
                                    role="link"
                                >
                                    John Doe
                                </a>
                                <span className="text-sm text-gray-700 dark:text-gray-200">
                                    Software Engineer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
