import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from "next/image"
import aneesh from "../public/pfp.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import signature from "../public/signature.png"
import signatureDark from "../public/signature-dark.png"
import { data } from "../data/data.js";

import { useState, useEffect } from "react"
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { motion, useScroll, useSpring, useAnimation } from "framer-motion";
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

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [ref2, inView2] = useInView({
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

  const project = data;

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Aneesh Sharma Portfolio</title>
      </Head>

      <main className='bg-white sm:px-5 md:px-20 lg:px-35 dark:bg-gray-900'>
        <motion.div className='fixed bg-teal-500 top-0 left-0 right-0 h-3 origin-left z-50' style={{ scaleX }} />
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between sticky top-0 z-20'>
            <Image className="scale-50 fill-white md:scale-75" src={signatureSrc}></Image>
            <ul className='flex items-center gap-7'>
              <li><h2 onClick={toggleDarkMode} className='cursor-pointer text-2xl'>{symbol}</h2></li>
              <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white font-bold' href="/">Home</Link></li>
              <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white' href="/resume">Resume</Link></li>
              <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white' href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <motion.div animate={inView0 ? "visible" : "hidden"}
            variants={variants}
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeOut" }}
            ref={ref0}>
            <div className='text-center py-10 '>
              <div className='text-5xl pb-4 text-teal-500 font-bold md:text-6xl tracking-tight'>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('aneesh sharma').start()
                  }}
                />
              </div>
              <h3 className='text-2xl md:text-3xl py-2 tracking-tight font-medium dark:text-gray-200'>computer science student</h3>
              <p className='text-md md:text-xl leading-8 font-medium py-5  text-gray-800 max-w-sm md:max-w-3xl mx-auto dark:text-gray-400 '>I'm a <span className='text-teal-500'>junior</span> computer science student at the University of Maryland, seeking internships to gain more knowledge. As an aspiring <span className='text-teal-500'>full stack developer</span> I have honed my expertise in a diverse range of programming languages, including Java, Python, JavaScript, and more.</p>
            </div>

            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
              <a href="https://www.linkedin.com/in/aneeshsharma9/" target="_blank"><AiFillLinkedin /></a>
              <a href="https://github.com/AneeshSharma9" target="_blank"><AiFillGithub /></a>
            </div>

            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 z-10">
              <Image src={aneesh} layout="fill" objectFit="cover" />
            </div>
          </motion.div>
        </section>

        <div className='py-10'></div>

        {/* Second Page */}
        <section className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <motion.div animate={inView ? "visible" : "hidden"}
            variants={variants}
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeOut" }}
            ref={ref}>
            <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>skills</h3>
            <p className='text-md md:text-xl py-2 leading-8 text-gray-800 font-medium dark:text-gray-400'>
              some of my most <span className='text-teal-500'>significant</span> skills and technologies
            </p>
          </motion.div>
          

          <motion.div className='lg:flex gap-10 justify-center' animate={inView ? "visible" : "hidden"}
            variants={variants}
            exit="hidden"
            transition={{ duration: 0.5, ease: "easeOut" }}
            ref={ref}>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1'>
              <div className='flex justify-center '>
                <Image src={code} width={100} height={100}></Image>
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Programming Languages</h3>

              <p className='text-gray-800 py-1 dark:text-gray-400'>Java / Kotlin</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>C</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Python</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>JavaScript</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1'>
              <div className='flex justify-center '>
                <Image src={design} width={100} height={100}></Image>
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Technologies</h3>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Pandas</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>React</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Flask</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Node</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1'>
              <div className='flex justify-center '>
                <Image src={consulting} width={100} height={100}></Image>
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Tools</h3>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Visual Studio Code</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>GitHub</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Amazon Web Services</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Android Studio</p>
            </div>
          </motion.div>
        </section>

        <section>
          <motion.div animate={inView2 ? "visible" : "hidden"}
            variants={variants}
            exit="hidden"
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref2}>
            <div name='work' className='w-full md:h-screen text-gray-300'>
              <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=''>
                  <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>projects</h3>
                  <p className='text-md md:text-xl py-2 leading-8 text-gray-800 font-medium dark:text-gray-400'>check out some of my recent <span className='text-teal-500'>personal projects</span></p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-5">
                  {project.map((item, index) => (
                    <div
                      key={index}
                      style={{}}
                      className="shadow-lg p-10 rounded-xl group container justify-center text-center items-center mx-auto content-div dark:bg-gray-800">
                      <div className="" >
                        <span className="text-2xl font-bold dark:text-gray-300 tracking-wider text-gray-800 py-1 px-1" >
                          {item.name}
                        </span>
                        <Image src={item.image}></Image>
                        <div className=" text-center ">
                          <a href={item.github} target="_blank">
                            <button className="hover:bg-gray-200 dark:hover:bg-gray-600 shadow-lg text-center rounded-lg px-4 py-3 m-2 bg-gray-100 dark:bg-gray-700 text-gray-600  dark:text-gray-400 font-bold text-lg">
                              Code
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}