import logo from '../../assets/logo.png';

const Nav = () => {
    const linkClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <nav className="bg-nav w-full h-full">
                <div className="container mx-auto flex justify-between items-center h-full px-16 py-2">
                    <div className="flex items-center">
                        <a href="/" className="text-white text-2xl font-bold">
                            <img src={logo} alt="logo" className="w-16" />
                        </a>
                        <p className="text-[24px]">Easyber Security</p>
                    </div>
                    <div>
                        <button className="bg-gradient-to-tr from-gray-500 to-gray-600 hover:scale-105 transition-all px-5 py-3 rounded-xl text-white">
                            Login
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
