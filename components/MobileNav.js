import Link from "next/link";
import { useRouter } from "next/router";

const ITEMS = [
  { label: "/home", href: "/" },
  { label: "/about_me", href: "/#about" },
  { label: "/skills", href: "/#skills" },
  { label: "/projects", href: "/projects" },
  { label: "/experience", href: "/resume" },
  { label: "/contact", href: "/contact" },
];

export default function MobileNav() {
  const router = useRouter();
  const pathname = router.pathname;

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <div className="lg:hidden bg-gruv-bg0 border-b border-gruv-bg3 px-3 py-2 flex items-center gap-1 overflow-x-auto">
      {ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-2.5 py-1 text-xs rounded whitespace-nowrap transition-colors ${
            isActive(item.href)
              ? "bg-gruv-bg3 text-gruv-yellow"
              : "text-gruv-fg1 hover:text-gruv-yellow"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
