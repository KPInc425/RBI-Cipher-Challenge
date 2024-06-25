//import { createClient } from '@supabase/supabase-js'

const challengeContent = async () => {
  return { "cipherKey": "key 1", "cipherText": "text 1" }
}

// const supabaseUrl = 'https://sxgperrbzbqeapunltgk.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

// try {
//   const { result } = await supabase.from("CodingChallenge").process();
//   const { error } = await supabase.from("CodingChallenge").insert([
//     {
//       challengeId,
//       locationId,
//       eventId
//     }
//   ]);

//   if (error) {
//     console.error(error.message);      
//     return;
//   }
//   console.log("Sucsessfully sent!");
// } catch (error) {
//   console.log("error sending message:", error);
// }

export default challengeContent;