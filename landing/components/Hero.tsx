import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Generative AI-Powered Medical Solutions
            </h1>
            <p className="text-xl mb-8">
              Revolutionizing healthcare with cutting-edge generative AI technology for advanced diagnosis, personalized treatment, and innovative patient care.
            </p>
            <Link href="#features" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Explore Generative AI Features
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/11.jpg?height=400&width=600"
              alt="AI Medical Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

