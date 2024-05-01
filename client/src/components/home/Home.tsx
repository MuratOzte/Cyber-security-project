import Contact from './ContactSection/Contact';
import Hero from './HeroSection/hero';
import Attacks from './AttacksSection/Attacks';

const Home = () => {
    return (
        <div className="snap-mandatory snap-y h-screen overflow-y-scroll">
            <div className="snap-center snap-always">
                <Hero />
            </div>
            <div className="snap-center snap-always" id="attacks">
                <Attacks />
            </div>
            <div className="snap-center snap-always" id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
