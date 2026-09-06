import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

const DesktopContext = createContext(null);

export default function DesktopProvider({ children }) {
  const [offsets, setOffsets] = useState({});
  const [stack, setStack] = useState([]);
  const baseRef = useRef([]);

  const register = useCallback((id) => {
    setStack((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setOffsets((prev) =>
      id in prev ? prev : { ...prev, [id]: { x: 0, y: 0 } }
    );
    if (!baseRef.current.includes(id)) {
      baseRef.current = [...baseRef.current, id];
    }
  }, []);

  const unregister = useCallback((id) => {
    setStack((prev) => prev.filter((k) => k !== id));
    setOffsets((prev) => {
      if (!(id in prev)) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });
    baseRef.current = baseRef.current.filter((k) => k !== id);
  }, []);

  const bringToFront = useCallback((id) => {
    setStack((prev) => {
      if (!prev.includes(id)) return prev;
      const next = prev.filter((k) => k !== id);
      next.push(id);
      return next;
    });
  }, []);

  const setOffset = useCallback((id, x, y) => {
    setOffsets((prev) => {
      const cur = prev[id] ?? { x: 0, y: 0 };
      if (cur.x === x && cur.y === y) return prev;
      return { ...prev, [id]: { x, y } };
    });
  }, []);

  const reset = useCallback(() => {
    setOffsets((prev) => {
      const ids = Object.keys(prev);
      const dirty = ids.some((k) => prev[k].x !== 0 || prev[k].y !== 0);
      if (!dirty) return prev;
      const next = {};
      for (const k of ids) next[k] = { x: 0, y: 0 };
      return next;
    });
    setStack((prev) => baseRef.current.filter((k) => prev.includes(k)));
  }, []);

  const hasMoved = useMemo(
    () => Object.values(offsets).some((o) => o.x !== 0 || o.y !== 0),
    [offsets]
  );

  return (
    <DesktopContext.Provider
      value={{
        offsets,
        stack,
        register,
        unregister,
        bringToFront,
        setOffset,
        reset,
        hasMoved,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktop() {
  return useContext(DesktopContext);
}