import Contact from './ContactSection/Contact';
import Hero from './HeroSection/hero';
import Attacks from './AttacksSection/Attacks';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

const Home = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const ui = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        console.log(ui.scrollPosition);

        if (ui.scrollPosition) {
            homeRef.current?.scrollTo({
                top: document.getElementById(ui.scrollPosition)?.offsetTop,
                behavior: 'smooth',
            });
        }
    }, [ui.scrollPosition]);
    return (
        <div
            ref={homeRef}
            className="snap-mandatory snap-y h-screen overflow-y-scroll"
        >
            <div className="snap-center snap-always" id="Hero">
                <Hero />
            </div>
            <div className="snap-center snap-always" id="Attack">
                <Attacks />
            </div>
            <div className="snap-center snap-always" id="Contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
