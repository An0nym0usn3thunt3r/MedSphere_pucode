import CardLayout from '@/components/CardLayout'
import Link from 'next/link'

const helpTopics = [
  { id: 1, title: "Getting Started with MedSphere AI", link: "/help/getting-started" },
  { id: 2, title: "Understanding AI Predictions", link: "/help/ai-predictions" },
  { id: 3, title: "Interpreting Sentiment Analysis Results", link: "/help/sentiment-analysis" },
  { id: 4, title: "Customizing Treatment Plans", link: "/help/treatment-plans" },
  { id: 5, title: "Troubleshooting Common Issues", link: "/help/troubleshooting" },
]

export default function HelpCenterPage() {
  return (
    <CardLayout title="Help Center">
      <div className="space-y-6">
        {helpTopics.map((topic) => (
          <div key={topic.id} className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-white">
              <Link href={topic.link} className="hover:text-blue-400 transition-colors">
                {topic.title}
              </Link>
            </h2>
            <Link href={topic.link} className="text-blue-400 hover:underline">
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </CardLayout>
  )
}

