import React from 'react';

const Pricing = () => {
  return (
    <section className="bg-[#ffeee9] py-20">
      <div className="container mx-auto px-6">
        <p className="text-sm text-[#EF6D58] font-semibold mb-2 uppercase">Pricing</p>
        <h2 className="text-4xl font-bold text-amber-950 mb-12 leading-tight">
          Check Our <br /> Pricing Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border border-[#fbd9d2] rounded-xl p-6 bg-[#fff3ef] shadow-sm">
            <p className="text-xs text-[#EF6D58] font-semibold mb-2 uppercase">Consultation</p>
            <h3 className="text-3xl font-bold text-amber-950 mb-3">Free</h3>
            <p className="text-sm text-neutral-600 mb-6">
              Your digital marketing efforts, instead of handling in-house.
            </p>
            <div className="space-y-4 mb-6">
              <PlanItem active label="Brand Design" />
              <PlanItem label="Market Analysis" />
              <PlanItem label="Production" />
            </div>
            <button className="py-2 px-5 text-sm font-medium border border-neutral-300 text-amber-950 rounded hover:bg-neutral-100 transition">
              Contact Us
            </button>
          </div>

          {/* Popular Plan */}
          <div className="bg-white rounded-xl shadow-xl relative p-6 border border-[#fbd9d2]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EF6D58] text-white text-xs font-bold px-3 py-1 rounded-full">
              Popular
            </div>
            <p className="text-xs text-neutral-400 font-semibold mb-2 uppercase">Design</p>
            <h3 className="text-3xl font-bold text-amber-950 mb-3">$1500</h3>
            <p className="text-sm text-neutral-600 mb-6">
              Provides your business with a variety of digital solutions.
            </p>
            <div className="space-y-4 mb-6">
              <PlanItem active label="Brand Design" />
              <PlanItem active label="Market Analysis" />
              <PlanItem active label="Production" />
            </div>
            <button className="py-2 px-5 text-sm font-medium bg-[#EF6D58] text-white rounded hover:bg-[#e05b47] transition">
              Contact Us
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-[#fbd9d2] rounded-xl p-6 bg-[#fff3ef] shadow-sm">
            <p className="text-xs text-[#EF6D58] font-semibold mb-2 uppercase">Design + Code</p>
            <h3 className="text-3xl font-bold text-amber-950 mb-3">$2900</h3>
            <p className="text-sm text-neutral-600 mb-6">
              Keep you on your marketing goals and gain more business.
            </p>
            <div className="space-y-4 mb-6">
              <PlanItem active label="Brand Design" />
              <PlanItem active label="Market Analysis" />
              <PlanItem active label="Production" />
            </div>
            <button className="py-2 px-5 text-sm font-medium border border-neutral-300 text-amber-950 rounded hover:bg-neutral-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlanItem = ({ label, active = false }: { label: string; active?: boolean }) => (
  <div className="flex items-center">
    <div className={`w-4 h-4 mr-3 rounded-full flex items-center justify-center ${
      active ? 'bg-pink-100' : 'bg-neutral-200'
    }`}>
      {active && <div className="w-2 h-2 rounded-full bg-[#EF6D58]"></div>}
    </div>
    <span className="text-sm text-amber-950">{label}</span>
  </div>
);

export default Pricing;
