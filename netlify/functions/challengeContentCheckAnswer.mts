import { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const { answer } = context.params;

  return Response.json({ "isCorrect": (String(answer).toLowerCase() == String("Amazing job, very well done, your journey has just begun!").toLowerCase())})
};

export const config: Config = {
  path: "/challengeContentCheckAnswer/:answer"
};