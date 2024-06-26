import SectionWrapper from "./shared/SectionWrapper";

const contentApi =
  "https://thecodingchallenge.com/.netlify/functions/challengeContent";
const solutionApi =
  "https://thecodingchallenge.com/.netlify/functions/challengeContentCheckAnswer?answer=YourAnswerHere";

const MorsePitch = () => {
  const copyToClipboard = (url) => {
    console.log(url);
    navigator.clipboard.writeText(url);
  };

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 text-start scroll-slidein-left px-4">
        <h3 className="font-bold text-2xl">
          An example of what you might run into during your coding challenge
        </h3>
        <div>
          <h4 className="font-bold text-2xl inline">Morse Code:</h4>{" "}
          <p className="inline"></p>
          <p>
            Please find a cipher key and cipher text have been provided at the
            endpoint below. Use the key to decrypt the hidden message and test
            it against the answer api.
          </p>
          <p> </p>
          <p>
            During a competition several different puzzles will be presented and
            multiple participants can work to complete them before time runs
            out.
          </p>
          <p> </p>
          <p>
            If multiple participants are able to solve the same number of
            puzzles, then a second dataset will be released to race the final
            distance.
          </p>
        </div>

        <div>
          <span>Challenge API:</span>
          <div className="flex items-center gap-4">
            <pre className="whitespace-pre-wrap">
              <code>{contentApi}</code>
            </pre>
            <button className="btn btn-sm" onClick={() => copyToClipboard(contentApi)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <span>Check Answer API:</span>
          <div className="flex items-center gap-4">
            <pre className="whitespace-pre-wrap">
              <code>{solutionApi}</code>
            </pre>
            <button className="btn btn-sm" onClick={() => copyToClipboard(solutionApi)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MorsePitch;

