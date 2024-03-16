import AttackItem from './AttackItem';
import { motion, useScroll, useTransform } from 'framer-motion';

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
    const { scrollY } = useScroll();
    console.log(scrollY);

    const backgroundColorStyle = useTransform(
        scrollY,
        [0, 800],
        ['white', 'black']
    );

    return (
        <div className="h-[100vh] w-full">
            <motion.div
                style={{ backgroundColor: backgroundColorStyle }}
                className="flex flex-wrap p-12 justify-center"
            >
                {attacks.map((e) => (
                    <AttackItem
                        description={e.description}
                        key={'Desc' + e.title}
                        image={e.image}
                        title={e.title}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Attacks;
