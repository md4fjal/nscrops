const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center text-center h-60 bg-[#0c3b32]">
        <h1 className="text-3xl lg:text-4xl text-swhite">Privacy Policy</h1>
      </div>
      <div className="max-w-4xl mx-auto px-4 space-y-10 mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <section className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            1. Introduction
          </h2>
          <p className="text-sgray">
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you visit our fertilizer store website or
            purchase our products. We are committed to safeguarding your data.
          </p>
        </section>

        <section className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            2. Information We Collect
          </h2>

          <h3 className="text-xl font-medium mb-2 text-sgray">
            Personal Information
          </h3>
          <p className="mb-3 text-sgray">
            We may collect personal information you provide when you:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-5 text-sgray">
            <li>Create an account</li>
            <li>Place an order for fertilizers or other products</li>
            <li>Subscribe to newsletters or updates</li>
            <li>Fill out contact or inquiry forms</li>
          </ul>

          <h3 className="text-xl font-medium mb-2 text-sgray">
            Automatically Collected Information
          </h3>
          <p className="mb-3 text-sgray">
            When you browse our website, we may automatically collect:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sgray">
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our site</li>
            <li>Device information</li>
          </ul>
        </section>

        <section className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            3. How We Use Your Information
          </h2>
          <p className="mb-3 text-sgray">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-1 text-sgray">
            <li>Process and deliver your fertilizer orders</li>
            <li>Improve our products and services</li>
            <li>Send order updates and promotional offers</li>
            <li>Respond to inquiries and support requests</li>
            <li>Detect and prevent fraud or unauthorized activity</li>
          </ul>
        </section>

        <section className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            4. Cookies and Tracking
          </h2>
          <p className="mb-3 text-sgray">
            Our website uses cookies and similar technologies to enhance user
            experience, track usage patterns, and improve our services. Cookies
            may include unique identifiers.
          </p>
          <p className="text-sgray">
            You can disable cookies in your browser settings, but some parts of
            the website may not function properly.
          </p>
        </section>

        <section className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            5. Data Sharing & Disclosure
          </h2>
          <p className="mb-3 text-sgray">
            We may share your personal information in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sgray">
            <li>With trusted delivery and payment service providers</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and property</li>
            <li>When you provide explicit consent</li>
          </ul>
        </section>

        <section className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            6. Data Security
          </h2>
          <p className="text-sgray">
            We implement technical and organizational measures to protect your
            data. However, no method of transmission or storage is completely
            secure.
          </p>
        </section>

        <section className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            7. Your Rights
          </h2>
          <p className="mb-3 text-sgray">
            Depending on your location, you may have rights such as:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sgray">
            <li>Accessing your personal data</li>
            <li>Correcting inaccurate information</li>
            <li>Requesting deletion of data</li>
            <li>Objecting to processing of your data</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            8. Policy Updates
          </h2>
          <p className="text-sgray">
            We may update this Privacy Policy periodically. Changes will be
            posted here with an updated "Last Updated" date.
          </p>
        </section>

        <section className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            9. Contact Us
          </h2>
          <p className="text-sgray">
            For any questions about our Privacy Policy or your data, contact us
            at:
            <br />
            <strong className="text-sgray">Email:</strong>{" "}
            <a
              href="mailto:nscropscience2@gmail.com"
              className="text-blue-600 underline"
            >
              nscropscience2@gmail.com
            </a>
            <br />
            <strong className="text-sgray">Phone:</strong> 7489655017
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
