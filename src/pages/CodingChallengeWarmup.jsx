import { Link } from "react-router-dom";
import SectionWrapper from "../components/shared/SectionWrapper";

const CodingChallengeWarmup = () => {
  return (
    <SectionWrapper>
      <div className="h-screen">
        <h1>Coding Challenge Warmup</h1>
        <p>Please enjoy this warm up ahead of joining one of our sessions!</p>

        <p>Description: Morse Code is a method used in telecommunication to encode text characters as sequences of dots and dashes. Each character is represented by a unique combination of short and long signals.</p>
        <p>History: Invented by Samuel Morse and Alfred Vail in the early 1840s, Morse Code revolutionized long-distance communication. It was widely used in telegraphy and remains in use in various forms, including amateur radio and aviation.</p>
        <p>Example: "SOS" is encoded as "... --- ..."</p>
        <div>
          <span>Challenge API:</span>
          <pre><code>https://thecodingchallenge.com/.netlify/functions/challengeContent</code></pre>          
        </div>
        <div>
          <span>Check Answer API:</span>
          <pre><code>https://thecodingchallenge.com/.netlify/functions/challengeContentCheckAnswer</code></pre>          
        </div>        
        <Link to={"/"} className="btn">Go Home</Link>
      </div>
    </SectionWrapper>
  );
}

export default CodingChallengeWarmup;