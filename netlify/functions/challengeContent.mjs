//import { createClient } from '@supabase/supabase-js'

const challengeContent = async () => {
  return Response.json({ "cipherKey": "[{\"found\":\".-\",\"substitute\":\"A\"},{\"found\":\"-...\",\"substitute\":\"B\"},{\"found\":\"-.-.\",\"substitute\":\"C\"},{\"found\":\"-..\",\"substitute\":\"D\"},{\"found\":\".\",\"substitute\":\"E\"},{\"found\":\"..-.\",\"substitute\":\"F\"},{\"found\":\"--.\",\"substitute\":\"G\"},{\"found\":\"....\",\"substitute\":\"H\"},{\"found\":\"..\",\"substitute\":\"I\"},{\"found\":\".---\",\"substitute\":\"J\"},{\"found\":\"-.-\",\"substitute\":\"K\"},{\"found\":\".-..\",\"substitute\":\"L\"},{\"found\":\"--\",\"substitute\":\"M\"},{\"found\":\"-.\",\"substitute\":\"N\"},{\"found\":\"---\",\"substitute\":\"O\"},{\"found\":\".--.\",\"substitute\":\"P\"},{\"found\":\"--.-\",\"substitute\":\"Q\"},{\"found\":\".-.\",\"substitute\":\"R\"},{\"found\":\"...\",\"substitute\":\"S\"},{\"found\":\"-\",\"substitute\":\"T\"},{\"found\":\"..-\",\"substitute\":\"U\"},{\"found\":\"...-\",\"substitute\":\"V\"},{\"found\":\".--\",\"substitute\":\"W\"},{\"found\":\"-..-\",\"substitute\":\"X\"},{\"found\":\"-.--\",\"substitute\":\"Y\"},{\"found\":\"--..\",\"substitute\":\"Z\"},{\"found\":\"-----\",\"substitute\":\"0\"},{\"found\":\".----\",\"substitute\":\"1\"},{\"found\":\"..---\",\"substitute\":\"2\"},{\"found\":\"...--\",\"substitute\":\"3\"},{\"found\":\"....-\",\"substitute\":\"4\"},{\"found\":\".....\",\"substitute\":\"5\"},{\"found\":\"-....\",\"substitute\":\"6\"},{\"found\":\"--...\",\"substitute\":\"7\"},{\"found\":\"---..\",\"substitute\":\"8\"},{\"found\":\"----.\",\"substitute\":\"9\"},{\"found\":\".-.-.-\",\"substitute\":\".\"},{\"found\":\"--..--\",\"substitute\":\",\"},{\"found\":\"..--..\",\"substitute\":\"?\"},{\"found\":\".----.\",\"substitute\":\"'\"},{\"found\":\"-.-.--\",\"substitute\":\"!\"},{\"found\":\"-.--.\",\"substitute\":\"(\"},{\"found\":\"-.--.-\",\"substitute\":\")\"},{\"found\":\".-...\",\"substitute\":\"&\"},{\"found\":\"---...\",\"substitute\":\":\"},{\"found\":\"-.-.-.\",\"substitute\":\";\"}]", "cipherText": ".- -- .- --.. .. -. --. / .--- --- -... --..-- / ...- . .-. -.-- / .-- . .-.. .-.. / -.. --- -. . --..-- / -.-- --- ..- .-. / .--- --- ..- .-. -. . -.-- / .... .- ... / .--- ..- ... - / -... . --. ..- -. -.-.--" })
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