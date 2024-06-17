import bgImage from "../../assets/coding-challenge-section-background.jpg";

const SectionBanner = ({ title = "" }) => {
  return (
    <div className={"hero h-40 bg-bottom scroll-fadein"} style={{
      backgroundImage:
        `url(${bgImage})`,
    }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <p className="text-2xl md:text-3xl xl:text-5xl font-bold text-balance">{title}</p>
      </div>
    </div>
  );
};

export default SectionBanner;
