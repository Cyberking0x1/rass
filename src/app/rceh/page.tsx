"use client";
import React, { useState, useEffect, useCallback } from "react";
// Razorpay API Key (replace with your actual key)
const RAZORPAY_KEY_ID = "rzp_test_RB70Cr8a6V8bX0"; // TODO: Replace with your real key

// Dynamically load Razorpay script
function useRazorpayScript() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (document.getElementById('razorpay-script')) {
      setLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.id = 'razorpay-script';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);
  return loaded;
}
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const RCEH_TOPICS = [
  "Introduction to Cybersecurity & Threat Landscape",
  "Networking Fundamentals for Security",
  "Linux & Windows Security Basics",
  "Vulnerability Assessment & Penetration Testing",
  "Web Application Security (OWASP Top 10)",
  "Social Engineering & Phishing Attacks",
  "Malware Analysis & Reverse Engineering",
  "Cryptography Essentials",
  "Incident Response & Digital Forensics",
  "Cloud Security Basics",
  "SIEM & Security Operations",
  "Career Guidance & Industry Best Practices"
];


// Animated Counter
const AnimatedCounter = ({ value, label, suffix }: { value: number; label: string; suffix?: string }) => {
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
      <span className="text-3xl md:text-4xl font-extrabold text-[#e80325]">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm md:text-base text-gray-500 mt-1">{label}</span>
    </div>
  );
};

// Testimonial Slider (reuse avatars)
const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "IT Manager, FinSecure Ltd.",
    quote: "RCEH gave me the confidence and skills to lead my company’s security team. The labs are practical and the instructors are top-notch!",
    avatar: "/image/avatar1.jpg"
  },
  {
    name: "Rahul M.",
    title: "Founder, EduTech Pro",
    quote: "The RCEH program is the best investment I made for my career. The certification is recognized and the support is amazing.",
    avatar: "/image/avatar2.jpg"
  },
  {
    name: "Anjali K.",
    title: "CISO, HealthNet",
    quote: "I recommend RCEH to anyone serious about cybersecurity. The course covers everything from basics to advanced topics.",
    avatar: "/image/avatar3.jpg"
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {TESTIMONIALS.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: i === index ? 1 : 0, x: i === index ? 0 : 40 }}
          transition={{ duration: 0.6, type: "spring" }}
          className={`absolute left-0 top-0 w-full ${i === index ? 'z-10' : 'z-0 pointer-events-none'}`}
        >
          <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center gap-4 min-h-[220px]">
            <Image src={t.avatar} alt={t.name} width={56} height={56} className="rounded-full border-2 border-[#e80325] mb-2" />
            <p className="text-lg text-[#161414] dark:text-slate-100 font-medium">“{t.quote}”</p>
            <div className="mt-2">
              <span className="font-bold text-[#e80325]">{t.name}</span>
              <span className="block text-sm text-[#161414]/70 dark:text-slate-400">{t.title}</span>
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

