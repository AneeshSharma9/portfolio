import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { useState, useEffect } from "react";
import Image from "next/image";
import aneesh from "../public/pfp.png";

import StatusBar from "../components/StatusBar";
import SideNav from "../components/SideNav";
import MobileNav from "../components/MobileNav";
import TerminalWindow from "../components/TerminalWindow";
import TerminalPrompt from "../components/TerminalPrompt";
import PixelLandscape from "../components/PixelLandscape";
import PixelDecor from "../components/PixelDecor";

const ABOUT = [
  ["Location", "Newark, DE (USA)"],
  ["Interests", "Coding · Gaming · Cars · Books · Movies"],
  ["Education", "B.S. in Computer Science"],
  ["Currently", "Software Engineer"],
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: "code",
    items: ["Python", "Java", "C++", "SQL", "JavaScript", "Rust", "Ruby", "R", "C#", "OCaml", "Kotlin"],
  },
  {
    title: "Frameworks & Tools",
    icon: "gear",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind", "Git", "Docker", "Linux", "Flask", "PyTorch"],
  },
  {
    title: "Other",
    icon: "layers",
    items: ["Problem Solving", "System Design", "APIs", "Databases", "Cloud (AWS)", "Android", "Unity"],
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gruv-bg1 noise-bg text-gruv-fg0 font-mono">
      <Head>
        <title>Aneesh Sharma — Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Aneesh Sharma, a software engineer specializing in backend and cloud integrations. Explore my projects, experience, and skills."
        />
        <meta
          name="keywords"
          content="Aneesh Sharma, software engineer, portfolio, backend developer, cloud integrations, full stack"
        />
        <meta name="author" content="Aneesh Sharma" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aneesh Sharma — Software Engineer" />
        <meta
          property="og:description"
          content="Portfolio of Aneesh Sharma, a software engineer specializing in backend and cloud integrations."
        />
        <meta property="og:url" content="https://aneeshsharma9.github.io/portfolio/" />
        <meta property="og:site_name" content="Aneesh Sharma" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Aneesh Sharma — Software Engineer" />
        <meta
          name="twitter:description"
          content="Portfolio of Aneesh Sharma, a software engineer specializing in backend and cloud integrations."
        />
        </Head>

      <div className="sticky top-0 z-40">
        <StatusBar />
        <MobileNav />
      </div>

      <div className="max-w-[1500px] mx-auto px-4 lg:px-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_260px] gap-5 items-start">
          {/* Left navigation */}
          <aside className="hidden lg:block lg:sticky lg:top-20">
            <SideNav />
          </aside>

          {/* Center content */}
          <main className="space-y-6">
            {/* ---------- /home ---------- */}
            <section id="home" className="scroll-mt-20">
              <TerminalWindow title="/home">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <TerminalPrompt text="whoami" />
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gruv-yellow mt-4">
                      Aneesh Sharma
                    </h1>
                    <p className="text-gruv-aqua text-xl md:text-2xl mt-2 font-medium">
                      Software Engineer
                    </p>
                    <p className="text-gruv-fg1 mt-6 text-[15px] leading-7">
                      I build things, solve problems, and enjoy making the
                      complex feel simple (or at least, functional).
                    </p>

                    <div className="flex items-center gap-4 mt-7 text-2xl text-gruv-fg1">
                      <a
                        href="https://www.linkedin.com/in/aneeshsharma9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gruv-blue transition-colors"
                        aria-label="LinkedIn"
                      >
                        <AiFillLinkedin />
                      </a>
                      <a
                        href="https://www.instagram.com/aneesh._.sharma/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gruv-purple transition-colors"
                        aria-label="Instagram"
                      >
                        <AiFillInstagram />
                      </a>
                      <a
                        href="https://github.com/AneeshSharma9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gruv-aqua transition-colors"
                        aria-label="GitHub"
                      >
                        <AiFillGithub />
                      </a>
                    </div>

                    <div className="mt-8">
                      <TerminalPrompt text="~/home" showCursor />
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-end">
                    <PixelLandscape className="w-full max-w-xs pixel-border rounded-md" />
                  </div>
                </div>
              </TerminalWindow>
            </section>

            {/* ---------- /about_me ---------- */}
            <section id="about" className="scroll-mt-20">
              <TerminalWindow title="/about_me">
                <TerminalPrompt text="cat about.txt" />
                <div className="mt-4 space-y-2 text-sm">
                  {ABOUT.map(([key, value]) => (
                    <div key={key} className="flex gap-3">
                      <span className="text-gruv-orange w-24 shrink-0">{key}:</span>
                      <span className="text-gruv-fg0">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gruv-fg2 text-sm leading-7 mt-5">
                  I&apos;m a full-time software engineer passionate about backend
                  cloud integrations, building impactful software, and growing
                  with every project I take on.
                </p>
              </TerminalWindow>
            </section>
          </main>

          {/* Right info column */}
          <aside className="space-y-6">
            {/* ---------- /profile ---------- */}
            <TerminalWindow title="/profile">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-28 h-28 overflow-hidden rounded-md border border-gruv-bg3 pixel-border">
                  <Image
                    src={aneesh}
                    alt="Aneesh Sharma"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <p className="text-gruv-yellow font-medium mt-4">Aneesh Sharma</p>
                <div className="flex items-center gap-1.5 mt-3 text-xs">
                  <span className="w-2 h-2 rounded-full bg-gruv-green"></span>
                  <span className="text-gruv-fg2">open to opportunities</span>
                </div>
              </div>
            </TerminalWindow>

            {/* ---------- /quote ---------- */}
            <TerminalWindow title="/quote" className="hidden lg:block">
              <TerminalPrompt text="fortune" showCursor={false} />
              <p className="text-gruv-fg1 text-sm leading-7 mt-3">
                “The best way to predict the future is to invent it.”
              </p>
              <p className="text-gruv-gray text-xs mt-3">— Alan Kay</p>
            </TerminalWindow>

            {/* ---------- /skills ---------- */}
            <section id="skills" className="scroll-mt-20">
              <TerminalWindow title="/skills">
                <TerminalPrompt text="skills --list" showCursor={false} />
                <div className="mt-4 space-y-5">
                  {SKILL_GROUPS.map((group) => (
                    <div key={group.title}>
                      <p className="text-gruv-orange text-sm font-medium mb-2">
                        &#123; {group.title} &#125;
                      </p>
                      <p className="text-gruv-fg1 text-[13px] leading-6">
                        {group.items.join("  ")}
                      </p>
                    </div>
                  ))}
                </div>
              </TerminalWindow>
            </section>

            {/* Social quick links (mobile) */}
            <div className="lg:hidden text-2xl flex gap-4 text-gruv-fg1 px-2">
              <a
                href="https://www.linkedin.com/in/aneeshsharma9/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gruv-blue"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/AneeshSharma9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gruv-aqua"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.instagram.com/aneesh._.sharma/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gruv-purple"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Desktop decorations - lower left */}
      <PixelDecor className="fixed bottom-0 left-0 hidden lg:block" />

      <footer className="text-center text-xs text-gruv-gray py-8 font-mono">
        <span className="text-gruv-yellow">guest@aneesh</span>
        <span className="text-gruv-gray">:</span>
        <span className="text-gruv-blue">~/desktop</span>
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
