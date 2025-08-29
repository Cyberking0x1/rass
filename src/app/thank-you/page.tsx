"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex flex-col items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-10 max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-bold text-[#e80325] mb-4">Thank You!</h1>
        <p className="mb-6 text-lg">Your enrollment is successful. Our team will contact you soon with further details.</p>
        <Link href="/">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="bg-[#e80325] text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-[#f63538] transition text-lg"
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}
