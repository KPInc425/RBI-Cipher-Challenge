import { useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [actionMessage, setactionMessage] = useState(false);
  // const successToasterRef = useRef < ToasterHandle > null;
  // const errorToasterRef = useRef < ToasterHandle > null;
  const [toasterText, setToasterText] = useState("");

  const handleSuccessToaster = () => {
    // successToasterRef.current?.publish();
  };
  const handleErrorToaster = () => {
    // errorToasterRef.current?.publish();
  };

  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-20 justify-around container mx-auto text-xl text-center xl:text-start p-4 pb-12 lg:p-12">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p>sales@robotbuildersinc.com</p>
      </div>
      {!showForm ? (
          <button
            className="btn btn-secondary"
            onClick={() => setShowForm(!showForm)}
          >
            {" "}
            Contact Us{" "}
          </button>
      ) : (
        <ContactForm
          actionMessage={actionMessage}
          showForm={showForm}
          setShowForm={setShowForm}
          setToasterText={setToasterText}
          handleSuccessToaster={handleSuccessToaster}
          handleErrorToaster={handleErrorToaster}
        />
      )}
    {/* <Toaster ref={successToasterRef} bgColor={'rgb(90,106,79)'}>{toasterText}</Toaster>
    <Toaster ref={errorToasterRef} bgColor={'crimson'}>{toasterText}</Toaster> */}

    </div>
  );
};
export default Contact;
