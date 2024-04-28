import { motion } from 'framer-motion';
import SearchBox from './SearchBox';
import { useState } from 'react';
import Select from './Select';
import Filter from './Filter';

const variants = {
    searchPosition: {
        marginTop: 100,
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
            <motion.div className="w-2/3 h-60">
                <Filter>
                    <Select
                        isInitial={isInitial}
                        setSelectedAttacks={setSelectedAttacks}
                        selectedAttacks={selectedAttacks}
                    />
                </Filter>
            </motion.div>
            {/* <div
                className={`flex justify-center items-center transition-all ease-out`}
            >
                <Select
                    isInitial={isInitial}
                    setSelectedAttacks={setSelectedAttacks}
                    selectedAttacks={selectedAttacks}
                />
            </div> */}
            {/* <button onClick={toggler}>Toggle</button> */}
        </div>
    );
};

export default Attack;
