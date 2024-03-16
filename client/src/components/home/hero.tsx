import HeroText from './HeroText';
import LoginContainer from './LoginContainer';

const Hero = () => {
    return (
        <div className="flex gap-5 mx-4 h-[100vh]">
            <HeroText />
            <LoginContainer />
        </div>
    );
};

export default Hero;
