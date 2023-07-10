'use client';

import Link from 'next/link';
import Head from 'next/head'
import Image from "next/image"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from "react"
import { Timeline } from 'flowbite-react';
import signature from "../public/signature.png"
import signatureDark from "../public/signature-dark.png"
import umdLogo from "../public/university-of-maryland-logo-vector-1.png"
import Typewriter from 'typewriter-effect';
import { motion, useScroll, useSpring } from "framer-motion";

export default function Resume() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const [darkMode, setDarkMode] = useState(false);
    const signatureSrc = darkMode ? signatureDark : signature; 

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Aneesh Sharma Resume</title>
            </Head>
            <main className='bg-white px-10 md:px-20 lg:px-35 dark:bg-gray-900'>
                <motion.div className='fixed bg-teal-500 top-0 left-0 right-0 h-3 origin-left z-50' style={{ scaleX }} />
                <section className='min-h-screen'>
                    <nav className='py-10 mb-12 flex justify-between sticky top-0'>
                        <Image className="scale-75" src={signatureSrc}></Image>
                        <ul className='flex items-center gap-7'>
                            <li><BsFillMoonStarsFill color="gray" onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl '></BsFillMoonStarsFill></li>
                            <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white' href="/">Home</Link></li>
                            <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white font-bold' href="/resume">Resume</Link></li>
                            <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white' href="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className='text-center p-10 '>
                        <div className='text-5xl py-2 text-teal-500 font-bold md:text-6xl'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('resume').start()
                                }}
                            />
                        </div>
                    </div>

                    <div className='max-w-4xl mx-auto '>
                        <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>professional experience</h3>
                        <Timeline >
                            <Timeline.Item>
                                <Timeline.Point />
                                <Timeline.Content>
                                    <Timeline.Time>
                                        June 2023 - Present
                                    </Timeline.Time>
                                    <Timeline.Title>
                                        Software Engineering Intern
                                    </Timeline.Title>
                                    <Timeline.Body>
                                        <ul className='px-5' style={{ listStyleType: 'circle' }}>
                                            <li>Designed and developed an Android application that streamlined the process of capturing and labeling pictures for employees, improving efficiency and accuracy in data management.</li>
                                            <li>Integrated Dropbox API into the Android app, automating the upload process and enabling seamless synchronization of labeled pictures to a shared Dropbox folder for convenient access and collaboration.</li>
                                            <li>Created Python scripts leveraging the Pandas and Excel libraries to automate various manual tasks for employees, significantly reducing the time and effort required for data processing and analysis by 95%.</li>
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
                                        Software Engineering Intern
                                    </Timeline.Title>
                                    <Timeline.Body>
                                        <ul className='px-5' style={{ listStyleType: 'circle' }}>
                                            <li>Developed automated test scripts using Java and Selenium WebDriver, enhancing the efficiency and accuracy of software testing processes.</li>
                                            <li>Collaborated with the development team to design and implement custom applications using ServiceNow and JavaScript, resulting in streamlined workflows and improved user experience.</li>
                                            <li>Maintained and expanded a comprehensive testing framework for web applications, ensuring high-quality software releases and reducing manual testing efforts by 90%.</li>
                                            <li>Utilized Tableau to analyze and visualize data related to service requests, enabling stakeholders to make data-driven decisions and identify areas for process optimization.</li>
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
                                        Programming Tutor
                                    </Timeline.Title>
                                    <Timeline.Body>
                                        <ul className='px-5' style={{ listStyleType: 'circle' }}>
                                            <li>Designed and delivered engaging computer science lessons to students of varying ages, introducing them to the fundamentals of coding through languages such as JavaScript, Python, Unity, Minecraft modding, and Scratch.</li>
                                            <li>Developed age-appropriate curriculum and instructional materials to facilitate hands-on learning experiences, ensuring students grasped coding concepts effectively while fostering creativity and problem-solving skills.</li>
                                            <li>Implemented innovative teaching methodologies, including project-based learning and interactive coding exercises, to make complex programming concepts accessible and engaging for students.</li>
                                        </ul>
                                    </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                        </Timeline>
                    </div>

                    <div className='max-w-4xl mx-auto '>
                        <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>education</h3>
                        <div className='flex items-center gap-5'>
                            <Image src={umdLogo} width={100} height={100}></Image>
                            <div className='dark:text-gray-400'>
                                <p>2021-2025</p>
                                <p>University of Maryland, College Park, Maryland</p>
                            </div>

                        </div>
                    </div>

                    <div className='max-w-4xl mx-auto'>
                        <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>coursework</h3>
                        <ul className='dark:text-gray-400'>
                            <li className='mb-3'>Object-Oriented Programming I</li>
                            <li className='mb-3'>Object-Oriented Programming II</li>
                            <li className='mb-3'>Introduction to Computer Systems</li>
                            <li className='mb-3'>Discrete Structures</li>
                            <li className='mb-3'>Organization of Programming Languages</li>
                            <li className='mb-3'>Algorithms</li>
                            <li className='mb-3'>Introduction to Compilers</li>
                            <li className='mb-3'>Introduction to Data Science</li>
                        </ul>
                    </div>

                    <div className='max-w-4xl mx-auto'>
                        <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>other</h3>
                        <ul className='dark:text-gray-400'>
                            <li className='mb-3'>Member of the Students for the Exploration and Development of Space @ UMD</li>
                            <li className='mb-3'>Member of the South Asian Student Association</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}