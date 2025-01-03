import CardLayout from '@/components/CardLayout'

export default function PrivacyPolicyPage() {
  return (
    <CardLayout title="Privacy Policy">
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
          <p>We collect and process personal data necessary for providing our AI-powered healthcare services. This may include medical records, diagnostic information, and user account details.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
          <p>Your data is used to provide and improve our AI services, including generating medical insights, personalizing treatment plans, and enhancing our algorithms.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Security</h2>
          <p>We implement robust security measures to protect your data from unauthorized access, alteration, or destruction. This includes encryption, access controls, and regular security audits.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Sharing of Information</h2>
          <p>We do not sell your personal data. We may share data with trusted partners who assist us in operating our services, subject to strict confidentiality agreements.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. Please contact us if you wish to exercise these rights or have any privacy-related questions.</p>
        </section>
      </div>
    </CardLayout>
  )
}

