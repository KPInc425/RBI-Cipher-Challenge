import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import GradientTitle from "./shared/GradientTitle";

const heroTexts = [
  "Use any programming language, simple algorithms and puzzles for every skill-level.  Fun solo, or as part of an event.  Supports an endless number of players.",
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  function scrollToBottom() {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content w-full py-16">
        <div className="flex flex-col xl:flex-row w-full gap-8">
          <div className="scroll-fadeout max-w-md flex flex-col items-center text-center mx-auto xl:items-start xl:text-start justify-center gap-4">
            <h1>
              <GradientTitle title="Software Developer Coding Challenges" />
            </h1>
            <p className="mb-5">
              {heroTexts[Math.floor(Math.random() * heroTexts.length)]}
            </p>
            <b>Several successful ready to run events in a box</b>
            <div className="flex gap-4">
              <Link className="btn btn-primary btn-lg">
                <span onClick={() => scrollToBottom()}>Request Info</span>
              </Link>
              <Link to={"/coding-challenge-warmup"} className="btn btn-primary btn-lg">
                See Example
              </Link>
            </div>
            {/* <button className="btn btn-primary w-1/3" onClick={() => document.getElementById("contact").scrollIntoView({behavior: 'smooth'}) }>Sales Info</button> */}
          </div>
          <div className={loaded ? "fade-in loaded" : "fade-in"}>
            <div
              className={`scroll-fadeout relative bg-[radial-gradient(ellipse_at_center,#ffffff_0%,oklch(var(--p))_20%,#ffffff00_60%);] w-full h-full drop-shadow-[0_0_50px_oklch(var(--nc))]`}
            >
              <img
                src="./the-coding-challenge-hero-banner.jpg"
                alt="The Coding Challenge Hero Banner"
                className="mask mask-squircle w-full h-full mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
