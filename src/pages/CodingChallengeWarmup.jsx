import { Link } from "react-router-dom";
import SectionWrapper from "../components/shared/SectionWrapper";
import Hero2 from "../components/Hero2";
import Pitch2 from "../components/Pitch2";
import SectionBanner from "../components/shared/SectionBanner";

const CodingChallengeWarmup = () => {
  return (
    <SectionWrapper>
      <div className="h-screen">
        <Hero2 />
        <SectionBanner title="A coding challenge warm-up!" />
        <Pitch2 />
        
        {/* <h1>Coding Challenge Warmup</h1>
        <p>Please enjoy this warm up ahead of joining one of our sessions!</p>
        <p>Description: Morse Code is a method used in telecommunication to encode text characters as sequences of dots and dashes. Each character is represented by a unique combination of short and long signals.</p>
        <p>History: Invented by Samuel Morse and Alfred Vail in the early 1840s, Morse Code revolutionized long-distance communication. It was widely used in telegraphy and remains in use in various forms, including amateur radio and aviation.</p>
        <p>Example: "SOS" is encoded as "... --- ..."</p> */}
              
        <Link to={"/"} className="btn">Go Home</Link>
      </div>
    </SectionWrapper>
  );
}

export default CodingChallengeWarmup;