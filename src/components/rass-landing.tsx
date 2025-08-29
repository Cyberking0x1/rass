



"use client";
// --- TESTIMONIALS DATA ---
const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "IT Manager, FinSecure Ltd.",
    quote: "RASS helped us transform our security posture and upskill our team. Their training is hands-on and their experts are always available.",
    avatar: "/image/avatar1.jpg"
  },
  {
    name: "Rahul M.",
    title: "Founder, EduTech Pro",
    quote: "The education programs from RASS are top-notch. Our staff is now certified and confident in handling cyber threats.",
    avatar: "/image/avatar2.jpg"
  },
  {
    name: "Anjali K.",
    title: "CISO, HealthNet",
    quote: "We trust RASS for both our security audits and ongoing employee training. Highly recommended for any organization.",
    avatar: "/image/avatar3.jpg"
  },
];

// --- TESTIMONIAL SLIDER COMPONENT ---
const TestimonialSlider: FC = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {TESTIMONIALS.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: i === index ? 1 : 0, x: i === index ? 0 : 40 }}
          transition={{ duration: 0.6, type: "spring" }}
          className={`absolute left-0 top-0 w-full ${i === index ? 'z-10' : 'z-0 pointer-events-none'}`}
        >
          <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center gap-4 min-h-[260px]">
            <Image src={t.avatar} alt={t.name} width={64} height={64} className="rounded-full border-2 border-[#e80325] mb-2" />
            <p className="text-lg text-[#161414] font-medium">“{t.quote}”</p>
            <div className="mt-2">
              <span className="font-bold text-[#e80325]">{t.name}</span>
              <span className="block text-sm text-[#161414]/70">{t.title}</span>
            </div>
          </div>
        </motion.div>
      ))}
      <div className="flex gap-2 justify-center mt-6 relative z-20">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-[#e80325]' : 'bg-gray-300'} transition-all`}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
// --- TESTIMONIALS SECTION ---
export function RassTestimonials() {
  const { ref, style } = useScrollAnimate();
  return (
    <section ref={ref} style={style} className="py-28 px-4 bg-[#f63538]/5 border-b border-gray-100">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="font-extrabold text-3xl md:text-5xl text-[#161414] mb-10 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
          What Our Clients Say
        </h2>
        <TestimonialSlider />
      </div>
    </section>
  );
}
import React, { useState, useEffect, useRef, FC, ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Cloud, AlertTriangle, TrendingUp, LifeBuoy, Users, 
  BookOpen, Server, Bot, Building, Sun, Moon, Menu, X, MapPin, Mail, Phone,
  Linkedin, Github, Youtube
} from 'lucide-react';

// --- DATA CONSTANTS ---
// Centralizing data makes the site easier to manage and update.

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const HERO_BACKGROUND_IMAGES = [
  "/image/bg/bg1.jpg",
  "/image/bg/bg2.jpg",
  "/image/bg/bg3.jpg",
  "/image/bg/bg4.jpg",
  "/image/bg/bg5.jpg",
  "/image/bg/bg6.jpg",
];

const SERVICES = [
  { icon: ShieldCheck, title: "Penetration Testing", desc: "Identify vulnerabilities through real-world attack simulations to fortify your digital assets." },
  { icon: Cloud, title: "Cloud Security Consulting", desc: "Expert guidance to secure your cloud infrastructure across AWS, Azure, and GCP." },
  { icon: AlertTriangle, title: "Threat Intelligence", desc: "Advanced threat monitoring, analysis, and risk assessment for proactive defense." },
  { icon: TrendingUp, title: "Compliance & Auditing", desc: "Ensure adherence to industry standards like ISO 27001, GDPR, and PCI-DSS." },
  { icon: LifeBuoy, title: "Incident Response", desc: "24/7 rapid response and mitigation of security breaches to minimize impact and ensure recovery." },
  { icon: Users, title: "Security Awareness Training", desc: "Empower your team with the knowledge to recognize and prevent sophisticated cyber threats." },
];

const PROGRAMS = [
  { icon: BookOpen, title: "Ethical Hacking Masterclass", desc: "Dive deep into advanced hacking techniques and defense strategies with hands-on labs." },
  { icon: Server, title: "DevSecOps Bootcamp", desc: "Integrate robust security practices seamlessly into your development and deployment pipelines." },
  { icon: Bot, title: "AI in Cybersecurity", desc: "Explore how Artifical Intelligence is shaping the future of threat detection and response." },
  { icon: Building, title: "Corporate Training Solutions", desc: "Customized cybersecurity programs designed to upskill your entire organization." },
];

const GALLERY_IMAGES = [
  "/image/bg/bg1.jpg", "/image/bg/bg2.jpg", "/image/bg/bg3.jpg",
  "/image/bg/bg4.jpg", "/image/bg/bg5.jpg", "/image/bg/bg6.jpg",
];

// --- UTILITY HOOKS & COMPONENTS ---

// Custom hook for elegant scroll-based fade-in animations
const useScrollAnimate = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current); // Animate only once
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const style = {
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
  };

  return { ref, style };
};

