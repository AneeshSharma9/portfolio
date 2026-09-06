import { useState, useEffect } from "react";

export default function TerminalPrompt({
  text = "",
  className = "",
  showCursor = false,
  dim = true,
  typewriter = true,
  typeSpeed = 45,
}) {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (!typewriter || !text) {
      setTyped(text.length);
      return;
    }
    setTyped(0);
    const interval = setInterval(() => {
      setTyped((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, typeSpeed);
    return () => clearInterval(interval);
  }, [text, typewriter, typeSpeed]);

  return (
    <div className={`flex items-center font-mono ${className}`}>
      <span className="text-gruv-gray mr-2 text-sm">&#62;</span>
      {text && (
        <span
          className={
            dim
              ? "text-gruv-neutral text-[13px] tracking-tight"
              : "text-gruv-fg0"
          }
        >
          {text.slice(0, typed)}
        </span>
      )}
      {showCursor && (
        <>
          <span className="text-gruv-fg0">&nbsp;</span>
          <span className="terminal-cursor" />
        </>
      )}
    </div>
  );
}
