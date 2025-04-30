import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-neutral-900 pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Section */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <div className="text-red-500 font-medium mb-4 tracking-widest">MODERN STUDIO</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                We’re Help<br />To Build Your<br />Dream Project
              </h1>
              <p className="text-lg text-neutral-400 mb-8 max-w-lg">
                Agency provides a full-service range including technical skills, design, business understanding.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center">
                  How We Work <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="border border-neutral-600 text-white px-6 py-3 rounded-md font-medium hover:bg-neutral-800 transition-colors">
                  Contact Us
                </button>
              </div>

              {/* Testimonial */}
              <div className="flex items-center">
                <img
                  src="/images/user.png"
                  alt="User avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-sm text-white font-medium">“Put themselves in the merchant’s shoes”</p>
                  <p className="text-xs text-neutral-400">Meta Inc.</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 relative h-[500px]">

              {/* Floating Icons */}
              <img
                src="/images/path.png"
                alt="Brain"
                className="absolute top-0 right-12 w-20 opacity-70 z-20"
              />
              <div className="absolute top-16 right-8 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center z-20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
                </svg>
              </div>

              {/* Laptop with purple vertical pill background */}
              <div className="absolute top-8 left-20 w-48 h-64 bg-purple-600 rounded-[3rem] flex items-center justify-center z-10">
                <img
                  src="/images/herolaptop.png"
                  alt="Laptop"
                  className="w-40 rotate-6 relative -top-6"
                />
              </div>

              {/* Chat Block - moved lower */}
              <div className="absolute top-[340px] left-14 z-20">
                <img src="/images/block.png" alt="Chat block" className="w-52" />
              </div>

              {/* Woman Image with yellow circle only */}
              <div className="absolute bottom-0 right-12 w-64 h-64 z-10">
                {/* Yellow Circle only */}
                <div className="absolute inset-0 bg-yellow-300 rounded-full z-0"></div>
                {/* Woman Image */}
                <img
                  src="/images/redlady.png"
                  alt="Woman"
                  className="absolute inset-0 m-auto w-40 h-auto rounded-2xl z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
