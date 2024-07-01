import { Link } from "react-router-dom";
import SectionWrapper from "../components/shared/SectionWrapper";
import GradientTitle from "../components/shared/GradientTitle";
import SectionBanner from "../components/shared/SectionBanner";
import SignUp from "../components/shared/SignUp";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

const CommunityProgrammingChallenge = () => {
  
  useEffect(() => {
    document.title = "Community Programming Challenge";
  }, []);
  const [hasSentList, setHasSentList] = useState([]);
  const SendToGaIfNotSentYet = (category, action, value) => {
    if (!hasSentList.includes(action) && !location.href.includes("localhost")) {
      // debugger;
      setHasSentList([...hasSentList, action]);
      console.log("Firing GA event");
      ReactGA.event({
        category: category,
        action: action,
        value: value,
      });
    }
  }
  return (
    <>
      <SectionWrapper>
        <div className="text-center mb-12">
          <p className="text-2xl xl:text-7xl font-semibold mb-4">
            Join the Ultimate Coding Challenge Live Event
          </p>
        </div>
        <p className="xl:text-3xl px-4">
          Are you ready to put your coding skills to the test and connect with
          like-minded developers? Join our Messages in a Bottle Coding Challenge
          and become part of a vibrant community dedicated to learning,
          collaboration, and fun! Here’s what you need to know:
        </p>
      </SectionWrapper>
      <SectionBanner title="Coding Challenge Event Schedule" />
      <SectionWrapper>
        <div className="flex flex-col xl:flex-row gap-16 px-4">
          <div className="xl:text-start">
            <h2 className="text-2xl xl:text-4xl">
              <GradientTitle title="4" /> Events per Month
            </h2>
            <p className="xl:text-2xl text-balance">
              Engage in weekly "Messages in a Bottle" challenges, each designed
              to test your skills and creativity.
            </p>
          </div>
          <div className="xl:text-start">
            <h2 className="text-2xl xl:text-4xl">
              <GradientTitle title="3" /> Month Seasons
            </h2>
            <p className="xl:text-2xl text-balance">
              Participate in a series of events over three months, leading up to
              our thrilling semi-finals and finals.
            </p>
          </div>
        </div>
      </SectionWrapper>
      <SectionBanner title="How the coding challenge works" />
      <SectionWrapper>
        <div className="flex flex-col xl:flex-row gap-16 px-4">
          <div className="xl:text-start">
            <h2 className="text-4xl">
              <p className="text-2xl xl:text-3xl font-semibold mb-4">Sign Up</p>
            </h2>
            <p className="xl:text-2xl text-balance">
              Pay a small fee to join any of the weekly challenges. Each
              challenge offers unique puzzles and exciting opportunities to
              learn.
            </p>
          </div>
          <div className="xl:text-start">
            <h2 className="text-4xl">
              <p className="text-2xl xl:text-3xl font-semibold mb-4">Compete</p>
            </h2>
            <p className="xl:text-2xl text-balance">
              Take on fun and intellectually stimulating coding challenges,
              ranging from easy to hard.
            </p>
          </div>
          <div className="xl:text-start">
            <h2 className="text-4xl">
              <p className="text-2xl xl:text-3xl font-semibold mb-4">Advance</p>
            </h2>
            <p className="xl:text-2xl text-balance">
              Complete the weekly challenges to qualify for the semi-finals and
              potentially the finals.
            </p>
          </div>
          <div className="xl:text-start">
            <h2 className="text-4xl">
              <p className="text-2xl xl:text-3xl font-semibold mb-4">Win</p>
            </h2>
            <p className="xl:text-2xl text-balance">
              Top performers from the semi-finals will compete in the finals.
            </p>
          </div>
        </div>
      </SectionWrapper>
      <SectionBanner title="Challenge Theme" />

      <SectionWrapper>
        <h3 className="mb-8">
          <p className="text-2xl xl:text-5xl font-semibold mb-4">
            Messages in a Bottle
          </p>
        </h3>
        <p className="xl:text-2xl text-balance px-4">
          Embark on a journey to uncover hidden messages. Delve into intricate
          puzzles that will test your ingenuity and creativity. As you decode
          each message, you'll unlock more than just the locks—you'll unlock the
          rich legacy of ciphers that have shaped secure communication
          throughout history. Are you ready to find the secrets that lie within?
        </p>
      </SectionWrapper>
      <SectionBanner title="Coding Challenge Program Play Modes" />

      <SectionWrapper>
        <div className="flex flex-col gap-16">
          <div>
            <h3 className="mb-2">
              <p className="text-2xl xl:text-5xl font-semibold mb-4">
                Single Player Mode
              </p>
            </h3>
            <p className="xl:text-2xl text-balance">
              Solo adventure with narrative-driven experiences or custom play.
            </p>
          </div>
          <div className="px-4">
            <h3 className="mb-2">
              {/* <GradientTitle title="Tournament Play" /> */}
              <p className="text-2xl xl:text-5xl font-semibold mb-4">
                Tournament Play
              </p>
            </h3>
            <h4 className="text-sm xl:text-lg italic mb-4 px-4">
              Competitive thrills with three distinct modes
            </h4>
            <div className="flex flex-col xl:grid xl:grid-cols-3 justify-center gap-4 xl:gap-16">
              <div>
                <h2 className="text-2xl xl:text-3xl">
                  <p className="font-semibold mb-4">Compressed-Time</p>
                </h2>
                <p className="xl:text-2xl text-balance">Fast-paced challenges.</p>
              </div>
              <div>
                <h2 className="text-2xl xl:text-3xl">
                  <p className="font-semibold mb-4">Endurance</p>
                </h2>
                <p className="xl:text-2xl text-balance">
                  Extended period challenges.
                </p>
              </div>
              <div>
                <h2 className="text-2xl xl:text-3xl">
                  <p className="font-semibold mb-4">The Long-Walk</p>
                </h2>
                <p className="xl:text-2xl text-balance">
                  Relaxed pace for deep engagement.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-2">
              <p className="text-2xl xl:text-5xl font-semibold mb-4">
                Tournament Hosting
              </p>
            </h3>
            <p className="xl:text-2xl text-balance">
              Manage tournaments seamlessly with online or offline editions
            </p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper additionalClasses="bg-neutral-800">
        <h3 className="mb-2">
          <p className="text-2xl xl:text-5xl font-semibold mb-4 text-neutral-content">Join Us Now</p>
        </h3>
        <p className="xl:text-3xl text-balance px-8 text-neutral-content">
          Elevate your coding skills in a community that's passionate about
          problem-solving and innovation. Register for one or more of our weekly
          "Messages in a Bottle" challenges, and get ready to unlock your
          potential in our coding competitions!
        </p>
      </SectionWrapper>
      {/* <SignUp
        signUpTaglineHeader="Ready to get started?"
        signUpTagline="Fill out the form to register and receive
        all the necessary details to embark on your coding adventure."
      /> */}
      <CallToAction SendToGaIfNotSentYet={SendToGaIfNotSentYet} actionMessage="Community Programming Challenge" />

      <SectionWrapper>
        <div className="flex flex-col gap-4 xl:gap-8 mb-8">
          <p className="xl:text-2xl px-4 xl:pr-12 xl:text-start">
            Stay tuned for more updates and exciting news about our coding
            challenges. Let’s code, compete, and conquer together!
          </p>
          <p className="text-sm italic xl:text-end">
            #MessagesInABottle #CodingChallenge #DevCommunity #TeamBuilding
          </p>
        </div>
        <Link to={"/"} className="btn btn-primary btn-lg">
          Go Home
        </Link>
      </SectionWrapper>
    </>
  );
};

export default CommunityProgrammingChallenge;
