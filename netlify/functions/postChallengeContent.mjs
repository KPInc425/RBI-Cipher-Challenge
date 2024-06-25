import { createClient } from '@supabase/supabase-js'

const postChallengeContent = async ({ answerGuess }) => {
  return answerGuess == "text 1";
}

export default postChallengeContent;