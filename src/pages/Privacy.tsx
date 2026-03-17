import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="pt-28 lg:pt-36 pb-24 container mx-auto px-6 lg:px-12 max-w-3xl">
        <h1 className="heading-display text-4xl md:text-5xl mb-12">Privacy Policy</h1>
        {[
          { title: "Information We Collect", body: "We collect personal information you voluntarily provide, including name, email address, shipping address, and payment details when you make a purchase or create an account." },
          { title: "How We Use Your Information", body: "Your information is used to process orders, improve our services, send communications about new collections (with your consent), and ensure a personalized shopping experience." },
          { title: "Data Protection", body: "We implement industry-standard security measures to protect your data. Payment information is processed through encrypted, PCI-compliant payment gateways and is never stored on our servers." },
          { title: "Cookies", body: "Our website uses essential cookies to maintain your session and preferences. Analytics cookies help us understand browsing patterns to improve our service. You may disable non-essential cookies through your browser settings." },
          { title: "Third-Party Sharing", body: "We do not sell your personal data. Information may be shared with trusted logistics and payment partners solely for order fulfillment purposes." },
          { title: "Your Rights", body: "You may request access to, correction of, or deletion of your personal data at any time by contacting our concierge team at hello@vastra.in." },
        ].map((s) => (
          <div key={s.title} className="mb-8">
            <h2 className="heading-ui text-[11px] mb-3">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.body}</p>
          </div>
        ))}
        <p className="text-xs text-muted-foreground mt-12">Last updated: March 2026</p>
      </div>
    </Layout>
  );
}
