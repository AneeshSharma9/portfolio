import { useCallback, useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDesktop } from "./DesktopContext";

const MIN_VISIBLE = 48;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export default function TerminalWindow({
  title,
  children,
  className = "",
  dots = true,
  animate = true,
}) {
  const id = useId();
  const { offsets, stack, register, unregister, bringToFront, setOffset } =
    useDesktop();
  const wrapperRef = useRef(null);
  const dragRef = useRef(null);
  const [minimized, setMinimized] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    register(id);
    return () => unregister(id);
  }, [id, register, unregister]);

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

  const handleHeaderPointerDown = useCallback(
    (e) => {
      if (isTouch) return;
      if (e.target.closest("button")) return;
      bringToFront(id);
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const offset = offsets[id] ?? { x: 0, y: 0 };
      dragRef.current = {
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        startVpX: rect.left,
        startVpY: rect.top,
        baseX: rect.left - offset.x,
        baseY: rect.top - offset.y,
        width: rect.width,
        height: rect.height,
      };
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (_) {
        /* noop */
      }
      e.preventDefault();
    },
    [id, bringToFront, offsets, isTouch]
  );

  const handleHeaderPointerMove = useCallback(
    (e) => {
      const d = dragRef.current;
      if (!d || e.pointerId !== d.pointerId) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const xLo = d.width <= vw ? 0 : -(d.width - MIN_VISIBLE);
      const xHi = d.width <= vw ? vw - d.width : vw - MIN_VISIBLE;
      const yLo = d.height <= vh ? 0 : -(d.height - MIN_VISIBLE);
      const yHi = d.height <= vh ? vh - d.height : vh - MIN_VISIBLE;
      const nx = clamp(
        d.startVpX + (e.clientX - d.startX),
        Math.min(xLo, xHi),
        Math.max(xLo, xHi)
      );
      const ny = clamp(
        d.startVpY + (e.clientY - d.startY),
        Math.min(yLo, yHi),
        Math.max(yLo, yHi)
      );
      setOffset(id, nx - d.baseX, ny - d.baseY);
    },
    [id, setOffset]
  );

  const handleHeaderPointerUp = useCallback((e) => {
    const d = dragRef.current;
    if (d && e.pointerId === d.pointerId) dragRef.current = null;
  }, []);

  const z = stack.indexOf(id);
  const zIndex = z === -1 ? 1 : 10 + z;
  const off = offsets[id] ?? { x: 0, y: 0 };
  const isDragging = dragRef.current !== null;

  const content = (
    <div
      className={`bg-gruv-bg1 border border-gruv-bg3 rounded-md pixel-border overflow-hidden ${className}`}
    >
      <div
        onPointerDown={handleHeaderPointerDown}
        onPointerMove={handleHeaderPointerMove}
        onPointerUp={handleHeaderPointerUp}
        onPointerCancel={handleHeaderPointerUp}
        style={{ touchAction: isTouch ? "auto" : "none" }}
        className="flex items-center justify-between px-4 h-9 border-b border-gruv-bg3 bg-gruv-bg0 cursor-grab active:cursor-grabbing select-none"
      >
        <div className="flex items-center gap-2">
          <span className="text-gruv-yellow">&#62;</span>
          <span className="text-gruv-aqua text-sm font-medium tracking-tight">
            {title}
          </span>
        </div>
        {dots && (
          <div
            className="flex items-center gap-1.5"
            onPointerDown={(e) => e.stopPropagation()}
          >
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

  return (
    <motion.div
      ref={wrapperRef}
      initial={false}
      animate={{ x: off.x, y: off.y }}
      transition={
        isDragging ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }
      }
      className="relative"
      style={{ zIndex }}
    >
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {content}
        </motion.div>
      ) : (
        content
      )}
    </motion.div>
  );
}