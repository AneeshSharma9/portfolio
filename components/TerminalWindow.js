import { motion } from "framer-motion";

export default function TerminalWindow({
  title,
  children,
  className = "",
  dots = true,
  animate = true,
}) {
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
            <span className="w-2.5 h-2.5 rounded-full bg-gruv-bg3 border border-gruv-neutral/30"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gruv-bg3 border border-gruv-neutral/30"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gruv-bg3 border border-gruv-neutral/30"></span>
          </div>
        )}
      </div>
      <div className="p-5 md:p-6">{children}</div>
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
