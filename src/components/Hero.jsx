import GradientTitle from "./shared/GradientTitle";

const heroTexts = [
  "Use any programming language, simple algorithm and puzzles for any skill-level.  Fun solo, or as part of an event.  Supports an endless number of players."  
];


const Hero = () => {
  return (
  <div className="hero min-h-screen">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content w-full py-16">
      <div className="flex flex-col xl:flex-row w-full gap-8">
        <div className="max-w-md flex flex-col items-center text-center mx-auto xl:items-start xl:text-start justify-center gap-4">
          
          <GradientTitle title="Software Developer Coding Challenge" />
          <p className="mb-5">{heroTexts[Math.floor(Math.random() * heroTexts.length)]}</p>
          <b>An entire successful event ready to go</b>
          {/* <button className="btn btn-primary w-1/3" onClick={() => document.getElementById("contact").scrollIntoView({behavior: 'smooth'}) }>Sales Info</button> */}
        </div>
        <div className="relative bg-[radial-gradient(ellipse_at_center,#ffffff_0%,oklch(var(--p))_20%,#ffffff00_60%);] w-full h-full drop-shadow-[0_0_50px_oklch(var(--nc))]">
          <img src="./BG2.jpg" alt="Brainstorming" className="mask mask-squircle w-full h-full mix-blend-multiply" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;