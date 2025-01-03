'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Output } from './Output';

export default function Dashboard() {
  const [sentiment, setSentiment] = useState<string | null>(null);

  const analyzeSentiment = async (text: string) => {
    try {
      const response = await fetch('/api/analyze-sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze sentiment');
      }

      const data = await response.json();
      setSentiment(data.sentiment);
    } catch (error) {
      console.error('Error:', error);
      setSentiment('Error analyzing sentiment');
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onAnalyze={analyzeSentiment} />
      <Output sentiment={sentiment} />
    </div>
  );
}

