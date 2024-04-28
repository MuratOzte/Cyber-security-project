import { motion } from 'framer-motion';
import { Dispatch } from 'react';
import Attacks from '../../data/attacks.json';

interface SelectProps {
    isInitial: boolean;
    setSelectedAttacks: Dispatch<React.SetStateAction<string[]>>;
    selectedAttacks: string[];
}

const Select: React.FC<SelectProps> = ({
    isInitial,
    setSelectedAttacks,
    selectedAttacks,
}) => {
    return (
        <motion.div
            animate={isInitial ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.75 }}
            className="flex justify-center mt-5 w-1/3 gap-10"
        >
            {Attacks.map((attack) => {
                return (
                    <div
                        key={attack.title}
                        onClick={() => {
                            setSelectedAttacks((prev: string[]) => {
                                if (prev.includes(attack.title)) {
                                    return prev.filter(
                                        (item) => item !== attack.title
                                    );
                                } else {
                                    return [...prev, attack.title];
                                }
                            });
                        }}
                        className={`flex items-center flex-col text-center w-2/12 m-auto rounded-lg min-w-32 bg-gray-100 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-700 text-lg uppercase font-sans shadow-green-500 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] ${
                            !selectedAttacks.includes(attack.title)
                                ? 'shadow-none'
                                : null
                        }`}
                    >
                        <img
                            src={attack.image}
                            alt={attack.title}
                            className="rounded-lg rounded-bl-none rounded-br-none"
                        />
                        <h1 className="py-1 select-none">{attack.title}</h1>
                    </div>
                );
            })}
        </motion.div>
    );
};

export default Select;
