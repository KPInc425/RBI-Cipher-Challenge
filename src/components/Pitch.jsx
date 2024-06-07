import SectionWrapper from "./shared/SectionWrapper";

const Pitch = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 text-start">
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
          <span className="font-bold text-2xl">Our curated coding challenges</span> offer the perfect blend of fun and
          learning, designed to enhance team cohesion and boost morale. These
          challenges, rooted in classic ciphers and modern-day programming
          puzzles, are crafted to test and expand the problem-solving capabilities
          of your developers, making them an ideal addition to any team-building
          or community event.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Pitch;
