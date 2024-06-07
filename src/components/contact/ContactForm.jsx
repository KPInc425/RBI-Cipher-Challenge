import sendMail from "../../../netlify/functions/sendMail.mjs"


const ContactForm = ({showForm, setShowForm, setToasterText, handleSuccessToaster, handleErrorToaster}) => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitted')

    const nameInput = e.target.elements.namedItem('name')
    const subjectData = `TheCodingChallenge: ${nameInput.value} - ${e.target.email.value}`
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

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-start w-full">
        <input type="checkbox" name="botcheck" className="hidden" />
        <label htmlFor="name">Name</label>
        <input name="name" id="name" className="input input-primary w-full" />
        <label htmlFor="email">Email*</label>
        <input type="email" name="email" id="email" className="input input-primary w-full" required />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows={6} className="textarea textarea-primary w-full"/>      
        <div className="flex gap-4 items-center justify-end w-full">
          <button className="btn btn-primary"
            type='submit' 
          >
            Send Message</button>
          <button className="btn btn-secondary" onClick={() => setShowForm(!showForm)}>Cancel</button>
        </div>
      </form>
    </>
  )
}

export default ContactForm