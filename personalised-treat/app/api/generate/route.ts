import { streamText } from 'ai'
import { createOpenAI as createGroq } from '@ai-sdk/openai'

// Verify that the GROQ_API_KEY is being used correctly
const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
})

export const runtime = 'edge'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const response = streamText({
    model: groq('llama-3.3-70b-versatile'),
    messages: [
      { role: 'system', content: `Analyze the following medical report and provide a personalised Treament Plans. Format your response in Markdown for better readability
        Please provide the following information:
        1. Suggested treatment plans for the patient
        2. Plans with timeline
        3. Diet Plan for the Patient for both vegeterian and non vegeterian
        4. Lifestyle Impact for the Patient
        5. Lifestyle Changes to follow for the patient
        6. Suggesting Write medication and Home remedies to follow
        7. Exercise routines and which type of exercise to follow

        If no report is provided ask the user to provide a medical record and dont generate  content without that.

        Use markdown for bold text for the required portions and all the topics to be covered will have bold to them and use italics also in gennerated body.
        `},
      { role: 'user', content: prompt }],
  })

  return response.toDataStreamResponse()
}

