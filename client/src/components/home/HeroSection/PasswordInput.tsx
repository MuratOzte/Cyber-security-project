import { motion, Variants } from 'framer-motion';
import { forwardRef, useState, useRef } from 'react';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

const variants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    focused: { transform: 'TranslateY(-10px)' },
    nonFocused: { transform: 'TranslateY(0px)' },
};

interface CustomInputProps {
    isInView?: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    data: {
        email: string;
        password: string;
        retypePassword: string;
    };
}

const PasswordInput: React.FC<CustomInputProps> = ({
    isInView,
    handleChange,
    data,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const focusToggleHandler = () => {
        setIsFocused((prev) => !prev);
    };

    const labelClickHandler = () => {
        inputRef.current?.focus();
    };

    return (
        <>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="w-full relative"
            >
                <motion.label
                    className={`absolute left-2 text-gray-300 select-none cursor-text ${
                        isFocused || data.password.length > 0
                            ? 'translate-y-[-20px]'
                            : 'translate-y-[20px] text-gray-500'
                    } transition-transform duration-300 ease-in-out`}
                    htmlFor="password"
                    onClick={labelClickHandler}
                >
                    Password
                </motion.label>
                <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    name="password"
                    ref={inputRef}
                    onFocus={focusToggleHandler}
                    onBlur={focusToggleHandler}
                    onChange={handleChange}
                    className="w-full text-gray-800 p-3 rounded-lg bg-gray-400 placeholder:text-gray-500 my-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
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
        </>
    );
};

export default PasswordInput;
