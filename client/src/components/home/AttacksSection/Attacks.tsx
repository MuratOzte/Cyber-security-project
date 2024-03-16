import AttackItem from './AttackItem';

const Attacks = () => {
    return (
        <div className="h-[100vh]">
            <div className="w-full h-full">
                <AttackItem
                    title="katana"
                    key={'1'}
                    description="A katana is a Japanese sword characterized by a curved, single-edged blade with a circular or squared guard and long grip to accommodate two hands."
                    image="https://i.ytimg.com/vi/r5sb9vpgDuI/maxresdefault.jpg"
                />
            </div>
        </div>
    );
};

export default Attacks;
