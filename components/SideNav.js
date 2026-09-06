import Link from "next/link";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  { type: "anchor", section: "home", name: "/home", hash: "#home" },
  { type: "anchor", section: "about", name: "/about_me", hash: "#about" },
  { type: "anchor", section: "skills", name: "/skills", hash: "#skills" },
  { type: "route", path: "/projects", name: "/projects" },
  { type: "route", path: "/resume", name: "/experience" },
  { type: "route", path: "/contact", name: "/contact" },
];

export default function SideNav() {
  const router = useRouter();
  const pathname = router.pathname;

  const isActive = (item) => {
    if (item.type === "route") {
      return pathname === item.path;
    }
    // anchor items are active on home page
    return pathname === "/";
  };

  return (
    <div className="bg-gruv-bg1 border border-gruv-bg3 rounded-md pixel-border overflow-hidden">
      <div className="px-4 py-2 border-b border-gruv-bg3 bg-gruv-bg0 text-xs text-gruv-neutral tracking-wide">
        explorer — ~
      </div>
      <nav className="p-2 space-y-0.5" aria-label="navigation">
        {NAV_ITEMS.map((item) => {
          const active =
            item.type === "route"
              ? pathname === item.path
              : pathname === "/";
          return item.type === "route" ? (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded transition-colors ${
                active
                  ? "bg-gruv-bg3 text-gruv-yellow"
                  : "text-gruv-fg1 hover:bg-gruv-bg2 hover:text-gruv-fg0"
              }`}
            >
              <FolderIcon />
              <span>{item.name}</span>
            </Link>
          ) : (
            <a
              key={item.name}
              href={item.hash}
              onClick={(e) => {
                if (pathname !== "/") {
                  e.preventDefault();
                  router.push({
                    pathname: "/",
                    hash: item.section,
                  });
                }
              }}
              className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded transition-colors ${
                pathname === "/"
                  ? "bg-gruv-bg3 text-gruv-yellow"
                  : "text-gruv-fg1 hover:bg-gruv-bg2 hover:text-gruv-fg0"
              }`}
            >
              <FolderIcon />
              <span>{item.name}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

function FolderIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className="shrink-0"
      aria-hidden="true"
    >
      <rect x="1" y="3" width="12" height="9" fill="#b16286" />
      <rect x="1" y="3" width="8" height="2.5" fill="#d3869b" />
      <rect x="1" y="3" width="12" height="1" fill="#d3869b" />
    </svg>
  );
}
