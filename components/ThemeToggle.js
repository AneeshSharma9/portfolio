import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch (e) {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      title={light ? "dark mode" : "light mode"}
      className="flex items-center gap-1.5 text-gruv-fg2 hover:text-gruv-yellow transition-colors"
    >
      {light ? (
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor">
          <path d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0zm0 2v10a5 5 0 0 1 0-10z" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor">
          <circle cx="7" cy="7" r="4" />
          <path d="M7 0h1v2H7zm0 12h1v2H7zM0 7h2v1H0zm12 0h2v1h-2zM2.8 2.8l.7-.7 1.4 1.4-.7.7zm6.3 6.3l.7-.7 1.4 1.4-.7.7zm1.4-7l.7.7-1.4 1.4-.7-.7zM3.5 9.1l.7.7-1.4 1.4-.7-.7z" />
        </svg>
      )}
    </button>
  );
}
