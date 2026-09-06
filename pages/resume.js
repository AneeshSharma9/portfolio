import Head from "next/head";
import { useState, useEffect } from "react";

import StatusBar from "../components/StatusBar";
import SideNav from "../components/SideNav";
import MobileNav from "../components/MobileNav";
import TerminalWindow from "../components/TerminalWindow";
import TerminalPrompt from "../components/TerminalPrompt";
import PixelDecor from "../components/PixelDecor";

const EXPERIENCE = [
  {
    role: "Software Developer - Integrations",
    company: "W.L. Gore & Associates",
    companyUrl: "https://www.gore.com",
    period: "June 2025 - Present",
    points: [
      "Design and build backend cloud integrations connecting Gore's internal systems, using Azure Function Apps to orchestrate data flows between disparate platforms.",
      "Develop integration services primarily in TypeScript, with Python handling data processing and automation across pipelines.",
      "Work with AI agents running in production workflows, integrating and tuning them to automate and streamline business processes at scale.",
      "Collaborate with cross-functional teams to design scalable, observable integration architecture and monitor production health.",
    ],
  },
  {
    role: "IT Application Development Intern",
    company: "W.L. Gore & Associates",
    companyUrl: "https://www.gore.com",
    period: "June 2024 - November 2024",
    points: [
      "Developed Python-based IT applications for the Fuel Cell Team, automating data integration and analysis processes for Gore Clean Energy initiatives.",
      "Streamlined the data processing workflow by transforming raw CSV data into actionable insights, reducing manual effort and processing time by 95%.",
      "Created a database system to store and compare previously analyzed results with newer data, facilitating identification of significant changes and trends over time.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Medley Networks Inc.",
    companyUrl: "https://www.medleynetworks.com",
    period: "June 2023 - May 2024",
    points: [
      "Designed and developed an Android application that streamlined the process of capturing and labeling pictures for employees, improving efficiency and accuracy in data management.",
      "Integrated Dropbox API into the Android app, automating the upload process and enabling seamless synchronization of labeled pictures to a shared Dropbox folder.",
      "Created Python scripts leveraging the Pandas and Excel libraries to automate various manual tasks, reducing time and effort required for data processing by 95%.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Prudential Financial",
    companyUrl: "https://www.prudential.com",
    period: "September 2020 - August 2021",
    points: [
      "Developed automated test scripts using Java and Selenium WebDriver, enhancing the efficiency and accuracy of software testing processes.",
      "Collaborated with the development team to design and implement custom applications using ServiceNow and JavaScript, resulting in streamlined workflows.",
      "Maintained and expanded a comprehensive testing framework for web applications, reducing manual testing efforts by 90%.",
      "Utilized Tableau to analyze and visualize data related to service requests, enabling stakeholders to make data-driven decisions.",
    ],
  },
  {
    role: "Programming Tutor",
    company: "Code Ninjas",
    companyUrl: "https://www.codeninjas.com",
    period: "July 2020 - August 2021",
    points: [
      "Designed and delivered engaging computer science lessons to students of varying ages, introducing coding fundamentals through JavaScript, Python, Unity, Minecraft modding, and Scratch.",
      "Developed age-appropriate curriculum and instructional materials to facilitate hands-on learning experiences.",
      "Implemented innovative teaching methodologies, including project-based learning and interactive coding exercises.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Maryland, College Park, Maryland",
    period: "2021-2025",
    tag: "UMD",
  },
  {
    degree: "Academy of Computer & Information Sciences",
    school: "Morris County School of Technology, Denville, New Jersey",
    period: "2017-2021",
    tag: "MCST",
  },
];

const COURSES = [
  ["Object-Oriented Programming I", "CMSC131 - UMD"],
  ["Object-Oriented Programming II", "CMSC132 - UMD"],
  ["Introduction to Computer Systems", "CMSC216 - UMD"],
  ["Discrete Structures", "CMSC250 - UMD"],
  ["Organization of Programming Languages", "CMSC330 - UMD"],
  ["Algorithms", "CMSC351 - UMD"],
  ["Introduction to Compilers", "CMSC430 - UMD"],
  ["Introduction to Data Science", "CMSC320 - UMD"],
  ["Advanced Data Structures", "CMSC420 - UMD"],
  ["Computer Vision", "CMSC426 - UMD"],
  ["AP Computer Science Principles", "MCST"],
  ["AP Computer Science A", "MCST"],
];

const OTHER = [
  ["Hardware Automation Engineer", "CubeSat Team, SEDS @ UMD"],
  ["Member", "South Asian Student Association @ UMD"],
  ["Head of Logistics", "HackMCST @ MCST"],
];

export default function Resume() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gruv-bg1 noise-bg text-gruv-fg0 font-mono">
      <Head>
        <title>Aneesh Sharma — Resume</title>
      </Head>

      <div className="sticky top-0 z-40">
        <StatusBar />
        <MobileNav />
      </div>

      <div className="max-w-[1500px] mx-auto px-4 lg:px-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_260px] gap-5 items-start">
          <aside className="hidden lg:block lg:sticky lg:top-20">
            <SideNav />
          </aside>

          <main className="space-y-6">
            {/* /experience */}
            <TerminalWindow title="/experience">
              <TerminalPrompt text="cat experience.txt" />
              <div className="mt-8 space-y-10">
                {EXPERIENCE.map((job) => (
                  <div
                    key={job.company}
                    className="border-b border-gruv-bg3 pb-10 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h3 className="text-gruv-fg0 font-medium">
                        <span className="text-gruv-yellow">{job.role}</span>
                        <span className="text-gruv-fg2"> @ </span>
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gruv-blue hover:text-gruv-aqua transition-colors"
                        >
                          {job.company}
                        </a>
                      </h3>
                      <span className="text-gruv-gray text-xs shrink-0">
                        [{job.period}]
                      </span>
                    </div>
                    <ul className="mt-5 space-y-3 text-gruv-fg1 text-[15px] leading-7">
                      {job.points.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-gruv-green shrink-0 mt-1">&#9656;</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TerminalWindow>

            {/* /education */}
            <TerminalWindow title="/education">
              <TerminalPrompt text="cat education.txt" />
              <div className="mt-4 space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.school} className="flex gap-3 text-sm">
                    <span className="text-gruv-orange shrink-0">&#9679;</span>
                    <div>
                      <p className="text-gruv-fg0 font-medium">
                        {edu.degree}{" "}
                        <span className="text-gruv-gray">({edu.period})</span>
                      </p>
                      <p className="text-gruv-fg2">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TerminalWindow>

            {/* /coursework */}
            <TerminalWindow title="/coursework">
              <TerminalPrompt text="ls coursework" />
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {COURSES.map(([name, code]) => (
                  <div key={name} className="flex justify-between gap-3 border-b border-gruv-bg3 pb-2">
                    <span className="text-gruv-fg1">{name}</span>
                    <span className="text-gruv-aqua shrink-0">{code}</span>
                  </div>
                ))}
              </div>
            </TerminalWindow>

            {/* /other */}
            <TerminalWindow title="/other">
              <TerminalPrompt text="cat other.txt" />
              <div className="mt-4 space-y-3">
                {OTHER.map(([role, org]) => (
                  <div key={role} className="flex gap-3 text-sm">
                    <span className="text-gruv-purple shrink-0">&#9656;</span>
                    <div>
                      <p className="text-gruv-fg0 font-medium">{role}</p>
                      <p className="text-gruv-fg2">{org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </main>

          <aside className="lg:sticky lg:top-20 hidden lg:block">
            <TerminalWindow title="/status">
              <div className="text-sm space-y-2 text-gruv-fg1">
                <div className="flex justify-between">
                  <span className="text-gruv-gray">role</span>
                  <span>Software Engineer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gruv-gray">status</span>
                  <span className="text-gruv-green">open</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gruv-gray">base</span>
                  <span>Newark, DE</span>
                </div>
              </div>
            </TerminalWindow>
          </aside>
        </div>
      </div>

      <PixelDecor className="fixed bottom-0 left-0 hidden lg:block" />

      <footer className="text-center text-xs text-gruv-gray py-8 font-mono">
        <span className="text-gruv-yellow">guest@aneesh</span>
        <span className="text-gruv-gray">:</span>
        <span className="text-gruv-blue">~/experience</span>
        <span className="text-gruv-gray">$ </span>
        <span className="terminal-cursor-static" />
        <br />
        <span className="mt-2 inline-block text-gruv-neutral">
          © {mounted ? new Date().getFullYear() : ""} Aneesh Sharma
        </span>
      </footer>
    </div>
  );
}
