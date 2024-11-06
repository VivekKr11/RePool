import React from 'react';

const Privacy = () => {
  return (
    <div className="mt-16 flex flex-col items-center bg-gray-100">
      
      {/* Header Section */}
      <header className="w-full bg-[#111827] py-10 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-300 text-lg">Your privacy is our priority</p>
      </header>
      
      {/* Content Section */}
      <main className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 mt-10 mb-20">
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">1. Data Collection</h2>
          <p className="text-gray-600 leading-relaxed">
            We collect certain information to improve our services, including data provided directly by users and information gathered through cookies and similar technologies. This may include contact details, transaction history, and website usage patterns.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">2. Use of Information</h2>
          <p className="text-gray-600 leading-relaxed">
            The data we collect is used to process orders, enhance our product offerings, and communicate with you about updates or promotions. We do not sell or share your information with third parties, except as required to fulfill your orders or comply with legal obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">3. Data Protection</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement strict security measures to protect your personal information. Access to data is restricted, and we regularly review our practices to ensure compliance with industry standards. However, no method of transmission over the Internet is entirely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">4. Cookies Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website uses cookies to improve your experience and analyze site usage. You can control cookie preferences through your browser settings, though disabling cookies may affect site functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">5. Updates to Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this privacy policy periodically. Any changes will be posted on this page, and continued use of our website implies acceptance of the updated policy.
          </p>
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          For any privacy-related questions or concerns, please contact our support team.
        </footer>

      </main>
    </div>
  );
};

export default Privacy;
