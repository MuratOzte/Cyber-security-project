import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Loading from '../common/Loading';
import Alert from '../common/Alert';

const ModalBody = () => {
    const [data, setData] = useState({
        email: 'admin159@admin.com',
        password: '123456',
    });

    const [isFocused, setIsFocused] = useState({
        email: false,
        password: false,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (!data.email || !data.password) {
                setError('Please fill in all fields');
                setIsLoading(false);
                return;
            }

            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });

            if (!response.ok) {
                throw new Error('Login request failed');
            }

            const responseData = await response.json();
            console.log(responseData); // Handle successful login
        } catch (error) {
            console.log(error);
            setError(error || 'An error occurred');
        }

        setIsLoading(false);
    };

    return (
        <div className="px-6 pb-5">
            <form className="" action="#">
                <div>
                    <motion.label
                        onClick={(e) =>
                            document.getElementById('email').focus()
                        }
                        initial={{ y: 45 }}
                        animate={
                            isFocused.email || data.email ? { y: 0 } : null
                        }
                        transition={{ duration: 0.2 }}
                        htmlFor="email"
                        className={`block mb-2 font-medium ml-2 cursor-text text-md ${
                            isFocused.email || data.email.length > 0
                                ? 'text-gray-300'
                                : 'text-gray-800'
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
                        value={data.email}
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full text-gray-800 p-3 rounded-lg autofill:bg-gray-400 bg-gray-400 placeholder:text-gray-500 mt-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                        required
                    />
                </div>
                <div className="my-1">
                    <motion.label
                        onClick={(e) =>
                            document.getElementById('password').focus()
                        }
                        initial={{ y: 45 }}
                        animate={
                            isFocused.password || data.password
                                ? { y: 0 }
                                : null
                        }
                        transition={{ duration: 0.2 }}
                        htmlFor="Password"
                        className={`block mb-2 font-medium ml-2 cursor-text text-md ${
                            isFocused.password || data.password.length > 0
                                ? 'text-gray-300'
                                : 'text-gray-800'
                        }`}
                    >
                        Password
                    </motion.label>
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
                        value={data.password}
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                password: e.target.value,
                            }))
                        }
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full text-gray-800 p-3 rounded-lg bg-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                        required
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {isLoading ? (
                        <div className="flex justify-center">
                            <Loading />
                        </div>
                    ) : (
                        'Login'
                    )}
                </button>
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Alert
                                description={error.toString()}
                                setError={setError}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
};

export default ModalBody;
