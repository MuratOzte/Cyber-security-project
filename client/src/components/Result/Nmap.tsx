import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import data from '../../data/attacks.json';
import Divider from '../common/Divider';

const Nmap = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandToggleHandler = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex  text-center flex-col bg-gray-300 rounded-tl-xl rounded-bl-xl">
                <img
                    src={data[0].image}
                    alt="ResultBox"
                    className="w-48 h-[107.5px] rounded-tl-xl p-2"
                />
                <p className="text-gray-600 uppercase border-t-[1px] text-sm py-[6px] border-t-gray-600">
                    {data[0].title}
                </p>
            </div>
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`w-2/3 relative bg-gray-800 ${
                    isExpanded ? 'h-[360px]' : 'h-[140px]'
                } rounded-tr-xl rounded-br-xl origin-left transition-[height] duration-700 px-5 pt-2`}
            >
                <div>
                    <div className="flex w-full justify-between mb-4">
                        <p>193.110.168.103</p>
                        <p>Headers</p>
                        <p>Mon, 29 Apr 2024 14:17:03 GMT</p>
                    </div>
                    <div className="flex w-full flex-col h-4">
                        <div className="flex flex-row rounded-lg ml-4 gap-5">
                            <div className="flex flex-row items-center rounded-md bg-gray-500  h-6 py-1">
                                <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                    Server:
                                </span>
                                <Divider />
                                <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                    Apache
                                </p>
                            </div>
                            <div className="flex flex-row items-center rounded-md bg-gray-500  h-6 py-1">
                                <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                    Location
                                </span>
                                <Divider />
                                <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                    <a href="https://ktu.edu.tr/">
                                        https://ktu.edu.tr/
                                    </a>
                                </p>
                            </div>
                            <div className="flex flex-row items-center rounded-md bg-gray-500  h-6 py-1">
                                <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                    Strict-Transport-Security:
                                </span>
                                <Divider />
                                <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                    max-age=63072000; includeSubdomains; preload
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex ml-4 justify-evenly mt-[14px]">
                            <div className="flex flex-row items-center rounded-md bg-gray-500  h-6 py-1">
                                <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                    Content-Security-Policy:
                                </span>
                                <Divider />
                                <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                    upgrade-insecure-requests
                                </p>
                            </div>

                            <div className="flex flex-row items-center rounded-md bg-gray-500  h-6 py-1">
                                <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                    Content-Type
                                </span>
                                <Divider />
                                <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                    text/html; charset=iso-8859-1
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute right-4 bottom-2 cursor-pointer hover:scale-125  transition-all">
                    <MdExpandMore
                        onClick={expandToggleHandler}
                        size={32}
                        color="white"
                        className={`${
                            isExpanded ? 'rotate-180' : null
                        } transition-transform delay-50 duration-300`}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Nmap;
