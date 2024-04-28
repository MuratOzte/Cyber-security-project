import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { MdOutlineExpandLess } from 'react-icons/md';

const Filter = () => {
    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = () => {
        setIsClicked((prev) => !prev);
    };

    return (
        <div className="w-full flex items-center flex-col">
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: isClicked ? '18rem' : 0 }}
                transition={{ duration: 0.75 }}
                className="w-11/12 bg-gray-500 rounded-lg flex flex-col justify-center items-center overflow-hidden"
            ></motion.div>
            <div
                className="ffffff rounded-bl-full rounded-br-full flex justify-center cursor-pointer w-16"
                onClick={clickHandler}
            >
                <MdExpandMore
                    color="gray"
                    size={36}
                    className={`transition-all duration-500 delay-300 ${
                        isClicked ? 'rotate-180' : null
                    }`}
                />
            </div>
        </div>
    );
};

export default Filter;
