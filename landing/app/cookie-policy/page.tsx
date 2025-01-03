import CardLayout from '@/components/CardLayout'

export default function CookiePolicyPage() {
  return (
    <CardLayout title="Cookie Policy">
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">1. What Are Cookies</h2>
          <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and understand how our services are used.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Cookies</h2>
          <p>We use cookies for various purposes, including authentication, remembering your preferences, analyzing our website traffic, and personalizing content.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Types of Cookies We Use</h2>
          <p>We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period). We also use first-party and third-party cookies.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Managing Cookies</h2>
          <p>You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience on our website.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Updates to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. We encourage you to review this policy periodically for any changes.</p>
        </section>
      </div>
    </CardLayout>
  )
}

