import GradientTitle from "../shared/GradientTitle";
import SectionBadge from "../shared/SectionBadge";
import SectionWrapper from "../shared/SectionWrapper";
import FlaskIcon from "../icons/FlaskIcon";
import Value from "./Value";

const Values = () => {
  return (
    <SectionWrapper additionalClasses={"bg-base-300/60 text-base-content"}>
      <div className="flex flex-col gap-4 justify-center items-center mb-4">
        <SectionBadge title="Values" />
        <div className="max-w-screen-lg mx-auto">
          <GradientTitle title="Our values are the core of our business" textSize="lg" fontWeight="medium"  />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:flex justify-center p-12 mx-auto">
        <Value icon={<FlaskIcon />} title="Radical Transparency" description="We consider deployed working software that solves a business function as the primary measure of progress.  Together we will continually focus on the next most valuable and important thing we can finish." />
        <Value icon={<FlaskIcon />} title="Open Retrospection" description="Each week the team hosts an event externally, and internally, called the retrospective.  During this we will review the release notes, review the product increment, discuss openly what we are all learning, and how any of our thinking is shifting based on having had more time and greater opportunity to bring your product online together. " />
        <Value icon={<FlaskIcon />} title="Regular Adaptation" description="A key goal of our retrospective is to generate ideas on what we will try to do moving forward as a delivery team, and the wider business team, that at least hypothetically might increase one of our key areas of concern in predictability, quality, time to market, and the joy of all involved." />
        <Value icon={<FlaskIcon />} title="Fair pricing and built-in payment plans" description="In today’s financial global economy and with the uncertainty of how a product or idea will be received by its market we are always attempting to strike a balance that places us more as a trusted partner and less as a vendor.  We have spent years working out the best way to help offset some of your risk without taking on too much ourselves and think we have found a lovely solution that we look forward to sharing with you." />
      </div>
    </SectionWrapper>
  )
}

export default Values;