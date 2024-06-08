import featureData from "../../data/featureData";
import SectionWrapper from "../shared/SectionWrapper";

const FeaturesSimple = () => {
  return (
    <SectionWrapper>
      <div className="grid lg:grid-cols-2 lg:text-start">
        {featureData.map((feature, index) => {
          return (
            <div
              className={`flex flex-col p-2 lg:p-4 text-sm lg:text-lg text-center lg:text-start max-w-[100vw] gap-4`}
              key={feature.title}
            >
              <div
                className={`flex flex-col items-center lg:flex-row gap-2 max-w-full`}
              >
                
                {feature.logo !== null && (
                  <div className="h-14 w-14">{feature.logo}</div>
                )}                
                
                <span className="font-bold lg:text-start text-xl lg:text-3xl text-balance">
                  {feature.title}
                </span>
              </div>
              <p className="text-balance pb-4">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default FeaturesSimple;
