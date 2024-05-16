import AttackItem from './AttackItem';

import attacks from '../../../data/attacks.json';

const Attacks = () => {
    return (
        <div className="h-screen w-full">
            <div className="flex flex-wrap p-8 justify-center w-full flex-row mb-5">
                {attacks.map((attack, index) => (
                    <AttackItem
                        key={index + 'attack'}
                        title={attack.title}
                        description={attack.description}
                        image={attack.image}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Attacks;
