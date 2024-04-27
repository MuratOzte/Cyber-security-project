const Attacks = [
    {
        name: 'Attack 1',
        img: 'https://avatars.githubusercontent.com/u/74470979?v=4',
    },
    {
        name: 'Attack 2',
        img: 'https://avatars.githubusercontent.com/u/74470979?v=4',
    },
    {
        name: 'Attack 3',
        img: 'https://avatars.githubusercontent.com/u/74470979?v=4',
    },
];

const Select = () => {
    return (
        <div className="flex justify-center mt-5 w-2/3">
            {Attacks.map((attack) => {
                return (
                    <div
                        key={attack.name}
                        className="flex items-center flex-col text-center w-2/12 m-auto shadow-lg pb-2 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-700 text-lg ring-[4px] ring-green-600 uppercase font-sans"
                    >
                        <img src={attack.img} alt={attack.name} />
                        <h1>{attack.name}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default Select;
