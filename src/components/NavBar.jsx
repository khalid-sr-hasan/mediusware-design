import { CiCalendar } from "react-icons/ci";
import logo from "../../public/images/Logo.svg";

export const NavBar = () => {
    const navItems = (
        <>
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>
                <details>
                    <summary>Parent1</summary>
                    <ul className="p-2">
                        <li>
                            <a>Submenu 1</a>
                        </li>
                        <li>
                            <a>Submenu 2</a>
                        </li>
                    </ul>
                </details>
            </li>
        </>
    );

    return (
        <div className="container relative mx-auto z-50">
            <div className="navbar absolute left-0 w-full text-white">
                <div className="navbar-start">
                    <img className="w-32" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu inter font-medium text-[17px] menu-horizontal px-1">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <details>
                                <summary>Services</summary>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Projects</a>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold border">
                        <CiCalendar className="text-2xl " />
                        <span> Get a Schedules</span>
                    </button>

                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Services</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Projects</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
