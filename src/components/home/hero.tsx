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
            <div className="bg-blue-500 w-1/2 h-full p-12 px-32">
                <div className="bg-red-400 w-full h-full rounded-xl shadow-xl shadow-slate-600">
                    <form className="flex flex-col space-y-6 items-center h-full justify-center">
                        <input
                            type="text"
                            placeholder="name"
                            className="w-2/3 text-gray-700"
                        />
                        <input
                            type="text"
                            placeholder="password"
                            className="w-2/3"
                        />
                        <input
                            type="email"
                            placeholder="email"
                            className="w-2/3"
                        />
                        {/* checkbox */}
                        <div className="flex gap-2 w-2/3" >
                            <input type="checkbox" />
                            <p>Remember Me</p>
                        </div>
                        <button className="bg-blue-600 text-white w-2/3 p-2 rounded-lg">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;
