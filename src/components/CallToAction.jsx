import { useEffect, useRef, useState } from "react";
import ContactForm from "./contact/ContactForm";
import GradientTitle from "./shared/GradientTitle";
import SectionWrapper from "./shared/SectionWrapper";
import useIntersection from "../hooks/useIntersection";

const CallToAction = ({ SendToGaIfNotSentYet }) => {
  const [showForm, setShowForm] = useState(true);
  const [showToasterSuccess, setShowToasterSuccess] = useState(false);
  const [showToasterError, setShowToasterError] = useState(false);
  const [toasterText, setToasterText] = useState("");

  const callToActionRef = useRef(null);
  const isVisible = useIntersection(callToActionRef, "0px");

  useEffect(() => {
    if (isVisible) {
      console.log("CallToAction: Intersection Observer is visible");
      SendToGaIfNotSentYet(
        "page scroll",
        "Scroll to Call To Action",
        6
      )
    }
  }, [SendToGaIfNotSentYet, isVisible]);

  const handleSuccessToaster = () => {
    setShowToasterSuccess(true);
    setTimeout(() => {
      setShowToasterSuccess(false);
      setToasterText("");
    }, 3000);
  };
  const handleErrorToaster = () => {
    setShowToasterError(true);
    setTimeout(() => {
      setShowToasterError(false);
      setToasterText("");
    }, 3000);
  };

  return (
    <SectionWrapper additionalClasses="bg-base-200">
      <div
        className="toast toast-top toast-center whitespace-normal sm:whitespace-nowrap w-full md:w-fit max-w-[90%] -translate-x-[53%]">
        {showToasterSuccess && (
          <div className="alert alert-success">
            <span className="font-semibold text-success-content">
              {toasterText}
            </span>
          </div>
        )}
        {showToasterError && (
          <div className=" alert alert-error">
            <span className="font-semibold text-error-content">
              {toasterText}
            </span>
          </div>
        )}
      </div>
      <div
        ref={callToActionRef}
        id="contact"
        className="grid xl:grid-cols-2 text-start overflow-hidden"
      >
        <div
          className={`flex flex-col gap-8 justify-center items-center text-center xl:text-start xl:items-start ${
            !showForm && "order-2"
          } xl:order-1`}
        >
          {/* <GradientTitle
            title="Request Information"
            textSize="xl"
            fontWeight="medium"
          /> */}
          <img src="./i/coding-challenge-cipher (5).jfif" alt="The Coding Challenge Hero2 Banner" className="mask mask-squircle w-full h-full" Style="width: 75%" />
          
          <button
            className={`btn btn-primary rounded-lg p-4 ${
              showForm ? "hidden" : ""
            }`}
            onClick={() => setShowForm(!showForm)}
          >
            Get in touch
          </button>
        </div>
        {!showForm ? (
          <div className="flex justify-center xl:justify-self-end items-center order-1 xl:order-2 mb-4 xl:mb-0">
            <img
              src="./CallToActionBG.jpg"
              alt="call to action"
              className="rounded-lg w-full h-48 xl:h-96 object-cover"
            />
          </div>
        ) : (
          <div className="flex justify-center xl:justify-self-end items-center order-1 xl:order-2 mb-4 xl:mb-0 w-full max-w-[100vw] px-4">
            <ContactForm
              showForm={showForm}
              setShowForm={setShowForm}
              setToasterText={setToasterText}
              handleSuccessToaster={handleSuccessToaster}
              handleErrorToaster={handleErrorToaster}
              SendToGaIfNotSentYet={SendToGaIfNotSentYet} 
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default CallToAction;
