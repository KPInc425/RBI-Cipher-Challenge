import GradientTitle from "./shared/GradientTitle";

const heroTexts = [
  "Cryptic clues, clever codes, and brain-twisting puzzles await! Join our challenge and test your skills as a master codebreaker.",
  "Experience the thrill of the chase as we present you with a new cipher to solve each week. Will you be the first to crack it?",
  "From ancient civilizations to modern-day mysteries, our cipher challenges will transport you on a thrilling journey of discovery and exploration.",
  "Join the ranks of legendary codebreakers and uncover the secrets that lie within our cryptographic conundrums.",
];


const Hero = () => {
  return (
  <div className="hero min-h-screen">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content w-full py-16">
      <div className="flex flex-col xl:flex-row w-full gap-8">
        <div className="max-w-md flex flex-col items-center text-center mx-auto xl:items-start xl:text-start justify-center gap-4">
          <div className="badge badge-lg h-12 badge-outline p-4 rounded-lg font-semibold">Code Crusaders</div>
          <GradientTitle title="Decipher the past, forge the future" />
          <p className="mb-5">{heroTexts[Math.floor(Math.random() * heroTexts.length)]}</p>
          <button className="btn btn-primary w-1/3">Start Cracking</button>
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