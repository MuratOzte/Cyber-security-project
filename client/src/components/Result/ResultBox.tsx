import { motion } from 'framer-motion';

const ResultBox = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex justify-center text-center flex-col bg-gray-300 rounded-tl-xl rounded-bl-xl">
                <img
                    src="https://avatars.githubusercontent.com/u/74470979?v=4"
                    alt="ResultBox"
                    className="w-24 h-24 rounded-tl-xl"
                />
                <p className="text-gray-600">Attack Title</p>
            </div>
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                className="w-2/3 bg-red-400 h-[120px] rounded-tr-xl rounded-br-xl origin-left"
            >
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 ,delay: 0.5}}
                className="text-center text-white"
                >Attack Results</motion.p>
            </motion.div>
        </div>
    );
};

export default ResultBox;
