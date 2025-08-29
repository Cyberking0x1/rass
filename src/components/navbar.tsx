"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// DATA FOR NAVIGATION
const NAV_MENU = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
];

const EDUCATION_PROGRAMS = [
  { 
    name: "RCEH Program", 
    href: "/rceh",
    description: "3-Month Cyber Security Certification"
  },
  { 
    name: "PCEH Course", 
    href: "#education-pehc",
    description: "Practical Ethical Hacking Course"
  },
];

// Reusable NavItem Component
function NavItem({ children, href }: { children: React.ReactNode; href?: string }) {
  return (
    <li>
      <a href={href || "#"} className="font-medium text-gray-700 hover:text-red-500 transition-colors px-2 py-1 rounded">
        {children}
      </a>
    </li>
  );
}

// Pure Tailwind dropdown for Education
function EducationMenu() {
  const [open, setOpen] = useState(false);
  return (
    <li className="relative">
      <button
        type="button"
        className="flex items-center gap-1 font-medium text-gray-700 hover:text-red-500 transition-colors px-2 py-1 rounded focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Education
        <ChevronDownIcon strokeWidth={2.5} className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
          {EDUCATION_PROGRAMS.map(({ name, href, description }) => (
            <li key={name}>
              <a
                href={href}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                onClick={() => setOpen(false)}
              >
                <div className="font-semibold">{name}</div>
                <div className="text-xs text-gray-500">{description}</div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}


export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-100">
      <nav className="container mx-auto flex items-center justify-between py-2 px-4 lg:px-10 min-h-[56px]">
        {/* Logo and name */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/image/logos/rasslogo.png"
            alt="RASS Logo"
            width={52}
            height={52}
            className="rounded-xl shadow-lg border-2 border-[#e80325] bg-white"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold tracking-tight" style={{ color: '#e80325', fontFamily: 'Inter, sans-serif' }}>RASS</span>
            <span className="text-xs font-medium tracking-wide" style={{ color: '#161414' }}>Cybersecurity & Education Services</span>
          </div>
        </a>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-10 ml-10">
          {NAV_MENU.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="font-semibold text-lg px-3 py-2 rounded-lg transition-all duration-200 group relative text-[#161414] hover:text-[#e80325]"
              >
                <span className="relative z-10 transition-transform duration-200 group-hover:scale-105">
                  {name}
                </span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#e80325] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
              </a>
            </li>
          ))}
          <EducationMenu />
        </ul>

        {/* Contact & Social (desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="#contact" className="bg-[#e80325] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#f63538] transition shadow-lg text-base">Contact Us</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#161414] hover:text-[#e80325] transition text-2xl"><i className="fa-brands fa-linkedin" /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#161414] hover:text-[#e80325] transition text-2xl"><i className="fa-brands fa-github" /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#161414] hover:text-[#e80325] transition text-2xl"><i className="fa-brands fa-youtube" /></a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 rounded text-[#e80325] hover:bg-[#f63538]/10 focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
        >
          {mobileOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col gap-2 px-6 py-4">
            {NAV_MENU.map(({ name, href }) => (
              <li key={name + "-mobile"}>
                <a
                  href={href}
                  className="block font-semibold text-lg px-2 py-2 rounded transition-colors duration-200 text-[#161414] hover:text-[#e80325]"
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a href="#education-rceh" className="block font-medium text-[#e80325] hover:text-[#f63538] px-2 py-1 rounded">RCEH Program</a>
            </li>
            <li>
              <a href="#education-pehc" className="block font-medium text-[#e80325] hover:text-[#f63538] px-2 py-1 rounded">PCEH Course</a>
            </li>
          </ul>
          <div className="flex flex-col gap-2 px-6 pb-4">
            <a href="#contact" className="bg-[#e80325] text-white px-4 py-2 rounded font-semibold hover:bg-[#f63538] transition text-center">Contact Us</a>
            <div className="flex items-center gap-3 justify-center mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#161414] hover:text-[#e80325] transition text-2xl"><i className="fa-brands fa-linkedin" /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#161414] hover:text-[#e80325] transition text-2xl"><i className="fa-brands fa-github" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#161414] hover:text-[#e80325] transition text-2xl"><i className="fa-brands fa-youtube" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;