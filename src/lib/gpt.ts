import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function askGPTAboutVariable(variable: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that provides clear, concise explanations about the topics submitted through the user message. Keep your responses informative but not too lengthy."
        },
        {
          role: "user",
          content: `Please tell me about: ${variable}`
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error('Error calling GPT:', error);
    return "Sorry, there was an error getting information about this variable.";
  }
}

export async function getCommonTopics(variable: string): Promise<string> {
  console.log('🔍 getCommonTopics called with:', variable);
  try {
    console.log('🔄 Making OpenAI API call for topics...');
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that provides clear, concise explanations about the topics submitted through the user message. Keep your responses informative but not too lengthy."
        },
        {
          role: "user",
          content: `What are some common facts or details people want to know about ${variable}? Keep this list to only 3 bullet points and each point should only be 1-5 words.`
        }
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const result = completion.choices[0]?.message?.content || "Sorry, I couldn't generate topics.";
    console.log('✅ getCommonTopics success:', result);
    return result;
  } catch (error) {
    console.error('❌ Error calling GPT for topics:', error);
    return "Sorry, there was an error getting topics.";
  }
}

export async function getTopicSummaries(topics: string): Promise<string> {
  console.log('🔍 getTopicSummaries called with:', topics);
  try {
    console.log('🔄 Making OpenAI API call for summaries...');
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that provides clear, concise explanations about the topics submitted through the user message. Keep your responses informative but not too lengthy."
        },
        {
          role: "user",
          content: `Provide a 50-150 word summary of each of the topics from the previous step. Make sure to bold each topic name using **topic name** format: ${topics}`
        }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const result = completion.choices[0]?.message?.content || "Sorry, I couldn't generate summaries.";
    console.log('✅ getTopicSummaries success:', result);
    return result;
  } catch (error) {
    console.error('❌ Error calling GPT for summaries:', error);
    return "Sorry, there was an error getting summaries.";
  }
}
