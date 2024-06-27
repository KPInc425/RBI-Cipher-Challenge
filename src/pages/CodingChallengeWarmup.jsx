import { Link } from "react-router-dom";
import SectionWrapper from "../components/shared/SectionWrapper";
import MorseHero from "../components/MorseHero";
import MorsePitch from "../components/MorsePitch";
import SectionBanner from "../components/shared/SectionBanner";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

const CodingChallengeWarmup = () => {
  const [hasSentList, setHasSentList] = useState([]);
  const SendToGaIfNotSentYet = (category, action, value) => {
    if (!hasSentList.includes(action) && !location.href.contains("localhost")) {
      // debugger;
      setHasSentList([...hasSentList, action]);
      console.log("Firing GA event");
      ReactGA.event({
        category: category,
        action: action,
        value: value,
      });
    }    
  };

  useEffect(() => {
    document.title = "Coding Challenge Warmup";
  }, []);
    
  return (
    <>
        <MorseHero SendToGaIfNotSentYet={SendToGaIfNotSentYet} />
        <SectionBanner title="A coding challenge warm-up!" />
        <MorsePitch />
        <CallToAction SendToGaIfNotSentYet={SendToGaIfNotSentYet} />
    </>
  );
};

export default CodingChallengeWarmup;
