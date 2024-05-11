import logo from '../../assets/logo.png';
import LoginModal from '../Login/LoginModal';
import { useSelector, useDispatch } from 'react-redux';
import uiSlice from '../../store/slices/uiSlice';
import { RootState } from '../../store';

const Nav = () => {
    const dispatch = useDispatch();

    const ui = useSelector((state: RootState) => state.ui);

    const loginModalToggleHandler = () => {
        dispatch(uiSlice.actions.setLoginModal(!ui.isLoginModalOpen));
    };

    const scrollHandler = (location: string) => {
        dispatch(uiSlice.actions.setScrollPosition(location));
    };

    return (
        <>
            <nav className="bg-nav w-full h-full">
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
                    <div className="flex items-center gap-3">
                        <button
                            onClick={scrollHandler.bind(null, 'Attack')}
                            className="text-white mr-8"
                        >
                            Attacks
                        </button>
                        <button
                            onClick={scrollHandler.bind(null, 'Contact')}
                            className="text-white mr-5"
                        >
                            Contact
                        </button>
                        <button
                            onClick={loginModalToggleHandler}
                            className="bg-gradient-to-tr from-gray-500 to-gray-600 hover:scale-105 transition-all px-5 py-3 rounded-xl text-white"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
