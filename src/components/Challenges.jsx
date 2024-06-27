import { useEffect, useRef } from "react";
import SectionWrapper from "./shared/SectionWrapper";
import useIntersection from "../hooks/useIntersection";

const Challenges = ({ SendToGaIfNotSentYet }) => {
  const challengesRef = useRef(null);
  const isVisible = useIntersection(challengesRef, "0px");

  useEffect(() => {
    if (isVisible && !location.href.contains("localhost")) {
      console.log("Challenges: Intersection Observer is visible");
      SendToGaIfNotSentYet(
        "page scroll",
        "Scroll to Challenges",
        4
      )
    }
  }, [SendToGaIfNotSentYet, isVisible]);

  return (
    <SectionWrapper>
      <div
        ref={challengesRef}
        className="flex flex-col gap-4 text-start scroll-slidein-top px-4">      
        <div>
          <h4 className="font-bold text-2xl inline">
            We specialize in preparing these programs
          </h4>{" "}
          <p className="inline">
            for seamless execution, ensuring your event can focus on delivering
            a remarkable experience without technical or logistical
            distractions.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-2xl inline">
            The majority of our programs are language-agnostic,
          </h4>{" "}
          <p className="inline">
              accommodating any programming language and skill level. While most
              are designed for fun and team cohesion, some delve into specific
              skill sets like end-to-end UI testing, touching on topics such as
              Gherkin, Cucumber, Playwright, or Selenium.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-2xl inline">
            Our range of ready-to-run programs includes
          </h4>{" "}
          <p>
              engaging challenges like Messages in a Bottle, What in the Dopplar,
              AI Bot Interplays, I am Feeling Pressured, Let's Get Analog, Has
              Anyone Seen Lexi, Data Seas, Data Scraping & Test Automation,
              Renamed Cleaned Up Tell me Again, and Can you hear me are you out
              there.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Challenges;
