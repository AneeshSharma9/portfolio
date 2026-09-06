import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-9 bg-gruv-bg1 border-b border-gruv-bg3 flex items-center justify-between px-4 text-xs text-gruv-fg2">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="text-gruv-green">&#9679;</span>
          <span className="text-gruv-fg1">guest@aneesh-desktop</span>
        </span>
        <span className="hidden sm:inline text-gruv-neutral">~</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-gruv-green">
          <span className="w-2 h-2 rounded-full bg-gruv-green"></span>
          <span className="hidden sm:inline">connected</span>
        </span>
        <span className="text-gruv-fg1">{time}</span>
        <span className="w-2 h-2 bg-gruv-yellow animate-pulse"></span>
      </div>
    </div>
  );
}
