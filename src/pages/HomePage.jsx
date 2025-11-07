import Navbar from '../components/layout/Navbar';
import About from '../components/sections/About';
import Formations from '../components/sections/Formations';
import Experiences from '../components/sections/Experiences';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import Hero from '../components/sections/Hero';
import Technologies from '../components/sections/Technologies';

function HomePage() {
  return (
    <>
    <div className='container mx-auto px-8 overflow-hidden'>
        <Navbar/>
        <Hero/>
    </div>
    <div className=' overflow-hidden md:px-0 bg-background-secondary/60 backdrop-blur-md py-12 space-y-12'>
  <About/>
  <Technologies/>
  <Formations />
  <Experiences/>
      <Contact />
      <Footer/>
    </div>
    </>
  );
}

export default HomePage
