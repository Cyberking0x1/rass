"use client";

import Image from "next/image";



function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <h1 className="mb-4 text-4xl md:text-6xl font-extrabold text-white">Your Perfect <br /> Learning App</h1>
            <p className="mb-7 text-white text-lg md:pr-16 xl:pr-28">
              Our app is here to empower you on your quest for knowledge, anytime and anywhere.
            </p>
            <div className="mb-4 text-white font-semibold text-lg">Get the app</div>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a
                href="#"
                className="flex justify-center items-center gap-3 bg-white text-gray-900 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="App Store"
                  className="w-6 h-6"
                />
                App Store
              </a>
              <a
                href="#"
                className="flex justify-center items-center gap-3 bg-white text-gray-900 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="Google Play"
                  className="w-6 h-6"
                />
                Google Play
              </a>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <h3 className="mb-3 text-2xl md:text-3xl font-bold text-blue-gray-900">Learning App</h3>
          <p className="font-normal text-gray-500 lg:w-5/12">
            Download our app to dive into a vast library of courses, tutorials, and study materials on a wide range of subjects - from programming and language learning to personal development and beyond
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
