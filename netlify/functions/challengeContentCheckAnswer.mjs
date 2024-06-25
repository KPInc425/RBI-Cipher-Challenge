export default async (event, context) => {
  console.log("event log:" + event);
  
  const answer = event.queryStringParameters;
  return Response.json({ "isCorrect": (String(answer).toLowerCase() == String("Amazing job, very well done, your journey has just begun!").toLowerCase())})
};