const ContactForm = ({showForm, setShowForm, setToasterText, handleSuccessToaster, handleErrorToaster}) => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitted')
    // console.log((e.target as HTMLFormElement).name.value)
    const nameInput = e.target.elements.namedItem('name')

    const subjectData = `From RobotBuildersInc: ${nameInput.value} - ${e.target.email.value}`
    // console.log((e.target as HTMLFormElement).email.value)
    const textData = e.target.message.value
    // console.log((e.target as HTMLFormElement).message.value)
    const htmlData = `
    <div style="padding: 24px; padding-right: 36px; border: 1px solid rgb(142, 142, 165); box-shadow: 1px 1px 1px rgb(142, 142, 165); font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; border-radius: 5px; justify-content: center; width: fit-content; max-width: 50%; margin: 0 auto; background-color: rgb(240, 240, 240);">
        <h3 style="border: 1px solid rgb(63, 63, 75); color:rgb(48, 48, 51); padding: 5px 10px; border-radius: 5px; box-shadow: 1px 1px 1px rgb(142, 142, 165); width: fit-content; margin-left: 12px;">Name</h3>
        <p style="margin-left: 24px; color:rgb(63, 63, 75);">${nameInput.value}</p>
        <h3 style="border: 1px solid rgb(63, 63, 75); color:rgb(48, 48, 51); padding: 5px 10px; border-radius: 5px; box-shadow: 1px 1px 1px rgb(142, 142, 165); width: fit-content; margin-left: 12px;">Email</h3>
        <p style="margin-left: 24px; color:rgb(63, 63, 75);">${e.target.email.value}</p>
        <h4 style="border: 1px solid rgb(63, 63, 75); color:rgb(48, 48, 51); padding: 5px 10px; border-radius: 5px; box-shadow: 1px 1px 1px rgb(142, 142, 165); width: fit-content; margin-left: 12px;">Message</h4>
        <p style="margin-left: 24px; color:rgb(63, 63, 75);">${textData}</p></div>
    </div>
    `
    // console.log((e.target as HTMLFormElement).attachment.files[0])

    const emailData = {
      senderEmail: e.target.email.value,
      subject: subjectData,
      html: htmlData
    }
    

    console.log(emailData)
    console.log(JSON.stringify(emailData))

    try {      
      // const results = send(emailData)
      // const results = await response.json()
      console.log("Email Sent.")
      // console.log("Response: ", results)

      setToasterText('Email Sent. We will get back to you as soon as possible.')
      // handleSuccessToaster()
      setShowForm(!showForm)
    } catch (err) {
      console.log("Error: ", err)
      setToasterText('Failed to send email. Please try again.')
      // handleErrorToaster();
    }
    // try {      
    //   await fetch('https://tmra-sendmail.tmra.ai/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(emailData)
    //   })
    //   // const results = await response.json()
    //   // console.log("Email Sent.")
    //   // console.log("Response: ", results)

    //   setToasterText('Email Sent. We will get back to you as soon as possible.')
    //   handleSuccessToaster()
    //   setShowForm(!showForm)
    // } catch (err) {
    //   console.log("Error: ", err)
    //   setToasterText('Failed to send email. Please try again.')
    //   handleErrorToaster();
    // }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-start w-full">
        <label htmlFor="name">Name</label>
        <input name="name" id="name" className="input input-primary w-full" />
        <label htmlFor="email">Email*</label>
        <input type="email" name="email" id="email" className="input input-primary w-full" required />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows={6} className="textarea textarea-primary w-full"/>      
        {/* <Box>
          <label mb={3}>
            <Checkbox />
            Sign up for our email list for updates, promotinos, and more.
          </label>
        </Box> */}
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