import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import { RootState } from '../../store';
import uiSlice from '../../store/slices/uiSlice';
import NavButton from './NavButtons';

const Nav = () => {
    const dispatch = useDispatch();

    const ui = useSelector((state: RootState) => state.ui);

    const loginModalToggleHandler = () => {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            window.location.href = '/';
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
                        {!localStorage.getItem('token') && (
                            <>
                                <NavButton position="Register" />
                                <NavButton position="Attack" />
                                <NavButton position="Contact" />
                            </>
                        )}
                        {localStorage.getItem('token') &&
                            window.location.href !==
                                'http://localhost:5173/attack' && (
                                <p
                                    onClick={() => {
                                        window.location.href = '/attack';
                                    }}
                                    className="mr-5 hover:scale-105 transition-all cursor-pointer"
                                >
                                    Buraya Ne Yazcağımı Bulamadım
                                </p>
                            )}
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
