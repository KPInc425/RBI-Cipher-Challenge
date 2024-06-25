import { Config, Context } from "@netlify/functions";

export default async (req, context) => {
  const { answer } = req.QueryStringParameters["answer"];

  return Response.json({ "isCorrect": (String(answer).toLowerCase() == String("Amazing job, very well done, your journey has just begun!").toLowerCase())})
};

// export const config: Config = {
//   path: "/.netlify/functions/challengeContentCheckAnswer/:answer"
// };