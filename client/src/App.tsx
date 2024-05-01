import Home from './components/home/Home';

import { useSelector } from 'react-redux';
import LoginModal from './components/Login/LoginModal';
import { RootState } from './store';

function App() {
    const ui = useSelector((state: RootState) => state.ui);

    return (
        <>
            {ui.isLoginModalOpen && (
                <>
                    <div className="w-full h-full fixed top-0 left-0 bg-black opacity-70 z-50"></div>
                    <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 z-50">
                        <LoginModal />
                    </div>
                </>
            )}
            <Home />
        </>
    );
}

export default App;
