import Image from 'next/image'

const useCases = [
  {
    title: "Generative AI Prediction Dashboard",
    description: "Our Generative AI Prediction Dashboard uses advanced language models to analyze patient data and generate detailed predictions for potential health risks, treatment outcomes, and hospital readmission rates. This powerful tool enables healthcare providers to make data-driven decisions and implement preventive measures proactively, with AI-generated insights that go beyond traditional analytics.",
    image: "/5.jpg?height=400&width=600",
  },
  {
    title: "Generative Sentiment Analysis",
    description: "Our Generative Sentiment Analysis tool leverages state-of-the-art natural language processing models to not only analyze patient feedback but also generate comprehensive reports and actionable insights. This AI-powered system can identify nuanced emotions, suggest improvements, and even generate personalized response templates for healthcare providers.",
    image: "/4.jpg?height=400&width=600",
  },
  {
    title: "Generative AI Personalised Treatment Dashboard",
    description: "The Generative AI Personalised Treatment Dashboard combines patient data, medical history, and the latest research to generate highly detailed and tailored treatment plans. Using advanced generative models, it can create multiple treatment scenarios, predict potential outcomes, and even generate personalized patient education materials.",
    image: "/1.jpg?height=400&width=600",
  },
  {
    title: "Generative AI Drug Discovery",
    description: "Our Generative AI-powered Drug Discovery platform revolutionizes the process of identifying potential drug candidates. By using generative models, we can create novel molecular structures, predict their properties, and simulate their interactions with target proteins. This approach significantly reduces the time and cost associated with traditional drug discovery methods while increasing the potential for breakthrough treatments.",
    image: "/3.jpg?height=400&width=600",
  },
  {
    title: "Generative AI Genetic Treatment Plans",
    description: "Leveraging cutting-edge generative AI and genomic data, our Genetic Treatment Plans provide unprecedented personalization. The AI can generate complex models of gene interactions, predict the effects of genetic variations, and create tailored treatment strategies. This generative approach allows for more precise and effective treatments, particularly in areas such as cancer therapy and rare genetic disorders.",
    image: "/8.jpg?height=400&width=600",
  },
]

export default function UseCases() {
  return (
    <section className="py-20">
      {useCases.map((useCase, index) => (
        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20 px-4 sm:px-6 lg:px-8`}>
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src={useCase.image}
              alt={useCase.title}
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full md:w-1/2 md:px-8">
            <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
            <p className="text-gray-300">{useCase.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

