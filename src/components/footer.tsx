"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const LINKS = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Pricing", href: "#" },
];

const TRUSTED_LOGOS = [
  { src: "/logos/logo-apple.png", alt: "Apple" },
  { src: "/logos/logo-google.png", alt: "Google" },
  { src: "/logos/logo-coinbase.svg", alt: "Coinbase" },
  { src: "/logos/logo-netflix.svg", alt: "Netflix" },
  { src: "/logos/logo-pinterest.svg", alt: "Pinterest" },
  { src: "/logos/logo-spotify.svg", alt: "Spotify" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12" aria-label="Site Footer">
      <div className="container mx-auto">
        {/* Trusted by logo bar */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 py-6 mb-8 bg-gray-800 rounded-xl shadow-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
          }}
        >
          <span className="text-gray-400 text-sm mr-4">Trusted by</span>
          {TRUSTED_LOGOS.map((logo, idx) => (
            <motion.div
              key={logo.alt}
              className="flex items-center justify-center h-10 w-28 bg-white rounded-lg shadow p-2 mx-2"
              whileHover={{ scale: 1.08 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <Image src={logo.src} alt={logo.alt} width={100} height={32} className="object-contain h-8 w-auto" />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <nav aria-label="Footer Navigation" className="text-center md:text-left">
            <a
              href="#"
              className="mb-4 block text-2xl font-bold text-white tracking-wide"
            >
              RASS
            </a>
            <p className="mb-12 font-normal text-gray-300">
              Innovating Security, Empowering Knowledge.
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start" role="list">
              {LINKS.map((link, idx) => (
                <li key={link.label} role="listitem">
                  <a
                    href={link.href}
                    className={`py-1 font-medium text-gray-300 hover:text-teal-400 transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <h6 className="text-white font-semibold mb-3">Get the app</h6>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center justify-center bg-white text-gray-900 font-semibold rounded-lg px-4 py-2 mb-2 shadow hover:bg-gray-100 transition"
                aria-label="Download on the App Store"
              >
                <Image
                  width={24}
                  height={24}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="Apple logo"
                />
                App Store
              </a>
              <a
                href="#"
                className="flex items-center justify-center bg-white text-gray-900 font-semibold rounded-lg px-4 py-2 shadow hover:bg-gray-100 transition"
                aria-label="Get it on Google Play"
              >
                <Image
                  width={24}
                  height={24}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="Google Play logo"
                />
                Google Play
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <p className="text-center font-normal opacity-75 text-gray-300">
            &copy; {CURRENT_YEAR} RASS – Research and Secure Systems. All Rights Reserved.
          </p>
          <nav aria-label="Social Media Links">
            <div className="flex gap-2">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition text-2xl"
              >
                <i className="fa-brands fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-700 transition text-2xl"
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-600 transition text-2xl"
              >
                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-black transition text-2xl"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
                className="text-gray-400 hover:text-pink-400 transition text-2xl"
              >
                <i className="fa-brands fa-dribbble" aria-hidden="true"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
