const HeroText = () => {
    return (
        <div className="w-1/2 h-full ml-12 flex">
            {/* big text */}
            <div className="flex flex-col items-center justify-start h-full mt-[40%]">
                <h1 className="text-6xl font-bold">Welcome to our website</h1>
                {/* small text */}
                <p className="text-l p-2">
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
