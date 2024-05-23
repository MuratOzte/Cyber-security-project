import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import { RootState } from '../../store';
import uiSlice from '../../store/slices/uiSlice';
import NavButton from './NavButtons';
import { useState, useEffect } from 'react';

const Nav = () => {
    const dispatch = useDispatch();
    const [isToken, setIsToken] = useState(false);

    const ui = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsToken(true);
        }
    }, [localStorage.getItem('token')]);

    const loginModalToggleHandler = () => {
        if (localStorage.getItem('token')) {
            setIsToken(false);
            localStorage.removeItem('token');
        } else {
            dispatch(uiSlice.actions.setLoginModal(!ui.isLoginModalOpen));
        }
    };

    return (
        <>
            <nav className="bg-nav w-full h-full select-none">
                <div className="container mx-auto flex justify-between items-center h-full px-16 py-2">
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => (window.location.href = '/')}
                    >
                        <a href="/" className="text-white text-2xl font-bold">
                            <img src={logo} alt="logo" className="w-16" />
                        </a>
                        <p className="text-[24px]">Easyber Security</p>
                    </div>
                    <div className="flex items-center">
                        <NavButton position="Register" />
                        <NavButton position="Attack" />
                        <NavButton position="Contact" />
                        <button
                            onClick={loginModalToggleHandler}
                            className="bg-gradient-to-tr from-gray-500 to-gray-600 hover:scale-105 transition-all px-5 py-3 rounded-xl text-white"
                        >
                            {localStorage.getItem('token') ? 'Logout' : 'Login'}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
