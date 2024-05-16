import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import uiSlice from '../../../store/slices/uiSlice';

interface AttackItemProps {
    title: string;
    description: string;
    image: string;
    index: number;
}

const AttackItem: React.FC<AttackItemProps> = ({
    title,
    description,
    image,
    index,
}) => {
    const dispatch = useDispatch();

    const [indexState, setIndexState] = useState(0);

    const container = useRef(null);
    const isInView = useInView(container);

    useEffect(() => {
        if (isInView) {
            dispatch(uiSlice.actions.setNavPosition('Attack'));
        }
    }, [isInView]);

    useEffect(() => {
        if (index % 3 == 1) {
            setIndexState(0);
        }
        if (index % 3 == 2) {
            setIndexState(50);
        }
        if (index % 3 == 0) {
            setIndexState(-50);
        }
    }, [index, isInView]);

    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: indexState },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                ref={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.8, delay: index * 0.05, bounce: 0.2 }}
                exit="hidden"
                variants={variants}
                className="bg-gradient-to-b from-gray-500 to-gray-600 flex w-[30%] h-[260px] justify-between items-start rounded-xl mx-auto pt-4 px-4 mb-8"
            >
                <div className="flex space-y-5 flex-col">
                    <div className="w-full flex justify-center">
                        <img
                            src={image}
                            alt={title}
                            className={`w-1/2 ${
                                title == 'Nmap' ? 'h-[100px]' : 'h-16'
                            } aspect-[3/5] mix-blend-color-burn`}
                        />
                    </div>
                    <div className="h-full items-center flex">
                        <p className="text-gray-300 mt-2 text-sm">
                            {description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AttackItem;
