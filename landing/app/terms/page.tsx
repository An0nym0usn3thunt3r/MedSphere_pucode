import CardLayout from '@/components/CardLayout'

export default function TermsOfServicePage() {
  return (
    <CardLayout title="Terms of Service">
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
          <p>By accessing and using MedSphere Generative AI services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Use of Services</h2>
          <p>Our services are intended for use by healthcare professionals and organizations. You agree to use our services only for lawful purposes and in accordance with these terms.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Privacy and Data Protection</h2>
          <p>We are committed to protecting your privacy and handling your data in accordance with applicable laws and regulations. Please refer to our Privacy Policy and Data Protection Policy for more information.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Intellectual Property</h2>
          <p>All content and technologies provided as part of our services are protected by copyright and other intellectual property laws. You may not copy, modify, or distribute our content without explicit permission.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Limitation of Liability</h2>
          <p>MedSphere Generative AI is not liable for any damages arising from the use of our services. Our AI-generated insights should be used in conjunction with professional medical judgment.</p>
        </section>
      </div>
    </CardLayout>
  )
}

