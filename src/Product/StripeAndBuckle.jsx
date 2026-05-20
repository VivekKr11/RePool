import React from "react";

const StripeAndBuckle = () => {
  return (
    <section className="bg-white py-16 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-2xl space-y-5">
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-blue-400 font-medium">
            <span className="w-6 h-px bg-blue-400" />
            Others
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Strip and Buckle</h2>
          <div className="w-10 h-[3px] rounded-full bg-blue-500" />
          <p className="text-gray-500 text-base leading-relaxed">
            At Repool India, our Strip and Buckle solutions are designed to provide secure and
            reliable fastening for your packaging needs. These systems ensure that your loads
            remain tightly secured during transit and storage. The user-friendly design allows
            for quick application and adjustments, making them ideal for various industrial
            applications. Whether you're handling heavy machinery or delicate items, our Strip
            and Buckle solutions enhance safety and stability, streamlining your logistics processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StripeAndBuckle;