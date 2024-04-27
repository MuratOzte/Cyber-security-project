import { useState } from 'react';

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
    const [selectedAttacks, setSelectedAttacks] = useState([]);

    return (
        <div className="flex justify-center mt-5 w-2/3">
            {Attacks.map((attack) => {
                return (
                    <div
                        key={attack.name}
                        onClick={() => {
                            setSelectedAttacks((prev) => {
                                if (prev.includes(attack.name)) {
                                    return prev.filter(
                                        (item) => item !== attack.name
                                    );
                                } else {
                                    return [...prev, attack.name];
                                }
                            });
                        }}
                        className={`flex items-center flex-col text-center w-2/12 m-auto rounded-lg  bg-gray-100 hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-700 text-lg uppercase font-sans shadow-green-500 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] ${
                            !selectedAttacks.includes(attack.name)
                                ? 'shadow-none'
                                : null
                        }`}
                    >
                        <img
                            src={attack.img}
                            alt={attack.name}
                            className="rounded-lg rounded-bl-none rounded-br-none"
                        />
                        <h1 className="py-1 select-none">{attack.name}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default Select;
