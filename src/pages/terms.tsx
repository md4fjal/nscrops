const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center text-center h-60 bg-[#0c3b32]">
        <h1 className="text-3xl lg:text-4xl text-swhite">
          Terms and Conditions
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-10 mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <section id="intro" className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            1. Introduction
          </h2>
          <p className="mb-3 text-sgray">
            Welcome to our crop fertilizer online store. These terms and
            conditions outline the rules for purchasing and using our products.
          </p>
          <p className="text-sgray">
            By using our website or purchasing our products, you agree to these
            terms. If you do not agree, please do not use our website.
          </p>
        </section>

        <section id="products" className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            2. Product Information
          </h2>
          <p className="text-sgray">
            We make every effort to provide accurate product descriptions and
            images. However, product colors, specifications, or availability may
            vary. Always read the labels and instructions before use.
          </p>
        </section>

        <section id="restrictions" className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            3. Usage Restrictions
          </h2>
          <p className="mb-2 text-sgray">
            Customers must comply with the following:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sgray">
            <li>Use fertilizers only as directed on the label</li>
            <li>Do not resell products without permission</li>
            <li>Store products safely, away from children and animals</li>
            <li>Follow local agricultural regulations</li>
          </ul>
        </section>

        <section id="privacy" className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            4. Privacy Policy
          </h2>
          <p className="text-sgray">
            We respect your privacy. Personal information collected during
            orders will be used only to process transactions and improve our
            services. Please refer to our full Privacy Policy for details.
          </p>
        </section>

        <section id="liability" className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            5. Limitation of Liability
          </h2>
          <p className="text-sgray">
            We are not liable for any loss, damage, or injury resulting from the
            misuse of our fertilizers or failure to follow usage instructions.
            Always follow safe agricultural practices.
          </p>
        </section>

        <section id="changes" className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            6. Changes to Terms
          </h2>
          <p className="text-sgray">
            We may update these terms at any time. Continued use of our website
            or purchase of products indicates acceptance of the updated terms.
          </p>
        </section>

        <section id="contact" className="bg-swhite p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-sblue">
            7. Contact Information
          </h2>
          <p className="text-sgray">
            For any questions regarding our fertilizers or your orders, contact
            us at:
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

export default TermsAndConditions;
