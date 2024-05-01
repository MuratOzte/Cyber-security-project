import { useState } from 'react';
import { motion } from 'framer-motion';

const ModalBody = () => {
    const [isFocused, setIsFocused] = useState({
        email: false,
        password: false,
    });

    return (
        <div className="p-4 md:p-5 pt-2">
            <form className="space-y-4" action="#">
                <div>
                    <motion.label
                        onClick={(e) =>
                            document.getElementById('email').focus()
                        }
                        initial={{ y: 45 }}
                        animate={isFocused.email ? { y: 0 } : null}
                        transition={{ duration: 0.2 }}
                        htmlFor="email"
                        className={`block mb-2 font-medium ml-2 cursor-text text-md ${
                            !isFocused.email ? 'text-gray-800' : 'text-gray-300'
                        }`}
                    >
                        E-mail
                    </motion.label>
                    <input
                        onFocus={(e) =>
                            setIsFocused((prev) => ({ ...prev, email: true }))
                        }
                        onBlurCapture={(e) =>
                            setIsFocused((prev) => ({ ...prev, email: false }))
                        }
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full text-gray-800 p-3 rounded-lg bg-gray-400 placeholder:text-gray-500 my-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your password
                    </label>
                    <input
                        onFocus={(e) =>
                            setIsFocused((prev) => ({
                                ...prev,
                                password: true,
                            }))
                        }
                        onBlurCapture={(e) =>
                            setIsFocused((prev) => ({
                                ...prev,
                                password: false,
                            }))
                        }
                        type="password"
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{' '}
                    <a
                        href="#"
                        className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                        Create account
                    </a>
                </div>
            </form>
        </div>
    );
};

export default ModalBody;
