import { motion, Variants } from 'framer-motion';
import { forwardRef, RefObject, useState, useRef } from 'react';

const variants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    focused: { transform: 'TranslateY(-10px)' },
    nonFocused: { transform: 'TranslateY(0px)' },
};

interface CustomInputProps {
    isInView?: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    data: {
        email: string;
        password: string;
        comparePassword?: string;
    };
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ isInView, handleChange, type, data }, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);

        const [isFocused, setIsFocused] = useState(false);

        const focusToggleHandler = () => {
            setIsFocused((prev) => !prev);
        };

        const labelClickHandler = () => {
            inputRef.current?.focus();
        };

        return (
            <>
                <motion.label
                    className={`absolute left-2 text-gray-300 select-none cursor-text ${
                        isFocused || data.email.length > 0
                            ? 'translate-y-0 '
                            : 'translate-y-[35px] text-gray-500'
                    } transition-transform duration-300 ease-in-out`}
                    htmlFor="email"
                    ref={
                        ref as React.RefObject<
                            HTMLInputElement & HTMLLabelElement
                        >
                    }
                    onClick={labelClickHandler}
                >
                    E-mail
                </motion.label>
                <motion.input
                    initial="hidden"
                    variants={variants}
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    onFocus={focusToggleHandler}
                    onBlur={focusToggleHandler}
                    ref={inputRef || undefined}
                    type={type}
                    name={type}
                    onChange={handleChange}
                    className="block w-full text-gray-800 p-3 rounded-lg bg-gray-400 placeholder:text-gray-500 my-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                />
            </>
        );
    }
);

export default CustomInput;
