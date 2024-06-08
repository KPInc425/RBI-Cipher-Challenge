import bgImage from "../../assets/BG2.jpg";

const SectionBanner = ({ title = "" }) => {
  return (
    <div className={"hero h-40 bg-bottom"} style={{
      backgroundImage:
        `url(${bgImage})`,
    }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <p className="text-xl xl:text-5xl font-bold text-balance">{title}</p>
      </div>
    </div>
  );
};

export default SectionBanner;
