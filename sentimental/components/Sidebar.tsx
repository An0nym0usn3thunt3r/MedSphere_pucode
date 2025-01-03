import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface SidebarProps {
  onAnalyze: (text: string) => void;
}

export function Sidebar({ onAnalyze }: SidebarProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(text);
  };

  return (
    <div className="w-1/3 bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Input</h2>
      <form onSubmit={handleSubmit}>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text for sentiment analysis..."
          className="w-full h-64 mb-4"
        />
        <Button type="submit" className="w-full">
          Analyze Sentiment
        </Button>
      </form>
    </div>
  );
}