// A reusable title component for sections
interface SectionTitleProps {
  children: ReactNode;
}
const SectionTitle: FC<SectionTitleProps> = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, type: "spring" }}
    className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center"
  >
    {children}
  </motion.h2>
);

// --- NEW COMPONENT: ImageSlider ---
const ImageSlider: FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl shadow-2xl overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: index === currentIndex ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`Slider image ${index + 1}`}
            fill
            className="object-cover w-full h-full"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
};


// --- MAIN PAGE COMPONENT ---
export default function LandingPage() {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors duration-300 font-sans">
      {/* Navbar is imported from the main navbar.tsx, not here */}
      <main>
        <RassHero />
        <RassAbout />
        <RassVisionMission />
        <RassFounders />
        <RassServices />
        <RassEducation />
  <RassGallery />
  <RassTestimonials />
        <RassContact />
      </main>
      <Footer />
    </div>
  );
}

// --- CORE COMPONENTS ---

// Navbar is now imported from the main navbar.tsx file for consistency and type safety

// Animated Counter for stats
const AnimatedCounter: FC<{ value: number; label: string; suffix?: string }> = ({ value, label, suffix }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 20;
    let step = Math.ceil(end / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-4xl font-extrabold text-white">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm md:text-base text-gray-200 mt-1">{label}</span>
    </div>
  );
};

