import { FiDownload } from "react-icons/fi";

const AboutUs1 = () => {
    return (
        <div>
            <div className="bg-[#F0F8FF]">
                <div className="w-[1440px] mx-auto py-[124px] border border-red-800 lg:flex lg:relative">
                    <div className="lg:relative">
                        <div className="">
                            <img
                                src="../../images/aboutus-img.png"
                                alt=""
                                className="rounded-xl h-[560px] w-[703px]"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[20%] rounded-xl"></div>
                        </div>
                        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                            <img src="../../images/play.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-xl w-[825px] h-[486px] lg:absolute right-0 bottom-[20%]">
                        <h3 className="sora text-[#072B4A] text-[48px] font-semibold">
                            A Little Bit{" "}
                            <span className="text-[#2EB8A2]">About Us</span>
                        </h3>
                        <p className="sora text-[#334155] text-lg mb-4">
                            Incepted in 2015, Mediusware Ltd. has been serving
                            as a leading IT Solution provider in USA &
                            Bangladesh. Our aim is to help businesses all around
                            the world by providing the digital solutions
                            according to their need. Serving a number of
                            renowned companies from the USA, UK, and many other
                            countries, we have already created a wide range of
                            satisfied clients!
                        </p>
                        <div className="flex gap-4 justify-start- mb-8">
                            <div className="bg-[#F1F5F9] p-4 rounded-xl w-[243px]">
                                <h3 className="sora font-semibold text-3xl mb-2 text-[#072B4A]">
                                    800+
                                </h3>
                                <p className="sora text-[#072B4A] text-base">
                                    Projects Completed
                                </p>
                            </div>
                            <div className="bg-[#F1F5F9] p-4 rounded-xl w-[243px]">
                                <h3 className="sora font-semibold text-3xl mb-2 text-[#072B4A]">
                                    100+
                                </h3>
                                <p className="sora text-[#072B4A] text-base">
                                    Team Members
                                </p>
                            </div>
                            <div className="bg-[#F1F5F9] p-4 rounded-xl w-[243px]">
                                <h3 className="sora font-semibold text-3xl mb-2 text-[#072B4A]">
                                    1000+
                                </h3>
                                <p className="sora text-[#072B4A] text-base">
                                    Happy Customers
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex justify-start">
                                <button className="flex items-center gap-3 rounded-xl py-4 px-8 bg-[#0C98EB] hover:bg-[#0C98EB] sora text-lg text-white font-semibold">
                                    <img
                                        src="../../images/phone-call-01.svg"
                                        alt="telephone-ring-icon"
                                    />
                                    Contact Us
                                </button>
                            </div>
                            <div className="flex justify-start">
                                <button className="flex items-center gap-3 rounded-xl py-4 px-8 sora text-lg text-[#072B4A] font-semibold border border-[#072B4A]">
                                    Company Deck
                                    <FiDownload className="text-2xl"></FiDownload>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs1;
