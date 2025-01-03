import CardLayout from '@/components/CardLayout'
import Link from 'next/link'

const blogPosts = [
  { id: 1, title: "The Future of AI in Healthcare", excerpt: "Exploring how generative AI is revolutionizing patient care and medical research." },
  { id: 2, title: "Understanding Generative AI in Drug Discovery", excerpt: "A deep dive into how AI is accelerating the process of finding new treatments." },
  { id: 3, title: "Ethical Considerations in AI-Driven Healthcare", excerpt: "Examining the moral implications and safeguards in AI medical applications." },
  { id: 4, title: "Personalized Medicine: The AI Advantage", excerpt: "How AI is enabling truly individualized treatment plans and improving outcomes." },
  { id: 5, title: "AI and Mental Health: New Frontiers", excerpt: "Exploring the potential of AI in diagnosing and treating mental health conditions." },
]

export default function BlogPage() {
  return (
    <CardLayout title="Blog">
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b border-gray-700 pb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">
              <Link href={`/blog/${post.id}`} className="hover:text-blue-400 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-300">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-400 hover:underline mt-2 inline-block">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </CardLayout>
  )
}

