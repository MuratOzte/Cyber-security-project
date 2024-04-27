import { motion } from 'framer-motion';
import SearchBox from './SearchBox';
import { useState } from 'react';
import Select from './Select';

const variants = {
    searchPosition: {
        marginTop: 150,
        width: '100%',
    },
    loadingPosition: {
        marginTop: 30,
        width: '70%',
    },
};

const Attack = () => {
    const [isInitial, setIsInitial] = useState(true);

    const toggler = () => {
        setIsInitial((prev) => !prev);
    };

    return (
        <div className="w-full h-full items-center flex flex-col">
            <motion.div
                variants={variants}
                initial="searchPosition"
                animate={isInitial ? 'searchPosition' : 'loadingPosition'}
                transition={{ duration: 0.75 }}
                exit="searchPosition"
                className="w-full flex justify-center"
            >
                <SearchBox />
            </motion.div>
            <div className='flex justify-center' >
                <Select />
            </div>
            <button onClick={toggler}>Toggle</button>
        </div>
    );
};

export default Attack;
