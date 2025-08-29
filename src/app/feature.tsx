"use client";

import React from "react";


import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Expert Instructors",
    children:
      "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
  },
  {
    icon: HeartIcon,
    title: "Interactive Learning",
    children:
      "Engage with interactive quizzes, hands-on exercises, and discussion forums to reinforce your understanding and connect.",
  },
  {
    icon: LockClosedIcon,
    title: "Achievement Unlocked",
    children:
      "Earn certificates and badges as you complete courses, showcasing your newfound skills to the world.",
  },
  {
    icon: LightBulbIcon,
    title: "Personalized Progress Tracking",
    children:
      "Stay on top of your learning journey with progress tracking and personalized recommendations to keep you motivated.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <div className="mb-2 font-bold uppercase text-blue-gray-700 text-sm tracking-widest">Your Learning App</div>
        <h1 className="mb-4 text-4xl font-extrabold text-blue-gray-900">Diverse Learning Resources</h1>
        <p className="mx-auto w-full px-4 text-gray-500 text-lg lg:w-11/12 lg:px-8">
          Access your learning materials on the go. Whether you&apos;re commuting, waiting for a friend, or just have a few minutes to spare, our app fits seamlessly into your busy life.
        </p>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
