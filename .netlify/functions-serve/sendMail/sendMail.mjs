
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/sendMail.mjs
var sendMail = async ({ name, email, subject, message }) => {
  const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "RBI - The Coding Challenge",
      name,
      subject,
      email,
      message
    })
  });
  const result = await response.json();
  if (result.success) {
    console.log("Email Sent.");
    console.log(result);
    return result;
  } else {
    console.error(result);
    return result;
  }
};
var sendMail_default = sendMail;
export {
  sendMail_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvc2VuZE1haWwubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBzZW5kTWFpbCA9IGFzeW5jICh7bmFtZSwgZW1haWwsIHN1YmplY3QsIG1lc3NhZ2V9KSA9PiB7XHJcbiAgY29uc3QgV0VCM0ZPUk1TX0FDQ0VTU19LRVkgPSBwcm9jZXNzLmVudi5XRUIzRk9STVNfQUNDRVNTX0tFWTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkud2ViM2Zvcm1zLmNvbS9zdWJtaXRcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBhY2Nlc3Nfa2V5OiBXRUIzRk9STVNfQUNDRVNTX0tFWSxcclxuICAgICAgZnJvbV9uYW1lOiBcIlJCSSAtIFRoZSBDb2RpbmcgQ2hhbGxlbmdlXCIsXHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QsXHJcbiAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgIH0pLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVtYWlsIFNlbnQuXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbmRNYWlsOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLFdBQVcsT0FBTyxFQUFDLE1BQU0sT0FBTyxTQUFTLFFBQU8sTUFBTTtBQUMxRCxRQUFNLHVCQUF1QixRQUFRLElBQUk7QUFDekMsUUFBTSxXQUFXLE1BQU0sTUFBTSxvQ0FBb0M7QUFBQSxJQUMvRCxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0EsTUFBTSxLQUFLLFVBQVU7QUFBQSxNQUNuQixZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsQ0FBQztBQUVELFFBQU0sU0FBUyxNQUFNLFNBQVMsS0FBSztBQUNuQyxNQUFJLE9BQU8sU0FBUztBQUNsQixZQUFRLElBQUksYUFBYTtBQUN6QixZQUFRLElBQUksTUFBTTtBQUNsQixXQUFPO0FBQUEsRUFDVCxPQUFPO0FBQ0wsWUFBUSxNQUFNLE1BQU07QUFDcEIsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVBLElBQU8sbUJBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
