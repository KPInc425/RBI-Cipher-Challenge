export default async (event, context) => {
  console.log("event log:");
  console.log(event);
  
  const answer = event.queryStringParameters;
  console.log(answer)
  
  return Response.json({ "isCorrect": (String(answer).toLowerCase() == String("Amazing job, very well done, your journey has just begun!").toLowerCase())})
};