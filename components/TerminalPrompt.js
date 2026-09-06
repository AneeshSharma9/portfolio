export default function TerminalPrompt({
  text = "",
  className = "",
  showCursor = false,
  dim = true,
}) {
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
          {text}
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
