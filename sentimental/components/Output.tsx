import ReactMarkdown from "react-markdown"

interface OutputProps {
  sentiment: string | null;
}

export function Output({ sentiment }: OutputProps) {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">Sentiment Analysis</h2>
      {sentiment ? (
        <div className="bg-white p-4 rounded-md shadow">
          <ReactMarkdown className="text-lg whitespace-pre-wrap">{sentiment}</ReactMarkdown>
        </div>
      ) : (
        <p className="text-gray-500">Enter text and click "Analyze Sentiment" to see the results.</p>
      )}
    </div>
  );
}

