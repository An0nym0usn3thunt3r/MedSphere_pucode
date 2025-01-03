import { NextResponse } from 'next/server';
import { createOpenAI as createGroq } from '@ai-sdk/openai';
import { generateText } from 'ai';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const { text: sentiment } = await generateText({
      model: groq('llama-3.3-70b-versatile'),
      prompt: `Analyze the sentiment of the following text and provide a brief explanation.
      Also analyze based on this parameters : 
      
      1. Patient Sentiment:
Trust: 
Ease of Use: 
Satisfaction: 
2. Doctor Sentiment:
Efficiency: 
Information Accessibility: 
Collaboration: 
3. Pathology Sentiment:
Data Integrity: 
Reporting Capabilities:

Metrics for Sentimental Analysis report:
Net Sentiment Score (NSS): 
Sentiment Distribution: 
Emotion Detection: 
Satisfaction Rating:
Trust Index: 
Ease of Use Rating: 
Communication Effectiveness:

Provide everything point wise point by point

This is the example response
"stribution:
Positive: 60%
Negative: 20%
Neutral: 20%
Emotion Detection:
Anxiety: 15%
Relief: 30%
Frustration: 10%
Satisfaction Rating: 4.2/5
Trust Index: 85
Ease of Use Rating: 4.5/5
Communication Effectiveness: 4.0/5" Provide like this

Use markdown for bold text for the required portions and all the topics to be covered will have bold to them and use italics also in gennerated body.

      Text: "${text}"`,
    });

    return NextResponse.json({ sentiment });
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    return NextResponse.json({ error: 'Failed to analyze sentiment' }, { status: 500 });
  }
}

