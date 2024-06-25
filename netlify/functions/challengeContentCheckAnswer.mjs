export default async (event, context) => {
  console.log("event log:");
  console.log(event);
  console.log(event.url);
  
  const answer = event.url.searchParams.get("answer");
  console.log(answer)
  
  return Response.json({ "isCorrect": (String(answer).toLowerCase() == String("Amazing job, very well done, your journey has just begun!").toLowerCase())})
};