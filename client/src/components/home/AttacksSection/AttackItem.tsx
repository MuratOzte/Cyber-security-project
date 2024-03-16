interface AttackItemProps {
    title: string;
    description: string;
    image: string;
}

const AttackItem: React.FC<AttackItemProps> = ({
    title,
    description,
    image,
}) => {
    return (
        <div className="bg-gray-600 p-5 flex w-[30%] h-[40%] justify-between">
            <div className="h-full ">
                <h1 className="text-4xl text-gray-100 uppercase" >{title}</h1>
                <p className="w-full text-gray-300">{description}</p>
            </div>
            <div className="w-2/3 h-full bg-gray-400 flex justify-center rounded-xl min-w-44">
                <img
                    src={image}
                    alt={title}
                    className="aspect-[3/2] object-contain mix-blend-color-burn"
                />
            </div>
        </div>
    );
};

export default AttackItem;
