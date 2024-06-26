import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Result from '../Result/Results';
import Filter from './Filter';
import SearchBox from './SearchBox';
import Select from './Select';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import attackSlice from '../../store/slices/attackSlice';
import { useNavigate } from 'react-router';

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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const attackStore = useSelector((state: RootState) => state.attack);

    const body = document.querySelector('body');
    body?.style.setProperty('overflow', 'scroll');

    const [isInitial, setIsInitial] = useState(true);
    const [selectedAttacks, setSelectedAttacks] = useState([
        'katana',
        'Nmap',
        'Curl',
        'Corsy - Cors',
        'Httpx',
        'Nuclei',
    ]);

    useEffect(() => {
        dispatch(attackSlice.actions.setAttacks(selectedAttacks));
    }, [selectedAttacks]);

    return (
        <div className="w-full h-auto">
            <div className="w-full h-full items-center flex flex-col">
                <motion.div
                    variants={variants}
                    initial="searchPosition"
                    animate={
                        attackStore.position === 'searchPosition'
                            ? 'searchPosition'
                            : 'loadingPosition'
                    }
                    transition={{ duration: 0.75 }}
                    exit="searchPosition"
                    className="w-full flex justify-center"
                >
                    <SearchBox />
                </motion.div>
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity:
                                attackStore.position === 'searchPosition'
                                    ? 1
                                    : 0,
                            height: isInitial ? 'auto' : 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-2/3 h-60"
                    >
                        {attackStore.position === 'searchPosition' && (
                            <Filter>
                                <Select
                                    isInitial={isInitial}
                                    setSelectedAttacks={setSelectedAttacks}
                                    selectedAttacks={selectedAttacks}
                                />
                            </Filter>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
            <Result />
        </div>
    );
};

export default Attack;
