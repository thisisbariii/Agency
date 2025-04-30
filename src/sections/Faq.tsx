import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: "A digital agency is a business",
      answer: "Digital marketing efforts, instead of handling in-house. Helps you promote your services or products with a variety of digital strategies to achieve your marketing goals and grow your business."
    },
    {
      question: "Hire to outsource your digital",
      answer: "Outsourcing your digital marketing efforts can provide expertise and specialized knowledge that may not be available in-house."
    },
    {
      question: "Marketing efforts",
      answer: "Marketing efforts encompass the strategies and tactics used to promote products or services and connect with target audiences."
    },
    {
      question: "Can provide your business",
      answer: "Digital agencies can provide your business with comprehensive solutions that drive growth, increase visibility, and enhance customer engagement."
    }
  ];

  return (
    <section className="bg-[#ffeee9] py-20">
      <div className="container mx-auto px-6">
        <p className="text-sm text-[#EF6D58] font-semibold mb-2 uppercase">FAQ</p>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Content */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-amber-950 leading-tight">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-base text-neutral-600 mt-4 mb-6">
              A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
            </p>
            <button className="text-xl font-normal text-black ">
              Contact Us
            </button>
          </div>

          {/* Right Accordion */}
          <div className="md:w-2/3 space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 flex justify-between items-center text-left hover:bg-neutral-50 transition"
                >
                  <span className="text-lg font-medium text-amber-950">{item.question}</span>
                  <div className={`p-2 rounded-full transition ${
                    activeIndex === index ? 'bg-[#EF6D58] text-white' : 'bg-neutral-100 text-neutral-400'
                  }`}>
                    {activeIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="px-5 pb-5 text-sm text-neutral-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
