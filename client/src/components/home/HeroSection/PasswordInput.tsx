import { motion, Variants } from 'framer-motion';
import { forwardRef, useState } from 'react';
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
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
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
                    <MdOutlineVisibility className="w-6 h-6" color="#212223" />
                )}
            </div>
        </motion.div>
    );
};

export default PasswordInput;
