import GradientTitle from "./shared/GradientTitle";
import SectionWrapper from "./shared/SectionWrapper";

const CallToAction = () => {
  return (
    <SectionWrapper additionalClasses="bg-base-200">
      <div id="contact" className="grid xl:grid-cols-2 text-start overflow-hidden">
        <div className="flex flex-col gap-8 justify-center items-center text-center xl:text-start xl:items-start order-2 xl:order-1">
          <GradientTitle title="Ready to test your mind and see how you do?" textSize="xl" fontWeight="medium" />
          <button className="btn btn-primary rounded-lg p-4">Get in touch</button>
        </div>
        <div className="flex justify-center xl:justify-self-end items-center order-1 xl:order-2 mb-4 xl:mb-0">
          <img src="./CallToActionBG.jpg" alt="call to action" className="rounded-lg w-full h-48 xl:h-96 object-cover" />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CallToAction;