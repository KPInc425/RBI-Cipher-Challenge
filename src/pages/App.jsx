import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionBanner from "../components/shared/SectionBanner";
import Pitch from "../components/Pitch";
import Deliverables from "../components/Deliverables";
import FeaturesSimple from "../components/features/FeaturesSimple";
import ProjectCarousel from "../components/projects/ProjectCarousel";
import Challenges from "../components/Challenges";
import { useState } from "react";
import ReactGA from "react-ga4";

function App() { 
  const [hasSentList, setHasSentList] = useState([]);
  const SendToGaIfNotSentYet = (category, action, value) => {
    if (!hasSentList.includes(action)) {
      // debugger;
      setHasSentList([...hasSentList, action]);
      console.log("Firing GA event");
      ReactGA.event({
        category: category,
        action: action,
        value: value,
      });
    }
    console.log("More stuff that is good, but not good");
  };

  return (
    <>
      <Hero />
      <SectionBanner title="Fun for them, easy for you" />
      <Pitch />
      <SectionBanner title="The Coding Challenges" />
      <FeaturesSimple SendToGaIfNotSentYet={SendToGaIfNotSentYet} />
      {/* <SectionBanner title="How it's served" /> */}
      {/* <Deliverables /> */}
      {/* <Values /> */}
      <SectionBanner title="Multiple events worth of content" />
      <Challenges SendToGaIfNotSentYet={SendToGaIfNotSentYet} />
      {/* <Tesitmonials /> */}
      <SectionBanner title="Interested?" />
      <SectionWrapper>
        <p className="text-center xl:text-start scroll-scale-up px-4">
          <h4 className="font-bold text-2xl inline">Are you ready to elevate</h4>{" "}
          your developers experience? Fill out the form below to receive the
          official sales materials, a comprehensive summary of each of the
          challenges, and our competitive pricing
        </p>
      </SectionWrapper>
      {/* <SectionWrapper >
        <div className="flex flex-col gap-8 justify-center items-center text-center">
          <GradientTitle title="Want a sneak peak?" textSize="lg" fontWeight="medium" />
          <Link to={'/challenges'} className="btn btn-primary rounded-lg p-4">Challenges</Link>
        </div>
      </SectionWrapper> */}
      <CallToAction SendToGaIfNotSentYet={SendToGaIfNotSentYet} />
    </>
  );
}

export default App;
