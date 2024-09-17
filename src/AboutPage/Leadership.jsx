import React from "react";

const Leadership = () => {
  const directors = [
    {
      name: "SUNU MATHEW",
      title: "Managing Director",
      img: "./AboutUs/emp1.webp",
    },
    {
      name: "HARDIK SHAH",
      title: "Director",
      img: "./AboutUs/emp2.webp",
    },
    {
      name: "AMI MOMAYA",
      title: "Director",
      img: "./AboutUs/emp3.webp",
    },
  ];
  return (
    <>
      <div className="relative w-full h-[75vh]">
        <img
          className="absolute bottom-0 z-10 w-full"
          src="./AboutUs/White-bg-mask.svg"
          alt=""
        />
        <div className="absolute inset-0">
          <img
            src="./AboutUs/leadership.webp"
            alt="Warehouse"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-6xl font-bold uppercase font-saira">
            Leadership
          </h1>
          <div className="flex justify-center">
            <p className="text-white text-xl font-saira w-5/6 text-center mt-5 ">
              It takes dedicated, capable, and experienced leaders to ensure
              LEAP India stays a National Leader in the Supply Chain Solutions
              industry for many years to come. We are confident we have the
              right leadership in place to continue the positive growth we've
              been experiencing since our inception.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-gray-800 flex items-center justify-center min-h-screen mt-11">
        <div className="container mx-auto text-center font-saira">
          <h2 className="text-white text-6xl mt-5 font-bold mb-3">
            Board of Directors
          </h2>
          <div className="flex justify-between items-start py-10">
            {/* Flexbox in row layout with equal spacing between items */}
            {directors.map((director, index) => (
              <div key={index} className="text-center">
                <img
                  src={director.img}
                  alt={director.name}
                  className="h-1/2 mx-auto"
                />
                {/* Director's name and title */}
                <h3 className="text-white text-xl font-semibold mb-2 mt-2">
                  {director.name}
                </h3>
                <p className="text-white text-sm">{director.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gray-100 py-12">
        <h2 className="text-center text-4xl font-bold mb-8">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Team Member 1 */}
          <div className="bg-black text-white p-6 rounded-lg w-full sm:w-80">
            <img
              src="./AboutUs/team1.webp"
              alt="Sunu Mathew"
              className="  object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">SUNU MATHEW</h3>
            <p className="text-center font-semibold">Founder and MD</p>
            <p className="text-sm mt-4">
              Sunu has over 25+ years of business experience in areas such as
              strategic management, marketing, sales specializing in supply
              chain solutions. With top leadership decision-making positions at
              global brands such as CHEP and L’Oréal, Sunu is a valuable asset
              to LEAP India’s leadership team. Some of his educational
              background includes MBA from MIP/IMSR, SMP from IIM, Calcutta, and
              MDP from INSEAD, France.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-green-600 text-white p-6 rounded-lg w-full sm:w-80">
            <img
              src="./AboutUs/team2.webp"
              alt="Sujit Cherian"
               className="  object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">SUJIT CHERIAN</h3>
            <p className="text-center font-semibold">Chief Strategic Officer</p>
            <p className="text-sm mt-4">
              With over 25 years of experience in the finance field, Sujit’s
              specialisations include private equity, M&A, Financial modelling,
              fund raising, overall business strategy development and related
              fields. His previous leadership experiences in companies such as
              Indian head of Baring Capital, CIO at GGALR, and Senior Manager at
              American Express and PWC make him an invaluable asset to the team.
              Some of his educational background includes a Bachelor of
              Commerce, Economics, Law, and CA.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-black text-white p-6 rounded-lg w-full sm:w-80">
            <img
              src="./AboutUs/team3.webp"
              alt="Harish Rane"
              className="  object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">HARISH RANE</h3>
            <p className="text-center font-semibold">Chief Business Officer</p>
            <p className="text-sm mt-4">
              Harish has 23+ years of experience in managing sales and
              distribution functions while working under talented minds in
              global organizations such as Tata, Sony, Britannia, Mattel,
              Kellogg's, and Ferrero. His extensive general/sales management and
              leadership skills help him find success in challenging
              environments, and he is an asset to the team. His educational
              background includes a BCom and an MBA in Marketing Management.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* Team Member 1 */}
          <div className="bg-black text-white p-6 rounded-lg w-full sm:w-80">
            <img
              src="./AboutUs/team4.webp"
              alt="Sunu Mathew"
              className="  object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">SUNU MATHEW</h3>
            <p className="text-center font-semibold">Founder and MD</p>
            <p className="text-sm mt-4">
              Sunu has over 25+ years of business experience in areas such as
              strategic management, marketing, sales specializing in supply
              chain solutions. With top leadership decision-making positions at
              global brands such as CHEP and L’Oréal, Sunu is a valuable asset
              to LEAP India’s leadership team. Some of his educational
              background includes MBA from MIP/IMSR, SMP from IIM, Calcutta, and
              MDP from INSEAD, France.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-green-600 text-white p-6 rounded-lg w-full sm:w-80">
            <img
              src="./AboutUs/team5.webp"
              alt="Sujit Cherian"
               className="  object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">SUJIT CHERIAN</h3>
            <p className="text-center font-semibold">Chief Strategic Officer</p>
            <p className="text-sm mt-4">
              With over 25 years of experience in the finance field, Sujit’s
              specialisations include private equity, M&A, Financial modelling,
              fund raising, overall business strategy development and related
              fields. His previous leadership experiences in companies such as
              Indian head of Baring Capital, CIO at GGALR, and Senior Manager at
              American Express and PWC make him an invaluable asset to the team.
              Some of his educational background includes a Bachelor of
              Commerce, Economics, Law, and CA.
            </p>
          </div>

         
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* Team Member 1 */}
          <div className="bg-black text-white p-6 rounded-lg w-full sm:w-80">
            <img
              src="./AboutUs/team6.webp"
              alt="Sunu Mathew"
              className="  object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">RAJESHAM ALLE</h3>
            <p className="text-center font-semibold">GM – Finance</p>
            <p className="text-sm mt-4">
            A certified Chartered Accountant with more than 15 years of experience in the field of Financial Controllership, Accounts and Finance, Business Support, Tax Strategy and Compliance, Process Improvements/Re-engineering and Automation, Internal Audit and Statutory Audit, Rajesham was General Manager – Finance at the Times Network (Times of India Group) and as also at Jet Airways, where he handled Finalisation and Consolidation of Financials. He brings in his valued expertise in Finance Operations, Internal Financial Control (IFC), Demerger, Capital Reduction, Automation of Processes and SAP implementation to LEAP India
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-green-600 text-white p-6 rounded-lg w-full sm:w-80">
            <img
              src="./AboutUs/team7.webp"
              alt="Sujit Cherian"
               className="  object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">AMEYA KARAMBE</h3>
            <p className="text-center font-semibold">GM – HR & Admin</p>
            <p className="text-sm mt-4">
            Ameya Karambe stands out as a distinguished HR leader, renowned for his exceptional fusion of people-centric skills and keen business insight. After earning his Master's in Human Resources, he further augmented his academic prowess with a coveted Post-Graduation Certification in HR Management from the esteemed XLRI-Jamshedpur. This rich academic foundation, combined with his intrinsic ability to align human resource strategies with business goals, positions him as a pivotal figure in modern HR landscapes.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-black text-white p-6 rounded-lg w-full sm:w-80">
            <img
              src="./AboutUs/team8.webp"
              alt="Harish Rane"
              className="  object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">ANUJ VERMA</h3>
            <p className="text-center font-semibold">Business Head</p>
            <p className="text-sm mt-4">
            Anuj has over 12 years of experience in sales leadership roles across companies in the FMCG sector. He's a B.Com graduate and holds an MBA in Retail Management. He started his career with Nilkamal, later joining CHEP and LEAP. At LEAP, Anuj implements workflows for driving success and setting benchmarks for FMCG and AUTO segments, steering them towards growth by developing strategies, improving financial and operational efficiencies and guiding a cross-functional and multi-cultural team pan-India.

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
