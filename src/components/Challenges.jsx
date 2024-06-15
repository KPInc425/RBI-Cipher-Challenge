import SectionWrapper from "./shared/SectionWrapper";

const Challenges = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 text-start scroll-slidein-top px-4">
        <p>
          <span className="font-bold text-2xl">
          We specialize in preparing these programs
          </span>{" "}
          <span>
          for seamless execution, ensuring your event can focus on delivering a remarkable experience without technical or logistical distractions.
          </span>
        </p>
        <p>
          <span className="font-bold text-2xl">

The majority of our programs are language-agnostic,</span>{" "}
          <span>
          accommodating any programming language and skill level. While most are designed for fun and team cohesion, some delve into specific skill sets like end-to-end UI testing, touching on topics such as Gherkin, Cucumber, Playwright, or Selenium.
          </span>
        </p>
        <p>
          <span className="font-bold text-2xl">
            

Our range of ready-to-run programs includes
          </span>{" "}
          <span>
          engaging challenges like Messages in a Bottle, What in the Dopplar, AI Bot Interplays, I am Feeling Pressured, Let's Get Analog, Has Anyone Seen Lexi, Data Seas, Data Scraping & Test Automation, Renamed Cleaned Up Tell me Again, and Can you hear me are you out there.
          </span>
        </p>
        
      </div>
    </SectionWrapper>
  );
};

export default Challenges;
