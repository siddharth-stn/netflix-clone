import Netflix_Icon from "../assets/images/netflix.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`transition-colors duration-500 navbar fixed z-50 w-full top-0 left-0 flex items-center text-white px-4 md:px-8 lg:px-15 py-4.5 bg-linear-to-b from-black/60 via-black/40 to-transparent ${isScrolled ? "bg-black" : "bg-transparent"}`}
        >
            <div className="logo w-16 md:w-20 lg:w-22">
                <img src={Netflix_Icon} alt="Logo" />
            </div>

            {/* Desktop Navigation */}
            <nav className="navigation-wrapper ml-4 md:ml-8 hidden lg:block">
                <ul className="flex gap-2 md:gap-4 text-sm md:text-base">
                    <li className="hover:text-gray-300 cursor-pointer transition-colors">
                        Home
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition-colors">
                        Shows
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition-colors">
                        Movies
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition-colors">
                        Games
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition-colors">
                        New & Popular
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition-colors">
                        MyList
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer transition-colors">
                        Browse by Languages
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="ml-auto lg:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <FontAwesomeIcon
                    icon={isMobileMenuOpen ? faXmark : faBars}
                    className="text-xl"
                />
            </button>

            {/* Desktop Menu Buttons */}
            <div className="menu-btns hidden lg:flex items-center ml-auto gap-3">
                <div className="search">
                    <a
                        href="#"
                        className="hover:text-gray-300 transition-colors"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                </div>
                <div>
                    <span className="hover:text-gray-300 cursor-pointer transition-colors">
                        Children
                    </span>
                </div>
                <div className="bell-icon">
                    <a
                        href="#"
                        className="hover:text-gray-300 transition-colors"
                    >
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                </div>
                <div className="profile-btn flex items-center">
                    <div>
                        <a href="#">
                            <div className="bg-yellow-400 rounded-md w-8 h-8 cursor-pointer relative hover:opacity-80 transition-opacity">
                                <div className="left-eye bg-white rounded-[50%] w-1 h-1 absolute top-2 left-1.5"></div>
                                <div className="right-eye bg-white rounded-[50%] w-1 h-1 absolute top-2 right-1.5"></div>
                                <div className="absolute bottom-2.5 right-0.5 w-4 h-2 border-b-2 border-white rounded-b-xl bg-transparent"></div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faCaretDown} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black z-50 pt-20 px-4 lg:hidden">
                    <div className="flex flex-col gap-6 text-white">
                        <div className="flex justify-between items-center">
                            <div className="logo w-16">
                                <img src={Netflix_Icon} alt="Logo" />
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white"
                            >
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    className="text-xl"
                                />
                            </button>
                        </div>

                        <nav className="navigation-wrapper">
                            <ul className="flex flex-col gap-4 text-lg">
                                <li className="hover:text-gray-300 cursor-pointer transition-colors">
                                    Home
                                </li>
                                <li className="hover:text-gray-300 cursor-pointer transition-colors">
                                    Shows
                                </li>
                                <li className="hover:text-gray-300 cursor-pointer transition-colors">
                                    Movies
                                </li>
                                <li className="hover:text-gray-300 cursor-pointer transition-colors">
                                    Games
                                </li>
                                <li className="hover:text-gray-300 cursor-pointer transition-colors">
                                    New & Popular
                                </li>
                                <li className="hover:text-gray-300 cursor-pointer transition-colors">
                                    MyList
                                </li>
                                <li className="hover:text-gray-300 cursor-pointer transition-colors">
                                    Browse by Languages
                                </li>
                            </ul>
                        </nav>

                        <div className="menu-btns flex flex-col gap-4 border-t border-gray-700 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="search">
                                    <a
                                        href="#"
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        <FontAwesomeIcon
                                            icon={faMagnifyingGlass}
                                            className="text-lg"
                                        />
                                    </a>
                                </div>
                                <span className="hover:text-gray-300 cursor-pointer transition-colors">
                                    Children
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bell-icon">
                                    <a
                                        href="#"
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        <FontAwesomeIcon
                                            icon={faBell}
                                            className="text-lg"
                                        />
                                    </a>
                                </div>
                                <div className="profile-btn flex items-center gap-2">
                                    <div className="bg-yellow-400 rounded-md w-8 h-8 cursor-pointer relative hover:opacity-80 transition-opacity">
                                        <div className="left-eye bg-white rounded-[50%] w-1 h-1 absolute top-2 left-1.5"></div>
                                        <div className="right-eye bg-white rounded-[50%] w-1 h-1 absolute top-2 right-1.5"></div>
                                        <div className="absolute bottom-2.5 right-0.5 w-4 h-2 border-b-2 border-white rounded-b-xl bg-transparent"></div>
                                    </div>
                                    <FontAwesomeIcon
                                        icon={faCaretDown}
                                        className="hover:text-gray-300 transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navigation;
