import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Nav = () => {
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
                        <a href="#attack" className="text-white mr-8">
                            Attacks
                        </a>
                        <a href="/services" className="text-white mr-5">
                            Contact
                        </a>
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
