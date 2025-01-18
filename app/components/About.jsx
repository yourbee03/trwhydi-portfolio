import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"

function About({ isDarkMode }) {
  return (
    <div id="about" className="w-full px-6 md:px-[12%] py-10 scroll-mt-20">
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        className="mb-10 text-center"
        >
        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        className="mb-2 text-lg font-Ovo"
        >
        Introduction
        </motion.h4>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.6, duration: 0.5}}
        className="text-3xl md:text-5xl font-Ovo"
        >
        About Me
        </motion.h2>
        </motion.div>

        <motion.div 
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.7}}
        className="flex flex-col lg:flex-row items-center gap-10 md:gap-20 my-10 md:my-20"
        >

        <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-48 sm:w-64 md:w-80 rounded-3xl max-w-none"
        >
        <Image
            src={assets.user_image}
            alt="Tri Wahyudi"
            className="w-full rounded-3xl shadow-lg"
        />
        </motion.div>


        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1"
        >
        <motion.p 
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}
        className="mb-10 max-w-2xl font-Ovo text-sm sm:text-base"
        >
        Hello, my name is Tri Wahyudi, a Software Engineering Technology student at Politeknik Negeri Padang. 
        With a strong foundation in Information Technology, I am passionate about creating innovative solutions in Cloud Computing, Web Development, Mobile Development, UI/UX Design, and Database Management. 
        I am currently pursuing my diploma while actively contributing to various academic and professional projects.
        </motion.p>


        <motion.ul 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.2, duration: 0.7}}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl"
        >
        {infoList.map(({ icon, iconDark, title, description }, index) => (
        <motion.li
        key={index}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
        >
            <Image
            src={isDarkMode ? iconDark : icon}
            alt={title}
            className="w-6 sm:w-7 mt-2"
            />
            <h3 className="my-2 text-sm sm:text-base font-semibold dark:text-white">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-white/80">{description}</p>
        </motion.li>
        ))}
        </motion.ul>


        <motion.h4 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.4, duration: 0.7}}
            className="my-6 text-gray-700 font-Ovo text-sm sm:text-base dark:text-white"
        >
            Tools I Use
        </motion.h4>
        <motion.ul 
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: 0.5, duration: 0.7}}
        className="flex flex-wrap items-center gap-3 sm:gap-5"
        >
            {toolsData.map((tool, index) => (
            <motion.li
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
                <Image src={tool} alt="Tool" className="w-6 sm:w-8" />
            </motion.li>
            ))}
        </motion.ul>
        </motion.div>
    </motion.div>
    </div>
    );
}

export default About;
