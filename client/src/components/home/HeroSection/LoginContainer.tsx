import { Ref, RefObject, useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { Dispatch, SetStateAction } from 'react';

interface LoginContainerProps {
    isInView?: boolean;
    variants?: any;
    ref?: any;
    isPasswordVisible?: boolean;
    setIsLogin?: Dispatch<SetStateAction<boolean>>;
}

const LoginContainer: React.FC<LoginContainerProps> = ({
    isInView,
    variants,
    ref,
    isPasswordVisible,
    setIsLogin,
}) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        retypePassword: '',
    });

    const handleChange = () => {};

    return (
        <form className="flex flex-col space-y-6 items-center h-full mt-7">
            <motion.input
                initial="hidden"
                variants={variants}
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.4, delay: 0.4 }}
                ref={ref}
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                className="w-full text-gray-800 p-3 rounded-lg bg-gray-400 placeholder:text-gray-500 my-2"
            />
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="w-full relative"
            >
                <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    className="w-full text-gray-800 p-3 rounded-lg bg-gray-400 placeholder:text-gray-500 my-2"
                />
                <div
                    className="absolute inset-y-0 right-0 pr-6 flex items-center cursor-pointer"
                    onClick={() => {
                        setIsPasswordVisible((prev) => !prev);
                    }}
                >
                    {isPasswordVisible && data.password.length > 0 && (
                        <MdOutlineVisibilityOff
                            className="w-6 h-6"
                            color="#212223"
                        />
                    )}
                    {!isPasswordVisible && data.password.length > 0 && (
                        <MdOutlineVisibility
                            className="w-6 h-6"
                            color="#212223"
                        />
                    )}
                </div>
            </motion.div>
            <motion.button
                variants={variants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.4, delay: 0.8 }}
                onClick={handleSubmit}
                className="bg-gray-400 text-white w-full p-2 rounded-lg flex justify-center my-2"
            >
                {isLoading && (
                    <div role="status">
                        <svg
                            aria-hidden="true"
                            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
                {!isLoading && 'Register'}
            </motion.button>
            <p className="text-gray-400 text-xl cursor-pointer">
                Already have an account?{' '}
                <span className="text-gray-300">Sign in</span>
            </p>
        </form>
    );
};

export default LoginContainer;