export function RassHero() {
  // Prventi-style hero: white background, bold headline, subheadline, strong CTA, accent color, modern font, more whitespace, subtle animation
  const stats = [
    { value: 120, label: "Clients Secured", suffix: "+" },
    { value: 5000, label: "Threats Blocked", suffix: "+" },
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 99, label: "Satisfaction Rate", suffix: "%" },
  ];

  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center justify-center bg-white overflow-hidden border-b border-gray-100">
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Subtle background illustration (optional) */}
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="hero-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#f63538" stopOpacity="0.08" />
              <stop offset="1" stopColor="#e80325" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <rect width="1440" height="320" fill="url(#hero-gradient)" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto pt-32 pb-20">
        {/* Animated background shapes */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center z-[-1]"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ scale: [0.8, 1.1, 0.8], rotate: [0, 360, 0] }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            className="w-96 h-96 rounded-full bg-gradient-to-tr from-[#e80325] via-[#f63538] to-[#e80325] blur-2xl opacity-60"
            style={{ filter: 'blur(60px)' }}
          />
          <motion.div
            initial={{ scale: 0.7, rotate: 0 }}
            animate={{ scale: [0.7, 1.05, 0.7], rotate: [0, -360, 0] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            className="w-72 h-72 rounded-full bg-gradient-to-br from-[#f63538] via-[#e80325] to-[#f63538] blur-2xl opacity-40 absolute top-1/3 left-1/4"
            style={{ filter: 'blur(40px)' }}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-4xl md:text-6xl font-extrabold text-[#161414] mb-6 tracking-tight leading-tight"
          style={{ letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif' }}
        >
          Cybersecurity &<br className="hidden md:inline" /> Education Services Provider
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="text-lg md:text-2xl text-[#161414]/80 mb-10 max-w-2xl font-medium"
        >
          RASS delivers <span className="text-[#e80325] font-semibold">comprehensive cybersecurity solutions</span> and <span className="text-[#e80325] font-semibold">cutting-edge education programs</span> to empower businesses and individuals in a digital world.
        </motion.p>
        {/* Animated stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="flex flex-wrap gap-8 justify-center mb-10"
        >
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
          ))}
        </motion.div>
        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#services"
            className="relative bg-[#e80325] text-white font-bold shadow-lg px-8 py-3 rounded-lg text-lg border-2 border-[#e80325] overflow-hidden group transition-all"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#f63538] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a
            href="#education"
            className="bg-white text-[#e80325] font-bold shadow-lg px-8 py-3 rounded-lg hover:bg-[#e80325] hover:text-white hover:scale-105 transition-all text-lg border-2 border-[#e80325]/20"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function RassAbout() {
  const { ref, style } = useScrollAnimate();
  const values = [
    { icon: ShieldCheck, label: 'Integrity' },
    { icon: TrendingUp, label: 'Innovation' },
    { icon: BookOpen, label: 'Knowledge' },
    { icon: LifeBuoy, label: 'Excellence' },
  ];
  return (
    <section id="about" ref={ref} style={style} className="py-28 px-4 bg-white border-b border-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 flex flex-col gap-8 items-start">
          <h2 className="font-extrabold text-3xl md:text-5xl text-[#161414] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            About RASS
          </h2>
          <p className="text-lg md:text-xl text-[#161414]/80 max-w-xl mb-2">
            RASS is a trusted partner for <span className="text-[#e80325] font-semibold">cybersecurity</span> and <span className="text-[#e80325] font-semibold">education services</span>. We help organizations secure their digital assets and empower professionals with industry-leading training and certifications.
          </p>
          <div className="mt-6">
            <h5 className="font-semibold text-[#e80325] mb-4 text-lg">Core Values</h5>
            <ul className="flex flex-wrap gap-5">
              {values.map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col items-center gap-2 bg-[#f63538]/5 px-6 py-4 rounded-xl shadow-sm min-w-[110px]">
                  <Icon className="w-8 h-8 text-[#e80325] mb-1" />
                  <span className="font-semibold text-[#161414] text-base">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg mx-auto">
          <ImageSlider images={GALLERY_IMAGES} />
        </div>
      </div>
    </section>
  );
}

export function RassVisionMission() {
  const { ref, style } = useScrollAnimate();
  return (
    <section id="vision" ref={ref} style={style} className="py-24 px-4 bg-white border-b border-gray-100">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div className="p-10 bg-[#f63538]/5 rounded-2xl shadow-md flex flex-col items-start">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#e80325] tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>Our Vision</h3>
          <p className="text-lg text-[#161414]/80 font-medium">To be the most trusted partner for cybersecurity and education, enabling a safer digital world through innovation, expertise, and continuous learning.</p>
        </div>
        <div className="p-10 bg-[#f63538]/5 rounded-2xl shadow-md flex flex-col items-start">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#e80325] tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>Our Mission</h3>
          <p className="text-lg text-[#161414]/80 font-medium">To deliver world-class cybersecurity solutions and education services that protect organizations, empower individuals, and advance digital resilience everywhere.</p>
        </div>
      </div>
    </section>
  );
}

export function RassFounders() {
  const { ref, style } = useScrollAnimate();
  return (
    <section ref={ref} style={style} className="py-28 px-4 bg-white border-b border-gray-100">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="font-extrabold text-3xl md:text-5xl text-[#161414] mb-6 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
          Leadership in Cybersecurity & Education
        </h2>
        <p className="text-lg md:text-xl text-[#161414]/80 max-w-3xl text-center mb-14">
          Our founders are passionate about advancing cybersecurity and education. Their vision is to empower organizations and individuals to thrive securely in a digital-first world through innovation, expertise, and lifelong learning.
        </p>
        <div className="flex flex-wrap gap-10 justify-center">
          <motion.div whileHover={{ scale: 1.04 }} className="w-80 bg-[#f63538]/5 shadow-lg rounded-2xl p-10 flex flex-col items-center text-center border border-[#e80325]/10">
            <Image src="/image/founder1.jpg" alt="Dr. Anya Sharma" width={100} height={100} className="mb-4 rounded-full border-4 border-[#e80325] object-cover" />
            <h5 className="font-bold text-[#161414] text-xl mb-1">Snehal Pawar</h5>
            <div className="text-[#e80325] font-semibold mb-2">Co-Founder & CEO</div>
            <div className="text-sm text-[#161414]/70">PhD in Cybersecurity, 15+ years leading enterprise security, research, and education initiatives.</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} className="w-80 bg-[#f63538]/5 shadow-lg rounded-2xl p-10 flex flex-col items-center text-center border border-[#e80325]/10">
            <Image src="/image/founder2.jpg" alt="Rohan Patel" width={100} height={100} className="mb-4 rounded-full border-4 border-[#e80325] object-cover" />
            <h5 className="font-bold text-[#161414] text-xl mb-1">Wasim Patel</h5>
            <div className="text-[#e80325] font-semibold mb-2">Co-Founder & CTO</div>
            <div className="text-sm text-[#161414]/70">M.Tech in InfoSec, expert in IT training, cloud security, and building secure learning platforms.</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function RassServices() {
  const { ref, style } = useScrollAnimate();
  // Example analytics data for animated bar chart
  const analytics = [
    { label: 'Security Risk Score', value: 67.2, color: '#e80325' },
    { label: 'Training Completion %', value: 92, color: '#f63538' },
    { label: 'Incidents Prevented', value: 120, color: '#161414' },
    { label: 'Certified Professionals', value: 350, color: '#e80325' },
  ];
  return (
    <section id="services" ref={ref} style={style} className="py-28 px-4 bg-white border-b border-gray-100">
      <div className="container mx-auto">
        <h2 className="font-extrabold text-3xl md:text-5xl text-[#161414] mb-12 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
          Our Cybersecurity & Education Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)" }}
              className="group p-8 bg-[#f63538]/5 shadow-lg rounded-2xl border border-[#e80325]/10 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="mb-4 bg-white p-4 rounded-full shadow-sm">
                <Icon className="h-8 w-8 text-[#e80325]" />
              </div>
              <h5 className="font-bold text-[#161414] mb-2 text-lg">{title}</h5>
              <div className="text-[#161414]/70">{desc}</div>
            </motion.div>
          ))}
        </div>
        {/* Analytics/Reporting Section */}
        <div className="mt-10">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-[#e80325] text-center">Reporting & Analytics</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-end">
            {analytics.map(({ label, value, color }) => (
              <div key={label} className="flex flex-col items-center w-32">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${value * 2}px` }}
                  transition={{ duration: 1, type: 'spring' }}
                  className="w-12 rounded-t-xl mb-2"
                  style={{ background: color, height: `${value * 2}px` }}
                />
                <span className="text-lg font-bold text-[#161414]">{typeof value === 'number' ? value + (label.includes('%') ? '%' : '') : value}</span>
                <span className="text-sm text-[#161414]/70 mt-1 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function RassEducation() {
  const { ref, style } = useScrollAnimate();
  return (
    <section id="education" ref={ref} style={style} className="py-24 px-4">
      <div className="container mx-auto">
  <SectionTitle>Education & Training Programs</SectionTitle>
        <p className="text-lg md:text-xl text-[#161414]/80 max-w-2xl mx-auto mb-8 text-center">
          Advance your career and skills with our industry-leading cybersecurity and IT education programs. RASS offers hands-on training, certifications, and corporate upskilling for professionals and organizations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {PROGRAMS.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)" }}
              className="group p-6 bg-slate-100 dark:bg-slate-800 shadow-lg rounded-xl border-b-4 border-transparent hover:border-teal-400 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="mb-4 bg-teal-400/10 p-4 rounded-full">
                <Icon className="h-8 w-8 text-teal-400" />
              </div>
              <h5 className="font-bold text-slate-800 dark:text-slate-100 mb-2 text-lg">{title}</h5>
              <div className="text-sm text-slate-600 dark:text-slate-400">{desc}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="bg-teal-400 text-slate-900 font-bold shadow-lg px-6 py-3 rounded-lg hover:bg-teal-500 hover:scale-105 transition-transform text-lg"
          >
            Explore Programs
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export function RassGallery() {
  const { ref, style } = useScrollAnimate();
  return (
    <section id="gallery" ref={ref} style={style} className="py-24 px-4 bg-white border-b border-gray-100">
      <div className="container mx-auto">
        <SectionTitle>Our Impact & Events</SectionTitle>
        <div className="mb-8 text-center text-lg text-[#161414]/80 max-w-2xl mx-auto">
          See moments from RASS cybersecurity trainings, educational programs, and industry events that empower our clients and community.
        </div>
        <div className="columns-2 md:columns-3 gap-4">
          {GALLERY_IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RassContact() {
  const { ref, style } = useScrollAnimate();
  return (
    <section id="contact" ref={ref} style={style} className="py-24 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-bold text-3xl md:text-4xl text-[#161414] mb-6">
            Contact RASS
          </h2>
          <p className="text-lg text-[#161414]/80 mb-6 max-w-md">
            Reach out to learn more about our cybersecurity solutions, education programs, or to discuss how we can help secure and empower your organization.
          </p>
          <form className="flex flex-col gap-6 max-w-md">
            <input type="text" placeholder="Full Name" required className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 outline-none" />
            <input type="email" placeholder="Email Address" required className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 outline-none" />
            <textarea placeholder="Your Message" required rows={4} className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 outline-none" />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="bg-teal-400 text-slate-900 font-bold mt-2 px-6 py-3 rounded-lg hover:bg-teal-500 transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
        <div>
          <div className="mt-10 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.18029676779!2d72.93774625!3d19.46731995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a637537b0d87%3A0x7d2f95c808f9e612!2sSaphale%2C%20Maharashtra%20401102!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              className="rounded-lg border-0 shadow-md"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RASS Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Company Info */}
        <div className="md:col-span-1">
          <a href="#home" className="flex items-center gap-3 mb-4">
            <Image src="/image/rasslogo.png" alt="RASS Logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold text-white">RASS</span>
          </a>
          <p className="text-slate-400 mb-6">
            Innovating Security, Empowering Knowledge.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-teal-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-teal-400 transition-colors"><Github size={20} /></a>
            <a href="#" aria-label="YouTube" className="text-slate-400 hover:text-teal-400 transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h6 className="font-semibold text-white mb-4">Quick Links</h6>
          <ul className="space-y-3">
            {NAV_LINKS.map(link => (
              <li key={link.name}><a href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors">{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h6 className="font-semibold text-white mb-4">Our Services</h6>
          <ul className="space-y-3">
            {SERVICES.slice(0, 5).map(service => (
              <li key={service.title}><a href="#services" className="text-slate-400 hover:text-teal-400 transition-colors">{service.title}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h6 className="font-semibold text-white mb-4">Contact Us</h6>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 text-teal-400 flex-shrink-0" />
              <span>BBAPT206, Saphale (E), Palghar, Mumbai, Maharashtra</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-teal-400" />
              <a href="mailto:contact@rass.com" className="hover:text-teal-400">contact@rass.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-teal-400" />
              <a href="tel:+911234567890" className="hover:text-teal-400">+91 12345 67890</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 text-center md:text-left">
        <p className="text-sm text-slate-500">
          &copy; {currentYear} RASS – Research and Secure Systems. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
