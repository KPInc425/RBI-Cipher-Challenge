import { useEffect, useRef, useState } from "react";
import GradientTitle from "./shared/GradientTitle";

const heroTexts = [
  "Use any programming language, simple algorithms and puzzles for every skill-level.  Fun solo, or as part of an event.  Supports an endless number of players."  
];


const Hero = () => {
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
          
          <GradientTitle title="Software Developer Coding Challenges" />
          <p className="mb-5">{heroTexts[Math.floor(Math.random() * heroTexts.length)]}</p>
          <b>Several successful ready to run events in a box</b>
          {/* <button className="btn btn-primary w-1/3" onClick={() => document.getElementById("contact").scrollIntoView({behavior: 'smooth'}) }>Sales Info</button> */}
        </div>
        <div className={loaded ? "fade-in loaded" : "fade-in"}>
          <div className={`scroll-fadeout relative bg-[radial-gradient(ellipse_at_center,#ffffff_0%,oklch(var(--p))_20%,#ffffff00_60%);] w-full h-full drop-shadow-[0_0_50px_oklch(var(--nc))]`}>
            <img src="./tcc-hero-image.jpg" alt="Brainstorming" className="mask mask-squircle w-full h-full mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;