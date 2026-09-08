import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

import StatusBar from "../components/StatusBar";
import SideNav from "../components/SideNav";
import MobileNav from "../components/MobileNav";
import TerminalWindow from "../components/TerminalWindow";
import TerminalPrompt from "../components/TerminalPrompt";
import PixelDecor from "../components/PixelDecor";
import { data } from "../data/data.js";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gruv-bg1 noise-bg text-gruv-fg0 font-mono">
      <Head>
        <title>Aneesh Sharma — Projects</title>
        <meta
          name="description"
          content="Projects by Aneesh Sharma including ViewVault, Propello, Shazamify, Stock Dashboard, Web Excel, and Vet Chat."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aneesh Sharma — Projects" />
        <meta
          property="og:description"
          content="Projects by Aneesh Sharma including ViewVault, Propello, Shazamify, Stock Dashboard, Web Excel, and Vet Chat."
        />
        <meta property="og:url" content="https://aneeshsharma9.github.io/portfolio/projects" />
        <meta property="og:site_name" content="Aneesh Sharma" />
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

          <main>
            {/* ---------- /projects ---------- */}
            <TerminalWindow title="/projects">
              <TerminalPrompt text="ls ~/projects" />
              <div className="mt-4 divide-y divide-gruv-bg3">
                {data.map((item, index) => (
                  <div
                    key={item.id}
                    className="group py-5 transition-colors hover:bg-gruv-bg0/40 px-2 -mx-2"
                  >
                    <div className="grid grid-cols-[auto_1fr] sm:flex sm:items-center gap-x-3 sm:gap-6">
                      <span className="text-gruv-gray text-sm w-8 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-start sm:items-center gap-3 sm:gap-6">
                          {item.image && (
                            <div className="shrink-0">
                              <Image
                                src={item.image}
                                alt={`${item.name} screenshot`}
                                width={48}
                                height={48}
                                className="w-auto h-8 object-contain"
                              />
                            </div>
                          )}
                          <div className="min-w-0">
                            <a
                              href={item.live || item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 group/name"
                            >
                              <span className="text-gruv-fg0 font-medium group-hover:text-gruv-yellow transition-colors">
                                {item.name}
                              </span>
                              <span className="text-gruv-aqua opacity-0 -translate-x-1 group-hover/name:opacity-100 group-hover/name:translate-x-0 transition-all">
                                &#8594;
                              </span>
                            </a>
                            {item.description && (
                              <p className="text-gruv-fg2 text-[13px] leading-6 mt-1">
                                <span className="text-gruv-gray">#</span>{" "}
                                {item.description}
                              </p>
                            )}
                            {item.tech?.length > 0 && (
                              <div className="mt-2 flex flex-wrap gap-1.5">
                                {item.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="px-1.5 py-0.5 border border-gruv-bg3 text-gruv-aqua text-[11px] leading-4 rounded-sm"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                            <div className="flex items-center gap-3 text-xs mt-2 sm:hidden">
                              {item.live && (
                                <a
                                  href={item.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gruv-green hover:text-gruv-aqua transition-colors"
                                >
                                  [live]
                                </a>
                              )}
                              <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gruv-blue hover:text-gruv-aqua transition-colors"
                              >
                                [code]
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-3 text-xs sm:ml-auto sm:shrink-0">
                        {item.live && (
                          <a
                            href={item.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gruv-green hover:text-gruv-aqua transition-colors"
                          >
                            [live]
                          </a>
                        )}
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gruv-blue hover:text-gruv-aqua transition-colors"
                        >
                          [code]
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </main>

          <aside className="hidden lg:block">
            <TerminalWindow title="/status">
              <div className="text-sm space-y-2 text-gruv-fg1">
                <div className="flex justify-between">
                  <span className="text-gruv-gray">count</span>
                  <span className="text-gruv-yellow">{String(data.length).padStart(2, "0")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gruv-gray">open_source</span>
                  <span className="text-gruv-green">true</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gruv-gray">versions</span>
                  <span className="text-gruv-aqua">git</span>
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
        <span className="text-gruv-blue">~/projects</span>
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
