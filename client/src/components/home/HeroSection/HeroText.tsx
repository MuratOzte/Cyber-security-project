const HeroText = () => {
    return (
        <div className="w-1/2 h-full ml-12 flex">
            {/* big text */}
            <div className="flex flex-col items-center justify-start h-full mt-[20%] space-y-8">
                <h1 className="text-6xl font-bold">
                    Welcome to{' '}
                    <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                        EasyBer
                    </span>{' '}
                    Security
                </h1>
                {/* small text */}
                <p className="text-3xl text-gray-400 text-left">
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
