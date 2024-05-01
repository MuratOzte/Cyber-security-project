import Home from './components/home/Home';

import { useSelector } from 'react-redux';
import LoginModal from './components/Login/LoginModal';
import { RootState } from './store';

import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const ui = useSelector((state: RootState) => state.ui);

    return (
        <>
            <AnimatePresence>
                {ui.isLoginModalOpen && (
                    <>
                        <div className="w-full h-full fixed top-0 left-0 bg-black opacity-70 z-50"></div>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            className="w-full h-full flex justify-center items-center fixed top-0 left-0 z-50"
                        >
                            <LoginModal />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <Home />
        </>
    );
}

export default App;
