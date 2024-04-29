import { motion, AnimatePresence } from 'framer-motion';
import SearchBox from './SearchBox';
import { useState } from 'react';
import Select from './Select';
import Filter from './Filter';
import ResultBox from '../Result/ResultBox';

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
    const [selectedAttacks, setSelectedAttacks] = useState([]);

    const toggler = () => {
        setIsInitial((prev) => !prev);
        console.log(selectedAttacks);
    };

    return (
        <>
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
                <AnimatePresence>
                    {isInitial && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInitial ? 1 : 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-2/3 h-60"
                        >
                            <Filter>
                                <Select
                                    isInitial={isInitial}
                                    setSelectedAttacks={setSelectedAttacks}
                                    selectedAttacks={selectedAttacks}
                                />
                            </Filter>
                        </motion.div>
                    )}
                </AnimatePresence>
                <button onClick={toggler}>Toggle</button>
            </div>
            <ResultBox />
        </>
    );
};

export default Attack;
