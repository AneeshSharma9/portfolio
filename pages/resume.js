'use client';

import Link from 'next/link';
import Head from 'next/head'
import Image from "next/image"
import { useState, useEffect } from "react"
import { Timeline } from 'flowbite-react';
import signature from "../public/signature.png"
import signatureDark from "../public/signature-dark.png"
import umdLogo from "../public/university-of-maryland-logo-vector-1.png"
import mcstLogo from "../public/mcst.logo.png"
import Typewriter from 'typewriter-effect';
import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Resume() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        themeCheck();
    }, [darkMode]);

    useEffect(() => {
        themeCheck();
    }, []);

    const themeCheck = () => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    }

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        localStorage.theme = newMode ? "dark" : "light";
        setDarkMode(newMode);
    };

    const symbol = darkMode ? "🌙" : "☀️";

    const signatureSrc = darkMode ? signatureDark : signature;

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [ref0, inView0] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const [ref1, inView1] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const [ref2, inView2] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const [ref3, inView3] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50
        }
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Aneesh Sharma Resume</title>
            </Head>
            <main className='bg-white lg:px-35 dark:bg-gray-900'>
                <motion.div className='fixed bg-teal-500 top-0 left-0 right-0 h-3 origin-left z-50' style={{ scaleX }} />
                <section className='min-h-screen'>
                    <nav className='md:flex py-2 2xl:py-7 mb-12 2xl:px-10 md:justify-between sticky top-0 z-20 mx-auto bg-gray-100 dark:bg-gray-800 shadow-lg 2xl:bg-transparent 2xl:dark:bg-transparent 2xl:shadow-none'>
                        <div className='flex justify-center md:justify-normal'>
                            <Image className="scale-50 md:scale-75" src={signatureSrc} alt="signatureLogo"></Image>
                        </div>

                        <ul className='flex items-center gap-7 justify-center px-5'>
                            <li><h2 onClick={toggleDarkMode} className='cursor-pointer text-2xl'>{symbol}</h2></li>
                            <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white' href="/">Home</Link></li>
                            <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white font-bold' href="/resume">Resume</Link></li>
                            <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white' href="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <motion.div animate={inView0 ? "visible" : "hidden"}
                        variants={variants}
                        exit="hidden"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        ref={ref0}>
                        <div className='text-center p-10 '>
                            <div className='text-5xl py-2 text-teal-500 font-bold md:text-6xl tracking-tight'>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString('resume').start()
                                    }}
                                />
                            </div>
                        </div>

                        <div className='max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-5xl mx-auto'>
                            <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200 max-w-sm md:max-w-5xl mx-auto'>professional experience</h3>
                            <div className='shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800'>
                                <Timeline className='max-w-sm md:max-w-5xl mx-auto '>
                                    <Timeline.Item>
                                        <Timeline.Point />
                                        <Timeline.Content>
                                            <Timeline.Time>
                                                June 2023 - Present
                                            </Timeline.Time>
                                            <Timeline.Title>
                                                Software Engineer Intern @ <span className='text-cyan-400 font-bold'>Medley Networks Inc.</span>
                                            </Timeline.Title>
                                            <Timeline.Body>
                                                <ul className='px-5 text-md text-gray-800 dark:text-gray-400 leading-7 ' style={{ listStyleType: 'circle' }}>
                                                    <li>Designed and developed an <span className='text-teal-500 font-bold'>Android application</span> that streamlined the process of capturing and labeling pictures for employees, improving efficiency and accuracy in data management.</li>
                                                    <li>Integrated Dropbox API into the Android app, automating the upload process and enabling seamless synchronization of labeled pictures to a shared Dropbox folder for convenient access and collaboration.</li>
                                                    <li>Created <span className='text-teal-500 font-bold'>Python scripts</span> leveraging the Pandas and Excel libraries to automate various manual tasks for employees, significantly reducing the time and effort required for data processing and analysis by <span className='text-teal-500 font-bold'>95%</span>.</li>
                                                </ul>
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <Timeline.Point />
                                        <Timeline.Content>
                                            <Timeline.Time>
                                                September 2020 - August 2021
                                            </Timeline.Time>
                                            <Timeline.Title>
                                                Software Engineer Intern @ <span className='text-cyan-400 font-bold'>Prudential Financial</span>
                                            </Timeline.Title>
                                            <Timeline.Body>
                                                <ul className='px-5 text-gray-800 dark:text-gray-400 leading-7' style={{ listStyleType: 'circle' }}>
                                                    <li>Developed automated test scripts using <span className='text-teal-500 font-bold'>Java and Selenium WebDriver</span>, enhancing the efficiency and accuracy of software testing processes.</li>
                                                    <li>Collaborated with the development team to design and implement custom applications using <span className='text-teal-500 font-bold'>SerivceNow and JavaScript</span>, resulting in streamlined workflows and improved user experience.</li>
                                                    <li>Maintained and expanded a comprehensive testing framework for web applications, ensuring high-quality software releases and reducing manual testing efforts by <span className='text-teal-500 font-bold'>90%</span>.</li>
                                                    <li>Utilized <span className='text-teal-500 font-bold'>Tableau</span> to analyze and visualize data related to service requests, enabling stakeholders to make data-driven decisions and identify areas for process optimization.</li>
                                                </ul>
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <Timeline.Point />
                                        <Timeline.Content>
                                            <Timeline.Time>
                                                July 2020 - August 2021
                                            </Timeline.Time>
                                            <Timeline.Title>
                                                Programming Tutor @ <span className='text-cyan-400 font-bold'>Code Ninjas</span>
                                            </Timeline.Title>
                                            <Timeline.Body>
                                                <ul className='px-5 text-gray-800 dark:text-gray-400 leading-7' style={{ listStyleType: 'circle' }}>
                                                    <li>Designed and delivered engaging computer science lessons to students of varying ages, introducing them to the fundamentals of coding through languages such as <span className='text-teal-500 font-bold'>JavaScript</span>, <span className='text-teal-500 font-bold'>Python</span>, <span className='text-teal-500 font-bold'>Unity</span>, Minecraft modding, and Scratch.</li>
                                                    <li>Developed age-appropriate curriculum and instructional materials to facilitate hands-on learning experiences, ensuring students grasped coding concepts effectively while fostering creativity and problem-solving skills.</li>
                                                    <li>Implemented innovative teaching methodologies, including project-based learning and interactive coding exercises, to make complex programming concepts accessible and engaging for students.</li>
                                                </ul>
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                        </div>
                    </motion.div>

                    <div className='py-10'></div>

                    <motion.div className='max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-5xl mx-auto' animate={inView1 ? "visible" : "hidden"}
                        variants={variants}
                        exit="hidden"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        ref={ref1}>
                        <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>education</h3>
                        <div className='flex items-center gap-5 py-5'>
                            <Image src={umdLogo} width={100} height={100} alt='umdlogo'></Image>
                            <div className='text-gray-800 dark:text-gray-400 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 flex-1'>
                                <p className='font-bold'>Bachelor of Computer Science</p>
                                <p>2021-2025</p>
                                <p>University of Maryland, College Park, Maryland</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 py-5'>
                            <Image src={mcstLogo} width={100} height={100} alt='msctlogo'></Image>
                            <div className='text-gray-800 dark:text-gray-400 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 flex-1'>
                                <p className='font-bold'>Academy of Computer & Information Sciences</p>
                                <p>2017-2021</p>
                                <p>Morris County School of Technology, Denville, New Jersey</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className='py-10'></div>

                    <motion.div className='max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-5xl mx-auto' animate={inView2 ? "visible" : "hidden"}
                        variants={variants}
                        exit="hidden"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        ref={ref2}>
                        <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>coursework</h3>
                        <ul className='text-gray-800 dark:text-gray-400 font-bold'>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 leading-8'>Object-Oriented Programming I<p className='font-normal'>CMSC131 - UMD</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 leading-8'>Object-Oriented Programming II<p className='font-normal'>CMSC132 - UMD</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 leading-8'>Introduction to Computer Systems<p className='font-normal'>CMSC216 - UMD</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 leading-8'>Discrete Structures<p className='font-normal'>CMSC250 - UMD</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 leading-8'>Organization of Programming Languages<p className='font-normal'>CMSC330 - UMD</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 leading-8'>Algorithms<p className='font-normal'>CMSC351 - UMD</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 leading-8'>Introduction to Compilers<p className='font-normal'>CMSC430 - UMD</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 leading-8'>Introduction to Data Science<p className='font-normal'>CMSC320 - UMD</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 leading-8'>AP Computer Science Principles<p className='font-normal'>MCST</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800 leading-8'>AP Computer Science A<p className='font-normal'>MCST</p></li>
                        </ul>
                    </motion.div>

                    <div className='py-10'></div>

                    <motion.div className='max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-5xl mx-auto' animate={inView3 ? "visible" : "hidden"}
                        variants={variants}
                        exit="hidden"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        ref={ref3}>
                        <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>other</h3>
                        <ul className='text-gray-800 dark:text-gray-400 font-bold'>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800'>Avionics Engineer | CubeSat Team<p className='font-normal'>Students for the Exploration and Development of Space @ UMD</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800'>Member | South Asian Student Association<p className='font-normal'>SASA @ UMD</p></li>
                            <li className='mb-3 shadow-lg p-3 rounded-xl my-3 dark:bg-gray-800'>Head of Logistics | HackMCST<p className='font-normal'>Hackathon @ MCST</p></li>
                        </ul>
                    </motion.div>
                    <div className='py-10'></div>

                </section>
            </main>
        </div>
    );
}
