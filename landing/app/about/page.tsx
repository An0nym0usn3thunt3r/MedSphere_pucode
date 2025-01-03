import CardLayout from '@/components/CardLayout'

export default function AboutPage() {
  return (
    <CardLayout title="About Us">
      <div className="space-y-6 text-gray-300">
        <p>
          MedSphere Generative AI is at the forefront of revolutionizing healthcare through advanced artificial intelligence. Our mission is to enhance patient care, accelerate medical research, and improve healthcare outcomes using cutting-edge generative AI technologies.
        </p>
        <p>
          Founded by a team of AI experts and healthcare professionals, we are committed to developing innovative solutions that address the most pressing challenges in modern medicine. Our suite of AI-powered tools assists healthcare providers in making more accurate diagnoses, personalizing treatment plans, and discovering new drugs faster than ever before.
        </p>
        <p>
          At MedSphere, we believe in the power of AI to transform healthcare, making it more efficient, accessible, and effective for everyone. Join us on our journey to shape the future of medicine.
        </p>
      </div>
    </CardLayout>
  )
}

