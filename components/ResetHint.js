import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineRotateLeft } from "react-icons/ai";
import { useDesktop } from "./DesktopContext";

export default function ResetHint() {
  const { hasMoved, reset } = useDesktop();

  return (
    <AnimatePresence>
      {hasMoved && (
        <motion.button
          key="reset-hint"
          type="button"
          onClick={reset}
          initial={{ opacity: 0, y: -8, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -8, x: "-50%" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-label="Reset window positions"
          className="absolute top-full left-1/2 mt-2 z-50 flex items-center gap-2 px-4 py-1.5 rounded-md bg-gruv-yellow text-gruv-bg0 text-xs font-medium shadow-lg border border-black/10 cursor-pointer hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gruv-yellow"
        >
          <AiOutlineRotateLeft className="text-sm" />
          click to reset window positions
        </motion.button>
      )}
    </AnimatePresence>
  );
}