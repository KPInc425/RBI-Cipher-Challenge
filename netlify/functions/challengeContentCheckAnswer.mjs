//import { createClient } from '@supabase/supabase-js'

const challengeContentCheckAnswer = async ({ answerGuess }) => {
  return Response.json({ "isCorrect": (answerGuess == "text 1")})
}

export default challengeContentCheckAnswer;