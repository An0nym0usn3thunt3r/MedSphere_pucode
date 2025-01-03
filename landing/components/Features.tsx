import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: "Generative AI Prediction Dashboard",
    description: "Advanced predictive analytics using generative AI for patient outcomes and treatment efficacy.",
    link: "http://localhost:3001/",
    gradient: "from-blue-500 to-cyan-500",
    image: "/10.jpg?height=200&width=300",
  },
  {
    title: "Generative Sentiment Analysis",
    description: "Analyze and generate insights from patient feedback using advanced language models.",
    link: "http://localhost:3002",
    gradient: "from-purple-500 to-pink-500",
    image: "/9.jpg?height=200&width=300",
  },
  {
    title: "Generative AI Personalised Treatment",
    description: "Create tailored treatment plans using generative AI based on individual patient data.",
    link: "http://localhost:3003",
    gradient: "from-green-500 to-teal-500",
    image: "/3.jpg?height=200&width=300",
  },
  {
    title: "Generative AI Drug Discovery",
    description: "Accelerate drug discovery process using generative models to create novel compounds.",
    link: "http://localhost:3004",
    gradient: "from-yellow-500 to-orange-500",
    image: "/7.jpg?height=200&width=300",
  },
  {
    title: "Generative AI Genetic Treatment Plans",
    description: "Generate personalized genetic treatment strategies using advanced AI models.",
    link: "http://localhost:3005",
    gradient: "from-red-500 to-pink-500",
    image: "/2.jpg?height=200&width=300",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Generative AI-Powered Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            let className = "block rounded-xl bg-gradient-to-br transform transition duration-300 hover:scale-105 hover:shadow-xl h-full overflow-hidden";
            
            if (index === 0) {
              className += " md:col-span-3"; // 60% width
            } else if (index === 1) {
              className += " md:col-span-2"; // 40% width
            } else if (index === 2) {
              className += " md:col-span-5"; // 100% width
            } else if (index === 3) {
              className += " md:col-span-2"; // 40% width
            } else if (index === 4) {
              className += " md:col-span-3"; // 60% width
            }

            return (
              <Link key={index} href={feature.link} className={`${className} ${feature.gradient}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="mb-4">{feature.description}</p>
                  <div className="flex items-center text-sm font-medium">
                    Explore Generative AI <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  )
}

