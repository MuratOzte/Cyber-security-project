import { useState, useRef } from 'react';
import Alert from '../../common/Alert';
import registerValidation from '../../../utils/registerValidation';
import { AnimatePresence, motion, useInView, Variants } from 'framer-motion';
//icons
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

const LoginContainer = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        retypePassword: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRetypePasswordVisible, setIsRetypePasswordVisible] =
        useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref);

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        console.log(data);

        const response = registerValidation(data);
        if (response) {
            setError(response);
            setIsLoading(false);
            return;
        }
        setIsLoading(false);
    };

    const variants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="w-1/2 h-4/5 p-12 px-4 sm:px-16">
            <motion.div
                className="w-full h-full rounded-xl bg-gray-600 p-8 shadow-lg"
                variants={variants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.3, delay: 0.3 }}
            >
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
                        className="w-full text-gray-800 p-3 rounded-lg bg-gray-400 placeholder:text-gray-500"
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
                            className="w-full text-gray-800 p-3 rounded-lg bg-gray-400 placeholder:text-gray-500"
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
                    <motion.div
                        className="w-full relative"
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <input
                            type={isRetypePasswordVisible ? 'text' : 'password'}
                            name="retypePassword"
                            placeholder="retypePassword"
                            onChange={handleChange}
                            className="w-full text-gray-800 p-3 rounded-lg bg-gray-400 placeholder:text-gray-500"
                        />
                        <div
                            className="absolute inset-y-0 right-0 pr-6 flex items-center cursor-pointer"
                            onClick={() => {
                                setIsRetypePasswordVisible((prev) => !prev);
                            }}
                        >
                            {isRetypePasswordVisible &&
                                data.retypePassword.length > 0 && (
                                    <MdOutlineVisibilityOff
                                        className="w-6 h-6"
                                        color="#212223"
                                    />
                                )}
                            {!isRetypePasswordVisible &&
                                data.retypePassword.length > 0 && (
                                    <MdOutlineVisibility
                                        className="w-6 h-6"
                                        color="#212223"
                                    />
                                )}
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex items-center w-full ml-[4px]"
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.4, delay: 0.7 }}
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-slate-500 bg-slate-500 rounded border-gray-300 dark:focus:ring-slate-500 dark:ring-offset-slate-500 focus:ring-2 dark:bg-slate-500 dark:border-gray-600 accent-gray-400"
                            />
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Remember me
                            </label>
                        </div>
                    </motion.div>
                    <motion.button
                        variants={variants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        onClick={handleSubmit}
                        className="bg-gray-400 text-white w-full p-2 rounded-lg flex justify-center"
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
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Alert
                                    description={error}
                                    setError={setError}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </motion.div>
        </div>
    );
};

export default LoginContainer;
