import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Projects = () => {
    return (
        <div className="container mx-auto px-2 md:px-0 py-16 lg:py-28">
            <div className="grid gap-4 grid-cols-12">
                <div className="col-span-12 md:col-span-10">
                    <h3 className="text-xl mb-6 font-semibold  md:font-bold md:text-3xl lg:text-5xl">
                        Projects We’d Hang on
                        <span className="text-[#2EB8A2]">Our Refrigerator</span>
                    </h3>
                    <p>
                        Discover our latest work, showcasing innovative
                        solutions and successful collaborations that highlight
                        our expertise in delivering high-quality software
                        development projects.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-2 lg:flex lg:justify-end lg:items-end">
                    <button className="btn px-6 btn-info text-white">
                        See All
                        <IoArrowForward />
                    </button>
                </div>
            </div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 3000, // Delay in ms for autoplay
                    disableOnInteraction: false, // Keeps autoplay even after interaction
                }}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="mySwiper lg:mt-16"
            >
                <SwiperSlide className="py-9">
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
                </SwiperSlide>
                <SwiperSlide className="py-9">
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
                </SwiperSlide>

                <SwiperSlide className="py-9">
                    <div className="card card-compact  overflow-hidden  shadow-xl">
                        <figure>
                            <img
                                className="w-full h-[250px] lg:h-[320px]"
                                src="http://surl.li/nyzaqo"
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
                </SwiperSlide>

                <SwiperSlide className="py-9">
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
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;
