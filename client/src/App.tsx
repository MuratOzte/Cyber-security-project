import Attacks from './components/home/Attacks';
import Hero from './components/home/hero';
import Nav from './components/nav/nav';
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
