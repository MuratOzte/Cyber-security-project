import Contact from './components/home/ContactSection/Contact';
import Attacks from './components/home/AttacksSection/Attacks';
import Hero from './components/home/HeroSection/hero';

import { useSelector } from 'react-redux';
import LoginModal from './components/Login/LoginModal';
import { RootState } from './store';

function App() {
    const ui = useSelector((state: RootState) => state.ui);

    return (
        <>
            {ui.isLoginModalOpen && (
                <div className='w-full h-full flex justify-center items-center' >
                    <LoginModal />
                </div>
            )}

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
        </>
    );
}

export default App;
