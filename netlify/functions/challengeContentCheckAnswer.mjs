export default async (req, context) => {
  const { answer } = req.queryStringParameters["answer"];
  return Response.json({ "isCorrect": (String(answer).toLowerCase() == String("Amazing job, very well done, your journey has just begun!").toLowerCase())})
};