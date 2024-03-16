import Attacks from './components/home/AttacksSection/Attacks';
import Hero from './components/home/HeroSection/hero';
function App() {
    return (
        <>
            <div className="snap-mandatory snap-y h-screen overflow-y-scroll">
                <div className="snap-center snap-always">
                    <Hero />
                </div>
                <div className="snap-center snap-always">
                    <Attacks />
                </div>
                <div className="snap-center snap-always">
                    <Attacks />
                </div>
            </div>
        </>
    );
}

export default App;
