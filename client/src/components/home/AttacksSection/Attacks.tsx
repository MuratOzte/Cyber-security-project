import AttackItem from './AttackItem';
import {
    motion,
    useScroll,
    useTransform,
    useInView,
    useMotionValue,
} from 'framer-motion';
import { useRef } from 'react';

const attacks = [
    {
        title: 'katana',
        description:
            'A katana is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands.',
        image: 'https://i.ytimg.com/vi/r5sb9vpgDuI/maxresdefault.jpg',
    },
    {
        title: 'katana',
        description:
            'A katana is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands.',
        image: 'https://i.ytimg.com/vi/r5sb9vpgDuI/maxresdefault.jpg',
    },
    {
        title: 'katana',
        description:
            'A katana is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands.',
        image: 'https://i.ytimg.com/vi/r5sb9vpgDuI/maxresdefault.jpg',
    },
    {
        title: 'katana',
        description:
            'A katana is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands.',
        image: 'https://i.ytimg.com/vi/r5sb9vpgDuI/maxresdefault.jpg',
    },
    {
        title: 'katana',
        description:
            'A katana is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands.',
        image: 'https://i.ytimg.com/vi/r5sb9vpgDuI/maxresdefault.jpg',
    },
    {
        title: 'katana',
        description:
            'A katana is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands.',
        image: 'https://i.ytimg.com/vi/r5sb9vpgDuI/maxresdefault.jpg',
    },
];

const Attacks = () => {
    const container = useRef(null);
    const isInView = useInView(container);

    return (
        <div className="h-screen w-full">
            <div
                ref={container}
                className="flex flex-wrap p-12 justify-center h-full w-full flex-row"
            >
                {attacks.map((attack, index) => (
                    <AttackItem
                        key={index + 'attack'}
                        title={attack.title}
                        description={attack.description}
                        image={attack.image}
                        isInView={isInView}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Attacks;
