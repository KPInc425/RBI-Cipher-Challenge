import { Link } from "react-router-dom";
import SectionWrapper from "../components/shared/SectionWrapper";

const CommunityProgrammingChallenge = () => {
  return (
    <SectionWrapper>
      <div className="h-screen">
        <h1>Join the Ultimate Coding Challenge Live Event</h1>
        <p>
          Are you ready to put your coding skills to the test and connect with
          like-minded developers? Join our Messages in a Bottle Coding Challenge
          and become part of a vibrant community dedicated to learning,
          collaboration, and fun! Here’s what you need to know:
        </p>
        <h2>Coding Challenge Event Schedule:</h2>
        <p>
          4 Events per Month: Engage in weekly "Messages in a Bottle"
          challenges, each designed to test your skills and creativity.
        </p>
        <p>
          3-Month Seasons: Participate in a series of events over three months,
          leading up to our thrilling semi-finals and finals.
        </p>

        <h2>How the coding challenge works</h2>
        <p>
          Sign Up: Pay a small fee to join any of the weekly challenges. Each
          challenge offers unique puzzles and exciting opportunities to learn.
        </p>
        <p>
          Compete: Take on fun and intellectually stimulating coding challenges,
          ranging from easy to hard.
        </p>
        <p>
          Advance: Complete the weekly challenges to qualify for the semi-finals
          and potentially the finals.
        </p>
        <p>
          Win: Top performers from the semi-finals will compete in the finals
          for the ultimate bragging rights and prizes.
        </p>

        <h2>Challenge Theme: Messages in a Bottle</h2>
        <h3>Messages in a Bottle</h3>
        <p>
          Embark on a journey to uncover hidden messages. Delve into intricate
          puzzles that will test your ingenuity and creativity. As you decode
          each message, you'll unlock more than just the locks—you'll unlock the
          rich legacy of ciphers that have shaped secure communication
          throughout history. Are you ready to find the secrets that lie within?
        </p>

        <h2>Coding Challenge Program Play Modes</h2>
        <p>
          Single Player Mode: Solo adventure with narrative-driven experiences
          or custom play.
        </p>

        <h2>Tournament Play: Competitive thrills with three distinct modes:</h2>
        <p>Compressed-Time: Fast-paced challenges.</p>
        <p>Endurance: Extended period challenges.</p>
        <p>The Long-Walk: Relaxed pace for deep engagement.</p>

        <h2>
          Tournament Hosting: Manage tournaments seamlessly with online or
          offline editions.
        </h2>

        <div>
          Join us now and elevate your coding skills in a community that's
          passionate about problem-solving and innovation. Register for one or
          more of our weekly "Messages in a Bottle" challenges, and get ready to
          unlock your potential in our coding competitions!
        </div>

        <div>
          Ready to get started? Fill out the form below to register and receive
          all the necessary details to embark on your coding adventure.
        </div>

        <h2>Register Now</h2>
        <div>
          Stay tuned for more updates and exciting news about our coding
          challenges. Let’s code, compete, and conquer together!
          #MessagesInABottle #CodingChallenge #DevCommunity #TeamBuilding
        </div>

        
        <Link to={"/"} className="btn">
          Go Home
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default CommunityProgrammingChallenge;
