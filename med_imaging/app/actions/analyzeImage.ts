'use server'

import { createOpenAI as createGroq } from '@ai-sdk/openai'

// const groq = createGroq({
//   baseURL: 'https://api.groq.com/openai/v1',
//   apiKey: process.env.GROQ_API_KEY!,
// })

export async function analyzeImage(formData: FormData) {
  try {
    const image = formData.get('image')
    const additionalInfo = formData.get('additionalInfo') as string || ''

    if (!image || !(image instanceof File)) {
      throw new Error('Please provide a valid image file')
    }

    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY is not set in the environment variables')
    }

    // Convert image to base64
    const buffer = await image.arrayBuffer()
    const base64Image = Buffer.from(buffer).toString('base64')
    const imageBase64 = `data:${image.type};base64,${base64Image}`

    const groq = createGroq({
      baseURL: 'https://api.groq.com/openai/v1',
      apiKey: process.env.GROQ_API_KEY,
    })

    const response = await groq.chat.completions.create({
      model: 'llama-3.2-90b-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            { 
              type: 'text', 
              text: `Analyze this medical image and predict possible diseases. Additional information: ${additionalInfo}` 
            },
            { 
              type: 'image_url', 
              image_url: { 
                url: imageBase64 
              } 
            }
          ],
        },
      ],
      max_tokens: 500,
    })

    if (!response.choices?.[0]?.message?.content) {
      throw new Error('No prediction received from the AI model')
    }

    return { 
      success: true, 
      prediction: response.choices[0].message.content 
    }
  } catch (error) {
    console.error('Error in analyzeImage:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unexpected error occurred' 
    }
  }
}

