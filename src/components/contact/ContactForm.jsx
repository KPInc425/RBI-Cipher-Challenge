import { useRef, useState } from "react";
import sendMail from "../../../netlify/functions/sendMail.mjs"
// import HCaptcha from "@hcaptcha/react-hcaptcha";


const ContactForm = ({showForm, setShowForm, setToasterText, handleSuccessToaster, handleErrorToaster, SendToGaIfNotSentYet, emailSubjectDataWording = "TheCodingChallenge Info:" }) => {
  const [showToasterError, setShowToasterError] = useState(false);
  const contactForm = useRef();

  // const onHCaptchaChange = (token) => {
  //   contactForm.current.querySelector('textarea[name=h-captcha-response]').value = token;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jkapValue = document.querySelector("input[id=jkap]").value;

    if (jkapValue != "9") {
        setShowToasterError(true);
        setTimeout(() => {
          setShowToasterError(false);
        }, 3000);
        return;
    } else {
      console.log('submitted')
      if(!location.href.includes("localhost")) {
        SendToGaIfNotSentYet("Contact Form", "Action Contact Form Submitted", 10);
      }

      const nameInput = e.target.elements.namedItem('name')
      const subjectData = `${emailSubjectDataWording} ${nameInput.value} - ${e.target.email.value}`
      const textData = e.target.message.value  
  
      const emailData = {
        name: nameInput.value,
        email: e.target.email.value,
        subject: subjectData,
        message: textData,
      }
      
  
      console.log(emailData)
      console.log(JSON.stringify(emailData))
  
      try {      
        const results = await sendMail(emailData);
        console.log(results);

        setToasterText('Email Sent. We will get back to you as soon as possible.')
        // console.log("Response: ", results)
        if (results.success) {
          handleSuccessToaster()
          setShowForm(!showForm)
        } else {
          setToasterText(`Failed to send email. ${results.message}`)
          handleErrorToaster();
        }
      } catch (err) {
        console.log("Error: ", err)
        handleErrorToaster();
      }
    }
  }

  return (
    <>
          
      <div className="toast toast-top toast-center whitespace-normal sm:whitespace-nowrap w-full md:w-fit max-w-[90%] -translate-x-[53%]">
        {showToasterError && (
          <div className=" alert alert-error">
            <span className="font-semibold text-error-content">
              Please answer the math question correctly to help us avoid bots.
            </span>
          </div>
        )}
      </div>
      <form 
        ref={contactForm} 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-2 items-start w-full"
      >
        <p className="font-medium xl:text-5xl text-3xl">
          Request Information
        </p>
      
        {/* <input type="checkbox" name="botcheck" className="hidden" /> */}
        <label htmlFor="name">Name</label>
        <input name="name" id="name" className="input input-primary w-full" />
        <label htmlFor="email">Email*</label>
        <input type="email" name="email" id="email" className="input input-primary w-full" required />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows={6} className="textarea textarea-primary w-full"/>   
        <div className="flex flex-col xl:flex-row gap-4 items-end justify-between w-full">
          {/* <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            reCaptchaCompat={false}
            onVerify={onHCaptchaChange} 
          />   */}
          <div>
            <span>What is 4 + 5 please?</span>
            <input id="jkap" className="input input-primary w-full" required />
          </div>
          <div className="flex gap-4">
            <button className="btn btn-primary"
              type='submit'
            >
              Send Message</button>
            <button className="btn btn-secondary" onClick={() => setShowForm(!showForm)}>Cancel</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm