import Navbar from '../components/layout/Navbar';
import About from '../components/sections/About';
import Experiences from '../components/sections/Experiences';
import Hero from '../components/sections/Hero';
import Technologies from '../components/sections/Technologies';

function HomePage() {
  return (
    <>
    <div className='container mx-auto px-8 overflow-hidden'>
        <Navbar/>
        <Hero/>
    </div>
    <div className=' overflow-hidden md:px-36 bg-background-secondary/60 backdrop-blur-md'>
      <About/>
      <Technologies/>
      <Experiences/>
    </div>

    </>
  );
}

export default HomePage
