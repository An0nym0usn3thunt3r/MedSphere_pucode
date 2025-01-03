import Hero from '@/components/Hero'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <Features />
      <UseCases />
    </main>
  )
}

