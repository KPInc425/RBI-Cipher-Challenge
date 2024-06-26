import { Link } from "react-router-dom";
import SectionWrapper from "../components/shared/SectionWrapper";
import Hero2 from "../components/Hero2";
import Pitch2 from "../components/Pitch2";
import SectionBanner from "../components/shared/SectionBanner";
import CallToAction from "../components/CallToAction";
import { useState } from "react";
import ReactGA from "react-ga4";

const CodingChallengeWarmup = () => {
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
    <SectionWrapper>
      <div className="h-screen">
        <Hero2 />
        <SectionBanner title="A coding challenge warm-up!" />
        <Pitch2 />
        <CallToAction SendToGaIfNotSentYet={SendToGaIfNotSentYet} />
      </div>
    </SectionWrapper>
  );
};

export default CodingChallengeWarmup;
