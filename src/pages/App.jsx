import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionBanner from "../components/shared/SectionBanner";
import Pitch from "../components/Pitch";
import Deliverables from "../components/Deliverables";
import FeaturesSimple from "../components/features/FeaturesSimple";

function App() {
  return (
    <>
      <Hero />
      <SectionBanner title="Fun for them, easy for you" />
      <Pitch />
      <SectionBanner title="The Coding Challenge" />
      <FeaturesSimple />
      {/* <SectionBanner title="How it's served" /> */}
      {/* <Deliverables /> */}
      {/* <Values /> */}
      {/* <Tesitmonials /> */}
      <SectionBanner title="Interested?" />
      <SectionWrapper>
        <p className="text-center xl:text-start">
          <span className="font-bold text-2xl">Are you ready to elevate</span>{" "}
          your next event or team-building activity? Fill out the form below to
          receive the official sales materials, a comprehensive summary of each
          of the challenges, and our competitive pricing
        </p>
      </SectionWrapper>
      {/* <SectionWrapper >
        <div className="flex flex-col gap-8 justify-center items-center text-center">
          <GradientTitle title="Want a sneak peak?" textSize="lg" fontWeight="medium" />
          <Link to={'/challenges'} className="btn btn-primary rounded-lg p-4">Challenges</Link>
        </div>
      </SectionWrapper> */}
      <CallToAction />
    </>
  );
}

export default App;
