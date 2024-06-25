export default async (event, context) => {
  const answer = new URL(event.url).searchParams.get("answer");
  return Response.json({ "isCorrect": (String(answer).toLowerCase() == String("Amazing job, very well done, your journey has just begun!").toLowerCase())})
};

export const config: Config = {
  path: "/api/challengeContentCheckAnswer"
}