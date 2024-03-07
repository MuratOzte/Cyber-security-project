const Nav = () => {
    return (
        <>
            <nav className="bg-nav w-full h-full">
                <div className="container mx-auto flex justify-between items-center h-full px-12 py-5" >
                    <div>
                        <a href="/" className="text-white text-2xl font-bold">
                            Logo
                        </a>
                    </div>
                    <div>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="/" className="text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/" className="text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/" className="text-white">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/" className="text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
