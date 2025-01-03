import CardLayout from '@/components/CardLayout'

export default function DataProtectionPage() {
  return (
    <CardLayout title="Data Protection Policy">
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Data Collection and Processing</h2>
          <p>We collect and process personal and medical data in compliance with GDPR, HIPAA, and other applicable regulations. Data is only collected for specified, explicit, and legitimate purposes.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Data Minimization</h2>
          <p>We adhere to the principle of data minimization, ensuring that we only collect and process data that is necessary for the provision of our AI-powered healthcare services.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Security Measures</h2>
          <p>We implement state-of-the-art technical and organizational measures to ensure the security of your data, including encryption, access controls, regular security audits, and employee training.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Subject Rights</h2>
          <p>We respect and uphold your rights as a data subject, including the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Retention</h2>
          <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or to comply with legal obligations. We have established data retention periods for different categories of data.</p>
        </section>
      </div>
    </CardLayout>
  )
}

