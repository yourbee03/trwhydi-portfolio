import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="Header Background" className="w-full" priority />
            </div>

            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all ${
                    isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ""
                }`}
            >
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" priority />
                </a>

                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all ${
                        isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
                    }`}
                >
                    <li><a className="font-Ovo" href="#top">Home</a></li>
                    <li><a className="font-Ovo" href="#about">About me</a></li>
                    <li><a className="font-Ovo" href="#services">Service</a></li>
                    <li><a className="font-Ovo" href="#work">My Work</a></li>
                    <li><a className="font-Ovo" href="#contact">Contact me</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={()=> setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Dark Mode Toggle" className="w-6" />
                    </button>
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
                    >
                        Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow Icon" className="w-3" />
                    </a>
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu Icon" className="w-6" />
                    </button>
                </div>

                <ul
                    className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 dark:bg-darkHover dark:text-white ${
                        isMenuOpen ? 'right-0' : '-right-64'
                    }`}
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Menu Icon" className="w-5 cursor-pointer" />
                    </div>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#services">Service</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
