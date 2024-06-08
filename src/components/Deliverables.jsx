import GradientTitle from "./shared/GradientTitle";
import deliverablesData from "../data/deliverablesData";
import SectionWrapper from "./shared/SectionWrapper";
import CipherLogoIcon from "../components/icons/CipherLogoIcon";

const Deliverables = () => {
  return (
    <SectionWrapper>
      {/* <CipherLogoIcon /> */}

      {/* center this text? ***/}
      <div className="grid lg:grid-cols-1 text-center">
      
        {deliverablesData.map((deliverable, index) => {
          return (
            <div
              className={`flex flex-col p-2 lg:p-4 text-sm lg:text-lg text-center max-w-[100vw] gap-4`}
              key={deliverable.name}
            >
              <div
                className={`flex flex-col items-center lg:flex-row gap-2 max-w-full`}
              >
                {/* <div className="h-14 w-14">{deliverable.logo}</div> */}
                <span className="font-bold lg:text-start text-xl lg:text-3xl text-balance">
                  {deliverable.name}
                </span>
              </div>
              {/* <p className="text-balance pb-4">{deliverable.description}</p> */}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Deliverables;
