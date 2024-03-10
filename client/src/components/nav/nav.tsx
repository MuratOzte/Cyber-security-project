import logo from '../../assets/logo.png';

const Nav = () => {
    return (
        <>
            <nav className="bg-nav w-full h-full">
                <div className="container mx-auto flex justify-between items-center h-full px-12 py-2">
                    <div className="flex items-center">
                        <a href="/" className="text-white text-2xl font-bold">
                            <img src={logo} alt="logo" className="w-16" />
                        </a>
                        <p className="text-[24px]">Easyber Security</p>
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
