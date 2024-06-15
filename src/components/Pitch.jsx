import SectionWrapper from "./shared/SectionWrapper";

const Pitch = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 text-start scroll-slidein-left px-4">
        <p><span className="font-bold text-2xl">Engage Your Development Teams with Exciting Coding Challenges!</span></p>
        <p>        
          <span className="font-bold text-2xl">Are you passionate</span> about fostering collaboration and problem-solving
          skills within your software delivery teams? Do you manage a vibrant
          community where hundreds or even thousands of developers could benefit
          from a friendly yet intellectually stimulating competition? Or perhaps
          you organize annual or semi-annual events that could be enriched with a
          thrilling software developer programming challenge, culminating in an
          exhilarating final showdown among the location winners?
        </p>
        <p>
          <span className="font-bold text-2xl">Our curated developer coding challenges</span> offer the perfect blend of fun and learning, designed to enhance team cohesion and boost morale. These modern-day programming puzzles are crafted to test and expand the problem-solving capabilities of your developers, regardless of their programming level or language, making them an ideal addition to any team-building or community event.
        </p>
        <p>
          <span className="font-bold text-2xl">Online and Offline options</span> allow the general user or
          smaller organization an opportunity to get up and running quickly and affordably while providing 
          the larger organization a simple path through security requirements as our offline editions do not 
          require any external or internal servers, links, or hosting.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Pitch;
