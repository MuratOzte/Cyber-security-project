import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import uiSlice from '../../store/slices/uiSlice';

const LoginModal = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const closeHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                dispatch(uiSlice.actions.setLoginModal(false));
            }
        };
        document.addEventListener('keyup', closeHandler);
        return () => {
            document.removeEventListener('keyup', closeHandler);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div
                className="absolute bg-white rounded-lg dark:bg-gray-700 w-4/12 shadow-xl"
                tabIndex={0}
            >
                <ModalHeader />
                <ModalBody />
            </div>
        </div>
    );
};

export default LoginModal;
