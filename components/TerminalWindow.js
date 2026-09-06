import { useCallback, useState } from "react";
import { motion } from "framer-motion";

export default function TerminalWindow({
  title,
  children,
  className = "",
  dots = true,
  animate = true,
}) {
  const [minimized, setMinimized] = useState(false);
  const toggle = useCallback(() => setMinimized((m) => !m), []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    },
    [toggle]
  );

  const content = (
    <div
      className={`bg-gruv-bg1 border border-gruv-bg3 rounded-md pixel-border overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between px-4 h-9 border-b border-gruv-bg3 bg-gruv-bg0">
        <div className="flex items-center gap-2">
          <span className="text-gruv-yellow">&#62;</span>
          <span className="text-gruv-aqua text-sm font-medium tracking-tight">
            {title}
          </span>
        </div>
        {dots && (
          <div className="flex items-center gap-1.5">
            {["dot-red", "dot-yellow", "dot-green"].map((color) => (
              <button
                key={color}
                type="button"
                onClick={toggle}
                onKeyDown={handleKeyDown}
                aria-label="Minimize / restore window"
                aria-expanded={!minimized}
                className={`w-2.5 h-2.5 rounded-full border border-black/10 ${color} transition hover:opacity-80 hover:scale-110 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gruv-fg2`}
              />
            ))}
          </div>
        )}
      </div>
      <motion.div
        initial={false}
        animate={
          minimized
            ? { height: 0, opacity: 0 }
            : { height: "auto", opacity: 1 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-5 md:p-6">{children}</div>
      </motion.div>
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  );
}
