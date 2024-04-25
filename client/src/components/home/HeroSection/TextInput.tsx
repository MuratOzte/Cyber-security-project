import { motion, Variants } from 'framer-motion';
import { forwardRef, RefObject } from 'react';

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
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ isInView, handleChange , type }, ref) => {
        return (
            <>
                <motion.label
                    className="absolute left-2 text-gray-300"
                    htmlFor="email"
                >
                    E-mail
                </motion.label>
                <motion.input
                    initial="hidden"
                    variants={variants}
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    ref={ref}
                    onFocus={() => console.log('focused')}
                    type={type}
                    name={type}
                    onChange={handleChange}
                    className="w-full text-gray-800 p-3 rounded-lg bg-gray-400 placeholder:text-gray-500 my-2 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                />
            </>
        );
    }
);

export default CustomInput;
