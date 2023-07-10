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

import { useState, useEffect } from "react"
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { motion, useScroll, useSpring, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Home() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [darkMode, setDarkMode] = useState(false);
  const signatureSrc = darkMode ? signatureDark : signature;

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const [ref2, inView2] = useInView({
    threshold: 0.2,
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
        <title>Aneesh Sharma Portfolio</title>
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-35 dark:bg-gray-900'>
        <motion.div className='fixed bg-teal-500 top-0 left-0 right-0 h-3 origin-left z-50' style={{ scaleX }} />
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between sticky top-0 z-20'>
            <Image className="scale-75 fill-white" src={signatureSrc}></Image>
            <ul className='flex items-center gap-7'>
              <li><BsFillMoonStarsFill color="gray" onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl '></BsFillMoonStarsFill></li>
              <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white font-bold' href="/">Home</Link></li>
              <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white' href="/resume">Resume</Link></li>
              <li><Link className='text-black hover:border-b-2 hover:border-black hover:py-2 hover:dark:text-white mb-1 dark:text-white dark:hover:border-white' href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className='text-center p-10 '>
            <div className='text-5xl py-2 text-teal-500 font-bold md:text-6xl'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('aneesh sharma').start()
                }}
              />
            </div>
            <h3 className='text-2xl py-2 md:text-3xl font-medium dark:text-gray-200'>computer science student</h3>
            <p className='text-md font-medium py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-400'>I'm a <span className='text-teal-500'>junior</span> computer science student at the University of Maryland. With a solid foundation in programming languages like Java, Python, and C, I've honed my problem-solving skills through various personal coding projects and coursework. I'm passionate about tackling real-world challenges using innovative technology. From developing web and mobile applications to exploring artificial intelligence and data analysis, I'm eager to apply my knowledge and skills to make a meaningful impact.</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href="https://www.linkedin.com/in/aneeshsharma9/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/AneeshSharma9" target="_blank"><AiFillGithub /></a>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 z-10">
            <Image src={aneesh} layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* Second Page */}
        <section >
          <motion.div animate={inView ? "visible" : "hidden"}
            variants={variants}
            exit="hidden"
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}>
            <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>skills</h3>
            <p className='text-md py-2 leading-8 text-gray-800 font-medium dark:text-gray-400'>
              Computer science student looking for <span className='text-teal-500'>internships</span> to gain experience
            </p>
          </motion.div>

          <motion.div className='lg:flex gap-10 justify-center' animate={inView ? "visible" : "hidden"}
            variants={variants}
            exit="hidden"
            transition={{ duration: 1, ease: "easeOut" }}
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
            <div>
              <h3 className='text-3xl py-5 text-gray-800 font-bold md:text-4xl dark:text-gray-200'>portfolio</h3>
              <p className='text-gray-800 py-1 font-medium dark:text-gray-400'>Take a look at some of my projects</p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive"></Image>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
