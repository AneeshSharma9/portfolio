import Head from 'next/head'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import Image from "next/image"
import signature from "../public/signature.png"
import signatureDark from "../public/signature-dark.png"

import { useState, useEffect } from "react"
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Home() {
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
                <title>Aneesh Sharma Contact</title>
            </Head>

            <main className='bg-white lg:px-35 dark:bg-gray-900'>
                <motion.div className='fixed bg-teal-500 top-0 left-0 right-0 h-3 origin-left z-50' style={{ scaleX }} />
                <section className='min-h-screen'>
                <nav className='py-2 2xl:py-7 mb-12 2xl:px-10 flex justify-between sticky top-0 z-20 w-full mx-auto bg-gray-100 dark:bg-gray-800 2xl:bg-transparent 2xl:dark:bg-transparent shadow-lg 2xl:shadow-none'>
                        <Image className="scale-50 fill-white md:scale-75" src={signatureSrc}></Image>
                        <ul className='flex items-center gap-7'>
                            <li><h2 onClick={toggleDarkMode} className='cursor-pointer text-2xl'>{symbol}</h2></li>
                            <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white' href="/">Home</Link></li>
                            <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white' href="/resume">Resume</Link></li>
                            <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white font-bold' href="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <motion.div className='max-w-sm md:max-w-5xl mx-auto' animate={inView0 ? "visible" : "hidden"}
                        variants={variants}
                        exit="hidden"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        ref={ref0}>
                        <div className='text-center py-10 '>
                            <div className='text-5xl pb-4 text-teal-500 font-bold md:text-6xl tracking-tight'>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Contact').start()
                                    }}
                                />
                            </div>
                        </div>

                        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
                            <a href="https://www.linkedin.com/in/aneeshsharma9/" target="_blank"><AiFillLinkedin /></a>
                            <a href="https://www.instagram.com/aneesh._.sharma/?hl=en" target="_blank"><AiFillInstagram /></a>
                            <a href="https://github.com/AneeshSharma9" target="_blank"><AiFillGithub /></a>
                        </div>

                        <div name='contact' className='w-full py-14 flex justify-center items-center'>
                            <form method='POST' action="https://api.web3forms.com/submit" className='flex flex-col max-w-[600px] w-full'>
                                <input type="hidden" name="access_key" value="ac473e28-2273-4ac0-bae0-c0f723d219cb" />
                                <div className='pb-8'>
                                    <p className='text-gray-600 dark:text-gray-300 font-bold'>Submit the form below or send me an email at <span className='text-teal-500 font-bold'>ansh993@gmail.com</span></p>
                                </div>
                                <input className='border-gray-500 dark:bg-gray-300 p-2 rounded-md' type="text" placeholder='Name' name='name'/>
                                <input className='my-4 p-2 border-gray-500 dark:bg-gray-300 rounded-md' type="email" placeholder='Email' name='email' />
                                <textarea className='border-gray-500 dark:bg-gray-300 p-2 rounded-md' name="message" rows="5" placeholder='Message'></textarea>
                                <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
                                <button className='dark:text-gray-300 border-gray-500 border-2 hover:bg-teal-500 hover:border-teal-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let&apos;s Collaborate</button>
                            </form>
                        </div>
                    </motion.div>
                </section>


            </main>
        </div>
    );
}