import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="pt-28 lg:pt-36 pb-24 container mx-auto px-6 lg:px-12 max-w-3xl">
        <h1 className="heading-display text-4xl md:text-5xl mb-12">Terms & Conditions</h1>
        {[
          { title: "General", body: "By accessing and using vastra.in, you agree to be bound by these terms. We reserve the right to update these terms at any time." },
          { title: "Orders & Payment", body: "All prices are listed in Indian Rupees (₹) and include applicable taxes. We accept major credit/debit cards and UPI payments. Orders are confirmed upon successful payment." },
          { title: "Shipping", body: "We offer complimentary shipping on all domestic orders above ₹5,000. Standard delivery takes 5–7 business days. Express shipping is available at an additional cost." },
          { title: "Returns & Exchanges", body: "We accept returns within 14 days of delivery for unworn items in original packaging. Customized or sale items are final sale. Return shipping is at the customer's expense." },
          { title: "Intellectual Property", body: "All content on this website — including images, text, designs, and logos — is the property of Vāstra and may not be reproduced without written consent." },
          { title: "Limitation of Liability", body: "Vāstra shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products." },
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
