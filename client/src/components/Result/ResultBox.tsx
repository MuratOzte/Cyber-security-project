import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';

const ResultBox = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandToggleHandler = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex  text-center flex-col bg-gray-300 rounded-tl-xl rounded-bl-xl">
                <img
                    src="https://avatars.githubusercontent.com/u/74470979?v=4"
                    alt="ResultBox"
                    className="w-24 h-24 rounded-tl-xl"
                />
                <p className="text-gray-600">Attack Title</p>
            </div>
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`w-2/3 relative bg-red-400 ${
                    isExpanded ? 'h-[360px]' : 'h-[120px]'
                } rounded-tr-xl rounded-br-xl origin-left transition-[height] duration-700`}
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-white"
                >
                    Attack Results
                </motion.p>
                <div className="absolute right-4 bottom-2 cursor-pointer hover:scale-125  transition-all">
                    <MdExpandMore
                        onClick={expandToggleHandler}
                        size={32}
                        color="white"
                        className={`${
                            isExpanded ? 'rotate-180' : null
                        } transition-transform delay-50 duration-300`}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default ResultBox;
