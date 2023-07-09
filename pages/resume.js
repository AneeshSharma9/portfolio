'use client';

import Link from 'next/link';
import Head from 'next/head'
import Image from "next/image"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from "react"
import { Timeline } from 'flowbite-react';
import umdLogo from "../public/university-of-maryland-logo-vector-1.png"



export default function Resume() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Aneesh Sharma Resume</title>
            </Head>
            <main className='bg-white px-10 md:px-20 lg:px-35 dark:bg-gray-900'>
                <section className='min-h-screen'>
                    <nav className='py-10 mb-12 flex justify-between'>
                        <h1 className='text-xl font-bold dark:text-gray-200'>Aneesh Sharma</h1>
                        <ul className='flex items-center'>
                            <li><BsFillMoonStarsFill color="gray" onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl '></BsFillMoonStarsFill></li>
                            <li><Link className='bg-teal-500 text-white px-4 py-2 rounded-md ml-8' href="/">Home</Link></li>
                            <li><Link className='bg-teal-500 text-white px-4 py-2 rounded-md ml-8' href="/resume">Resume</Link></li>
                            <li><Link className='bg-teal-500 text-white px-4 py-2 rounded-md ml-8' href="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <div className='text-center p-10 '>
                        <h2 className='text-5xl py-2 text-teal-500 font-bold md:text-6xl'>Resume</h2>
                    </div>

                    <div className='max-w-4xl mx-auto '>
                        <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>Professional Experience</h3>
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
                        <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>Education</h3>
                        <div className='flex justify-between'>
                            <Image src={umdLogo} width={100} height={100}></Image>
                            <p>2021-2025</p>
                            <p>University of Maryland, College Park, Maryland</p>
                        </div>
                    </div>

                    <div className='max-w-4xl mx-auto'>
                        <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>Coursework</h3>
                        <ul>
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
                </section>
            </main>
        </div>
    );
}