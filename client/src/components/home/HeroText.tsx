const HeroText = () => {
    return (
        <div className="w-1/2 h-full">
            {/* big text */}
            <div className="flex flex-col items-center justify-center space-y-20 h-full">
                <h1 className="text-6xl font-bold">Welcome to our website</h1>
                {/* small text */}
                <p className="text-l m-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis maiores optio ex dolore, hic quis dolores aliquid
                    nemo repellendus commodi, enim et consequatur. Fuga quod a
                    aut dolor error et.
                </p>
            </div>
        </div>
    );
};

export default HeroText;
