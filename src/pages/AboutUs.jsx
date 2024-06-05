import GradientTitle from "../components/shared/GradientTitle";
import SectionWrapper from "../components/shared/SectionWrapper";

const AboutUs = () => {
  return (
    <SectionWrapper additionalClasses="bg-neutral bg-opacity-60">
      <div className="grid grid-cols-1 lg:grid-cols-4 text-start">
        <div className="row-start-2 text-end lg:-mr-1 lg:pr-4 lg:border-r-4 lg:border-neutral-content">
          <GradientTitle title="About Us" />
          <p className="text-lg  my-8 text-neutral-content">
            RobotBuildersInc is more than just a software development company;
            we're your partner in innovation. With over 30 years of experience in
            the Microsoft development ecosystem, our team is dedicated to
            delivering innovative solutions that exceed your expectations. When
            you choose RobotBuildersInc, you're not just getting a software
            development company; you're getting a team of experts who are
            committed to your rapid iteration towards a shared success.
          </p>
        </div>
        <div className="flex flex-col gap-8 col-start-2 col-span-3 lg:pl-4 lg:border-l-4 lg:border-neutral-content">
          <GradientTitle title="Why Choose RobotBuildersInc?" />
          <p className="text-lg">
            At RobotBuildersInc, we're not just another software development
            company. We're innovators, creators, and problem solvers. With 30+
            years in industry our small on-shore team still absolutely loves
            building software and crafting user experiences. We cover all the
            usual suspects from data big and small, to websites, and mobile
            apps, to more advanced things such highly interactive signalr based
            disconnected lazy loaded wasm clients or custom training AI on your
            data, staff or users voice or chat bot interactions, to automating
            that pesky document, spreadsheet, or common business task.
          </p>
          <p className="text-lg">
            One of the key reasons clients choose us is our pay-as-you-go model.
            We understand that traditional project structures can be cumbersome
            and lead to delays. With our approach, you'll see tangible progress
            each week and have the opportunity to pay for that progress. This
            not only provides you with a clear picture of the project's
            development but also ensures that you're only paying for what you
            see and experience.
          </p>
          <p className="text-lg">
            Our expertise extends across the entire Microsoft software
            development ecosystem. From languages to patterns to practices,
            we've got you covered. While many companies are moving to the cloud,
            we understand that some clients still prefer to host on bare metal.
            We're here to support you in whichever environment you choose,
            ensuring that your solution is tailored to your needs and
            preferences.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
