export default async (req, context) => {
  const { answer } = req.queryStringParameters;
  console.log(req);
  return Response.json({ "isCorrect": (String(answer).toLowerCase() == String("Amazing job, very well done, your journey has just begun!").toLowerCase())})
};