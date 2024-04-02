import HeroText from './HeroText';
import LoginContainer from './RegisterContainer';

const Hero = () => {
    return (
        <div className="flex gap-5 mx-4 h-screen">
            <HeroText />
            <LoginContainer />
        </div>
    );
};

export default Hero;
