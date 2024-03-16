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
        <div className="bg-gray-600 p-8 flex w-[30%] h-min justify-between items-center rounded-xl mx-auto mb-8">
            <div className="h-full ">
                <h1 className="text-4xl text-gray-100 uppercase mb-3" >{title}</h1>
                <p className="w-full text-gray-300 text-sm">{description}</p>
            </div>
            <div className="w-2/3 h-full flex justify-center rounded-xl min-w-44 ml-5">
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
