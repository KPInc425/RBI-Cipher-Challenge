//import { createClient } from '@supabase/supabase-js'

const challengeContentCheckAnswer = async ({ answerGuess }) => {
  return Response.json({ "isCorrect": (String(answerGuess).toLowerCase() == String("Amazing job, very well done, your journey has just begun!").toLowerCase())})
}

export default challengeContentCheckAnswer;