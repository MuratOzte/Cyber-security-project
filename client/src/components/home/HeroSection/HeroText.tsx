import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useEffect } from 'react';

const HeroText = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const variants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    useEffect(() => {
        console.log(isInView);
    }, [isInView]);

    return (
        <div className="w-1/2 h-full ml-12 flex">
            {/* big text */}
            <div className="flex flex-col items-center justify-start h-full mt-[20%] space-y-8">
                <motion.h1
                    variants={variants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="text-6xl font-bold"
                    ref={ref}
                >
                    Welcome to{' '}
                    <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                        EasyBer
                    </span>{' '}
                    Security
                </motion.h1>
                {/* small text */}
                <motion.p
                    className="text-3xl text-gray-400 text-left mr-8"
                    variants={variants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                >
                    Pompalamasyon bu benim misyon Afrodizyak istemez doğuştan
                    hazır füzyon Wow wow wow baby yoo bu gece gelip benim ol
                    Pompalamasyon bu benim misyon Afrodizyak istemez doğuştan
                    hazır füzyon Wow wow wow baby yoo bu gece gelip benim ol
                    &#x2764;
                </motion.p>
            </div>
        </div>
    );
};

export default HeroText;
