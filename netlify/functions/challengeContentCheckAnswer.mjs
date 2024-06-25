import { createClient } from '@supabase/supabase-js'

const challengeContentCheckAnswer = async ({ answerGuess }) => {
  return answerGuess == "text 1";
}

export default challengeContentCheckAnswer;