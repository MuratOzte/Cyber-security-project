import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AttackItemProps {
    title: string;
    description: string;
    image: string;
    isInView: boolean;
    index: number;
}

const AttackItem: React.FC<AttackItemProps> = ({
    title,
    description,
    image,
    isInView,
    index,
}) => {
    const [indexState, setIndexState] = useState(0);

    useEffect(() => {
        if (index % 3 == 1) {
            setIndexState(50);
        }
        if (index % 3 == 2) {
            setIndexState(0);
        }
        if (index % 3 == 0) {
            setIndexState(-50);
        }
    }, [index,isInView]);

    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: indexState },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: index * 0.05, bounce: 0.2 }}
                exit="hidden"
                variants={variants}
                className="bg-gray-600 p-8 flex w-[30%] h-min justify-between items-center rounded-xl mx-auto mb-8"
            >
                <div className="h-full ">
                    <h1 className="text-4xl text-gray-100 uppercase mb-3">
                        {title}
                    </h1>
                    <p className="w-full text-gray-300 text-sm">
                        {description}
                    </p>
                </div>
                <div className="w-2/3 h-full flex justify-center rounded-xl min-w-44 ml-5">
                    <img
                        src={image}
                        alt={title}
                        className="aspect-[3/2] object-contain mix-blend-color-burn"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AttackItem;
