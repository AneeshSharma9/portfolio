import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { useState, useEffect } from "react";

import StatusBar from "../components/StatusBar";
import SideNav from "../components/SideNav";
import MobileNav from "../components/MobileNav";
import TerminalWindow from "../components/TerminalWindow";
import TerminalPrompt from "../components/TerminalPrompt";
import PixelDecor from "../components/PixelDecor";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gruv-bg1 noise-bg text-gruv-fg0 font-mono">
      <Head>
        <title>Aneesh Sharma — Contact</title>
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
            <TerminalWindow title="/contact">
              <TerminalPrompt text="mail --compose" />

              <p className="text-gruv-fg1 text-sm leading-7 mt-5">
                Submit the form below or send me an email at{" "}
                <a
                  href="mailto:ansh993@gmail.com"
                  className="text-gruv-green hover:text-gruv-aqua transition-colors"
                >
                  ansh993@gmail.com
                </a>
              </p>

              <div className="flex items-center gap-4 mt-4 text-2xl text-gruv-fg1">
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

              <div className="mt-6">
                {sent ? (
                  <div className="text-gruv-green text-sm flex items-center gap-2">
                    <span>&#10003;</span>
                    <span>message sent — thanks for reaching out.</span>
                  </div>
                ) : (
                  <form
                    method="POST"
                    action="https://api.web3forms.com/submit"
                    className="flex flex-col"
                    onSubmit={() => setSent(true)}
                  >
                    <input
                      type="hidden"
                      name="access_key"
                      value="ac473e28-2273-4ac0-bae0-c0f723d219cb"
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="flex-1">
                        <span className="text-gruv-orange text-xs">&#123; name &#125;</span>
                        <input
                          className="mt-1 w-full bg-gruv-bg0 border border-gruv-bg3 rounded px-3 py-2 text-gruv-fg0 text-sm focus:outline-none focus:border-gruv-yellow transition-colors"
                          type="text"
                          placeholder="your_name"
                          name="name"
                          required
                        />
                      </label>
                      <label className="flex-1">
                        <span className="text-gruv-orange text-xs">&#123; email &#125;</span>
                        <input
                          className="mt-1 w-full bg-gruv-bg0 border border-gruv-bg3 rounded px-3 py-2 text-gruv-fg0 text-sm focus:outline-none focus:border-gruv-yellow transition-colors"
                          type="email"
                          placeholder="you@example.com"
                          name="email"
                          required
                        />
                      </label>
                    </div>
                    <label className="mt-4 block">
                      <span className="text-gruv-orange text-xs">&#123; message &#125;</span>
                      <textarea
                        className="mt-1 w-full bg-gruv-bg0 border border-gruv-bg3 rounded px-3 py-2 text-gruv-fg0 text-sm focus:outline-none focus:border-gruv-yellow transition-colors"
                        name="message"
                        rows="6"
                        placeholder="type your message..."
                        required
                      ></textarea>
                    </label>
                    <input
                      type="hidden"
                      name="redirect"
                      value="https://web3forms.com/success"
                    />
                    <div className="mt-5 flex items-center gap-2">
                      <span className="text-gruv-yellow">&#62;</span>
                      <button
                        type="submit"
                        className="text-gruv-green hover:text-gruv-bg1 hover:bg-gruv-green border border-gruv-green px-5 py-2 rounded transition-colors text-sm"
                      >
                        send_message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </TerminalWindow>
          </main>

          <aside className="lg:sticky lg:top-20 hidden lg:block">
            <TerminalWindow title="/reply_time">
              <div className="text-sm text-gruv-fg1 leading-6">
                <p>
                  <span className="text-gruv-gray">average reply:</span>{" "}
                  <span className="text-gruv-aqua">&lt; 24h</span>
                </p>
                <p className="mt-2 text-gruv-fg2 text-[13px] leading-6">
                  Open to new opportunities in software engineering.
                </p>
              </div>
            </TerminalWindow>
          </aside>
        </div>
      </div>

      <PixelDecor className="fixed bottom-0 left-0 hidden lg:block" />

      <footer className="text-center text-xs text-gruv-gray py-8 font-mono">
        <span className="text-gruv-yellow">guest@aneesh</span>
        <span className="text-gruv-gray">:</span>
        <span className="text-gruv-blue">~/contact</span>
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
