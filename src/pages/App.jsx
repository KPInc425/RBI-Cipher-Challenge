import Hero from "../components/Hero";
import Features from "../components/features/Features";
import Values from "../components/values/Values";
import Tesitmonials from "../components/testimonials/Testimonials";
import CallToAction from "../components/CallToAction";
import GradientTitle from "../components/shared/GradientTitle";
import SectionWrapper from "../components/shared/SectionWrapper";
import { Link } from "react-router-dom";
import SectionBanner from "../components/shared/SectionBanner";
import Pitch from "../components/Pitch";
import Deliverables from "../components/Deliverables";

function App() {
  return (
    <>
      <Hero />
      <SectionBanner title="Engage Your Development Teams with Exciting Coding Challenges!" />
      <Pitch />
      <SectionBanner title="What We Offer" />
      <Features />
      <SectionBanner title="How it's served" />
      <Deliverables />
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
