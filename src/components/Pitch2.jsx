import SectionWrapper from "./shared/SectionWrapper";

const Pitch2 = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 text-start scroll-slidein-left px-4">
        <h3 className="font-bold text-2xl">
          An example of what you might run into during your coding challenge
        </h3>
        <div>
          <h4 className="font-bold text-2xl inline">
            Morse Code:
          </h4>{" "}
          <p className="inline"></p>
          <p>Please find a cipher key and cipher text have been provided at the endpoint below.  Use the key to decrypt the hidden message and test it against the answer api.</p>
          <p> </p>
          <p>During a competition several different puzzles will be presented and multiple participants can work to complete them before time runs out.</p>
          <p> </p>
          <p>If multiple participants are able to solve the same number of puzzles, then a second dataset will be released to race the final distance.</p>
        </div>

        <div>
          <span>Challenge API:</span>
          <pre>
            <code>
              https://thecodingchallenge.com/.netlify/functions/challengeContent
            </code>
          </pre>
        </div>
        <div>
          <span>Check Answer API:</span>
          <pre>
            <code>
              https://thecodingchallenge.com/.netlify/functions/challengeContentCheckAnswer
            </code>
          </pre>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Pitch2;
