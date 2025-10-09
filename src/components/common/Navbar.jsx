"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScroll = useRef(0); // ✅ useRef instead of state

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
      lastScroll.current = scrollTop; // ✅ update ref value
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // ✅ no dependency on lastScroll

  const sattaLinks = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Chart", href: "/chart" },
    { id: 3, title: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-1 bg-gradient bg-gradient-to-r transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-[#ffffffbd] shadow-lg z-40 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container max-w-[1240px] mx-auto px-3 sm:px-4 py-5">
          <div className="grid grid-cols-3 sm:gap-3 gap-2">
            {sattaLinks.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className="bg-orange-500 border hover:border-orange-500 border-black text-white hover:text-orange-600 text-center hover:bg-yellow-400 flex items-center justify-center px-2 sm:px-5 md:px-6 py-2 sm:py-3 rounded cursor-pointer transition"
              >
                <p className="text-base max-sm:text-sm m-0 font-bold">
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
