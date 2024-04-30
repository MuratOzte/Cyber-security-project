import HeroText from './HeroText';
import LoginContainer from './RegisterContainer';
import Auth from './Auth';

const Hero = () => {
    return (
        <div className="flex gap-5 mx-4 h-screen">
            <HeroText />
            <Auth />
        </div>
    );
};

export default Hero;