export default function RCEHPage() {

  // Stats for animated counters
  const stats = [
    { value: 98, label: "Placement Rate", suffix: "%" },
    { value: 1200, label: "Students Trained", suffix: "+" },
    { value: 30, label: "Expert Sessions", suffix: "+" },
    { value: 100, label: "Lab Hours", suffix: "+" },
  ];

  // Razorpay script loader
  const razorpayLoaded = useRazorpayScript();

  // Payment handler
  const handleEnroll = useCallback(() => {
    if (!razorpayLoaded) return;
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: 499900, // Amount in paise (₹4999.00)
      currency: "INR",
      name: "RASS – Research and Secure Systems",
      description: "RCEH Cyber Security Certification Enrollment",
      image: "/images/logos/rasslogo.png", // You can use your logo here
      handler: function (response: any) {
        // On payment success, redirect to thank you page
        window.location.href = "/thank-you";
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      notes: {
        program: "RCEH Certification"
      },
      theme: {
        color: "#e80325"
      },
      modal: {
        ondismiss: function () {
          // Optionally handle modal close
        }
      }
    };
    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  }, [razorpayLoaded]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a1a2e] text-slate-100 min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center pt-28 pb-16 px-4 border-b border-slate-800 overflow-hidden">
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
        <div className="absolute inset-0 pointer-events-none select-none opacity-60">
          <Image src="/image/bg/bg3.jpg" alt="Cybersecurity background" fill className="object-cover w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-[#e80325]/80 via-slate-900/80 to-slate-900/90" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#e80325]/90 text-white text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest uppercase shadow-md">Industry Recognized</span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight drop-shadow-lg"
            style={{ letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif' }}
          >
            RCEH: 3-Month Cyber Security Certification
          </motion.h1>

          {/* Animated subtitle and description */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7, type: "spring" }}
            className="flex flex-col items-center mb-8"
          >
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.7, type: "spring" }}
              className="text-base md:text-lg text-[#e80325] font-semibold mb-1 tracking-wide"
              style={{ letterSpacing: '0.01em' }}
            >
              Cybersecurity & Education Services Provider
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.7, type: "spring" }}
              className="text-base md:text-xl text-slate-200 font-medium max-w-2xl"
            >
              RASS delivers comprehensive cybersecurity solutions and cutting-edge education programs to empower businesses and individuals in a digital world.
            </motion.p>
          </motion.div>

          {/* Original course description, can be animated or left as is */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
            className="text-lg md:text-2xl mb-8 font-medium text-slate-200 drop-shadow"
          >
            Become a certified ethical hacker and launch your cybersecurity career with hands-on labs, real-world projects, and expert mentorship.
          </motion.p>
          <div className="flex flex-wrap gap-8 justify-center mb-10">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
          <button
            onClick={handleEnroll}
            disabled={!razorpayLoaded}
            className="bg-[#e80325] text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-[#f63538] transition text-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {razorpayLoaded ? "Enroll Now" : "Loading Payment..."}
          </button>
        </div>
        {/* Value prop bar */}
        <div className="relative z-10 mt-10 w-full max-w-3xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 bg-white/90 text-[#e80325] font-semibold px-4 py-2 rounded shadow text-sm">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
            100% Placement Assistance
          </div>
          <div className="flex items-center gap-2 bg-white/90 text-[#e80325] font-semibold px-4 py-2 rounded shadow text-sm">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            3-Month Fast Track
          </div>
          <div className="flex items-center gap-2 bg-white/90 text-[#e80325] font-semibold px-4 py-2 rounded shadow text-sm">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M16 3v4a2 2 0 0 1-2 2H6" /></svg>
            Real-World Projects
          </div>
        </div>
      </section>

      {/* Certificate & Topics Section */}
      <section className="py-16 px-4 border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2 text-[#e80325]">Sample Certificate</h2>
            <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 p-4 flex flex-col items-center">
              <Image
                src="/image/certificate/certificate.png"
                alt="RCEH Certificate Sample"
                width={340}
                height={220}
                className="rounded-md object-contain border-2 border-[#e80325] shadow"
              />
              <span className="absolute top-2 right-2 bg-[#e80325] text-white text-xs font-bold px-3 py-1 rounded-full shadow">Sample</span>
            </div>
            <span className="text-xs text-gray-400 mt-2">*Digital & printable certificate on completion</span>
          </div>
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-bold mb-4 text-[#e80325]">Learning Path & Topics</h2>
            <ol className="list-decimal pl-6 space-y-2">
              {RCEH_TOPICS.map((topic, idx) => (
                <li key={idx} className="text-base md:text-lg text-slate-100/90">{topic}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>



      {/* Why Join, Program Highlights & Career Outcomes */}
      <section className="py-16 px-2 md:px-8 border-b border-slate-800 bg-slate-900/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-y-12 gap-x-16 md:gap-x-20 lg:gap-x-28">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#e80325]">Why Should I Join?</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-100/90">
              <li>Students & graduates interested in cybersecurity</li>
              <li>IT professionals seeking to upskill</li>
              <li>Network/system administrators</li>
              <li>Anyone passionate about ethical hacking</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#e80325]">Program Highlights</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-100/90">
              <li>Live instructor-led sessions & hands-on labs</li>
              <li>Real-world projects & case studies</li>
              <li>Access to virtual labs & resources</li>
              <li>Certification on successful completion</li>
              <li>Career guidance & interview prep</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#e80325]">Career Outcomes</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-100/90">
              <li>Certified Ethical Hacker (CEH)</li>
              <li>Penetration Tester</li>
              <li>Security Analyst</li>
              <li>Cybersecurity Consultant</li>
              <li>Security Operations Center (SOC) Analyst</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 px-4 border-b border-slate-800 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-extrabold text-3xl md:text-4xl text-[#e80325] mb-12 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            What Our Students Say
          </h2>
          <div className="relative min-h-[260px] flex items-center justify-center">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Removed duplicate Program Highlights section for clarity */}

      {/* Map Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-[#e80325]">Our Location</h3>
          <div className="w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.18029676779!2d72.93774625!3d19.46731995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a637537b0d87%3A0x7d2f95c808f9e612!2sSaphale%2C%20Maharashtra%20401102!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="border-0 w-full"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RASS Location"
            ></iframe>
          </div>
        </div>
      </section>

  <Footer />
    </div>
  );
}
