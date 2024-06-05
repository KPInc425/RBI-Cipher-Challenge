import GradientTitle from "../shared/GradientTitle";
import SectionBadge from "../shared/SectionBadge";
import SectionWrapper from "../shared/SectionWrapper";
import Feature from "./Feature";
import featureData from "../../data/featureData";

const Features = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 justify-center items-center mb-16">
        <SectionBadge title="Features" />
        <div className="max-w-screen-lg mx-auto">
          <GradientTitle
            title="Sharpen Your Coding Edge with Engaging Challenges!"
            textSize="lg"
            fontWeight="medium"
          />
        </div>
      </div>
      <div className="flex flex-col gap-24">
        {featureData.map((feature, index) => (
          <Feature
            key={feature.title}
            title={feature.title}
            subTitle={feature.subTitle}
            image={feature.image}
            description={feature.description}
            reverse={index % 2 === 0 ? true : false}
            hasGradient={feature.hasGradient}
            startGradient={feature.startGradient}
            endGradient={feature.endGradient}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
