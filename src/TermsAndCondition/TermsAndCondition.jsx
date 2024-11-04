import React from 'react';

const TermsAndCondition = () => {
  return (
    <div className="mt-16 flex flex-col items-center bg-gray-100">
      
      {/* Header Section */}
      <header className="w-full bg-[#111827] py-10 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-2">Terms and Conditions</h1>
        <p className="text-gray-300 text-lg">Understand our guidelines and usage policies</p>
      </header>
      
      {/* Content Section */}
      <main className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 mt-10 mb-20">
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using our website, you accept and agree to be bound by the terms and conditions of use. If you disagree with any part, please do not use our services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">2. Use of Our Products</h2>
          <p className="text-gray-600 leading-relaxed">
            Our products, such as pallets and metal trolleys, are provided for your use under strict guidelines. Redistribution or resale without consent is prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">3. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            We are not responsible for any damages or injuries resulting from improper use of our products. Please follow all provided usage instructions and guidelines.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">4. Modifications to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update these terms at any time. Continued use of the site indicates acceptance of the current terms.
          </p>
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          For further information or inquiries, please contact our support team.
        </footer>

      </main>
    </div>
  );
};

export default TermsAndCondition;
