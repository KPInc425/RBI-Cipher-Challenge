import GradientTitle from "./shared/GradientTitle";
import SectionWrapper from "./shared/SectionWrapper";

const CallToAction = () => {
  return (
    <SectionWrapper additionalClasses="bg-base-200">
      <div id="contact" className="grid lg:grid-cols-2 text-start overflow-hidden">
        <div className="flex flex-col gap-8 justify-center items-center text-center lg:text-start lg:items-start order-2 lg:order-1">
          <GradientTitle title="Ready to make your dream a reality, get prototype ready?" textSize="lg" fontWeight="medium" />
          <button className="bg-primary rounded-lg p-4 text-black">Get in touch</button>
        </div>
        <div className="flex justify-center lg:justify-self-end items-center order-1 lg:order-2">
          <img src="./CallToActionBG.jpg" alt="cta" className="rounded-lg w-full h-48 lg:h-96 object-cover" />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CallToAction;