const Hero = () => {
    return (
        <div className="flex gap-5 mx-4 h-[80vh]">
            {/* hero texts */}
            <div className="w-1/2 h-full">
                {/* big text */}
                <div className="flex flex-col items-center justify-center space-y-20 h-full">
                    <h1 className="text-6xl font-bold">
                        Welcome to our website
                    </h1>
                    {/* small text */}
                    <p className="text-l m-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis maiores optio ex dolore, hic quis dolores
                        aliquid nemo repellendus commodi, enim et consequatur.
                        Fuga quod a aut dolor error et.
                    </p>
                </div>
            </div>
            {/* login container */}
            <div className="w-1/2 h-full p-12 px-4 sm:px-16">
                <div className="w-full h-full rounded-xl bg-gray-800 p-8">
                    <form className="flex flex-col space-y-6 items-center h-full justify-center">
                        <input
                            type="text"
                            placeholder="name"
                            className="w-full text-gray-800 text-[24px] p-2 rounded-lg bg-slate-500"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="w-full text-gray-500 p-2 rounded-lg bg-slate-500"
                        />
                        <input
                            type="email"
                            placeholder="email"
                            className="w-full text-gray-500 p-2 rounded-lg bg-slate-500"
                        />
                        {/* checkbox */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember-me"
                                className="mr-2"
                            />
                            <label
                                htmlFor="remember-me"
                                className="text-gray-300"
                            >
                                Remember Me
                            </label>
                        </div>
                        <button className="bg-blue-600 text-white w-full p-2 rounded-lg">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;
