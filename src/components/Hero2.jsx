import { useEffect, useRef, useState } from "react";
import GradientTitle from "./shared/GradientTitle";

const heroTexts = [
  "Morse Code is a method used in telecommunication to encode text characters as sequences of dots and dashes. Each character is represented by a unique combination of short and long signals."  
];


const Hero2 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      setLoaded(true);
  }, [])

  return (
  <div className="hero min-h-screen">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content w-full py-16">
      <div className="flex flex-col xl:flex-row w-full gap-8">
        <div className="scroll-fadeout max-w-md flex flex-col items-center text-center mx-auto xl:items-start xl:text-start justify-center gap-4">
          
          <h1>
            <GradientTitle title="Morse Code Cryptic Challenge" />
          </h1>
          <p className="mb-5">{heroTexts[Math.floor(Math.random() * heroTexts.length)]}</p>
          <b>Invented by Samuel Morse and Alfred Vail in the early 1840s, Morse Code revolutionized long-distance communication. It was widely used in telegraphy and remains in use in various forms, including amateur radio and aviation.</b>
          <b>"SOS" is encoded as "... --- ..."</b>
          {/* <button className="btn btn-primary w-1/3" onClick={() => document.getElementById("contact").scrollIntoView({behavior: 'smooth'}) }>Sales Info</button> */}
        </div>
        <div className={loaded ? "fade-in loaded" : "fade-in"}>
          <div className={`scroll-fadeout relative bg-[radial-gradient(ellipse_at_center,#ffffff_0%,oklch(var(--p))_20%,#ffffff00_60%);] w-full h-full drop-shadow-[0_0_50px_oklch(var(--nc))]`}>
            <img src="./the-coding-challenge-hero-banner.jpg" alt="The Coding Challenge Hero2 Banner" className="mask mask-squircle w-full h-full mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero2;