import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import LatestWork from './sections/LatestWork';
import Pricing from './sections/Pricing';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Footer from './layout/Footer'
import HowWeWork from './sections/howwework';
import Team from './sections/Team';
function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <HowWeWork/>
        <LatestWork />
        <Team/>
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;