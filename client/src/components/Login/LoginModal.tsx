import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';

const LoginModal = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute bg-white rounded-lg dark:bg-gray-700 w-4/12 shadow-xl">
                <ModalHeader />
                <ModalBody />
            </div>
        </div>
    );
};

export default LoginModal;
