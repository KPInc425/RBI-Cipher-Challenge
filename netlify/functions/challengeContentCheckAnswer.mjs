//import { createClient } from '@supabase/supabase-js'

const challengeContentCheckAnswer = async ({ answerGuess }) => {
  return Response.json({ "isCorrect": (answerGuess.toLower() == "Amazing job, very well done, your journey has just begun!".toLower())})
}

export default challengeContentCheckAnswer;