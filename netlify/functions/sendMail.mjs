import {process} from "process";

const sendMail = async ({name, email, subject, message}) => {
  const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "RBI - The Coding Challenge",
      name: name,
      subject: subject,
      email: email,
      message: message,
    }),
  });

  const result = await response.json();
  if (result.success) {
    console.log("Email Sent.")
    console.log(result);
    return result;
  } else {
    console.error(result);
    return result;
  }
}

export default sendMail;