import Divider from '../../common/Divider';
import React from 'react';

interface NucleiBoxProps {
    item: { [key: string]: any };
}

const NucleiBox: React.FC<NucleiBoxProps> = ({ item }) => {
    return (
        <div className="bg-nav border-gray-500 border-solid border-2 p-3 shadow-sm shadow-gray-500 rounded-md w-auto mx-5 mt-4 flex flex-col justify-center space-y-3">
            {item &&
                Object.entries(item).map(([key, value]) => {
                    console.log(`Key: ${key}, Value: ${value}`);
                    return (
                        <div className="flex flex-row" key={key}>
                            <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                {key}
                            </span>
                            <Divider />
                            <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                {value}
                            </p>
                        </div>
                    );
                })}
        </div>
    );
};

export default NucleiBox;
