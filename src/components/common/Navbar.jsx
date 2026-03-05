"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScroll = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      if (scrollTop > 100) {
        if (scrollTop > lastScroll.current) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }
      lastScroll.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sattaLinks = [
    { id: 1, title: "Home", href: "/", icon: "🏠" },
    { id: 2, title: "Chart", href: "/chart", icon: "📊" },
    { id: 3, title: "Contact", href: "/contact", icon: "📞" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Scroll Progress - Gradient Effect */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-800">
        <div
          className="h-1 bg-gradient-to-r from-violet-600 via-amber-500 to-violet-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navbar */}
      <nav
        className={`w-full z-40 transition-all duration-500 bg-gradient-to-r from-violet-700 to-violet-600 shadow-md ${showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            {sattaLinks.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className={`relative px-5 sm:px-8 py-2.5 rounded-full font-semibold text-sm sm:text-base uppercase tracking-wide transition-all duration-300 flex items-center gap-2 ${isActive(link.href)
                  ? "bg-amber-500 text-white shadow-lg scale-105"
                  : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                  }`}
              >
                <span className="hidden sm:inline">{link.icon}</span>
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
