import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MdExpandMore } from 'react-icons/md';
import data from '../../data/attacks.json';
import ktuData from '../../data/ktu/curl-output.json';
import aspnetData from '../../data/testaspnet/curl-output.json';
import htmlData from '../../data/testhtml5/curl-output.json';
import phpData from '../../data/testphp/curl-output.json';
import Divider from '../common/Divider';
import Skeleton from '../common/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

const Curl = () => {
    const attackStore = useSelector((state: RootState) => state.attack);

    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const expandToggleHandler = () => {
        setIsExpanded((prev) => !prev);
    };

    useEffect(() => {
        setIsLoading(true);

        const wait = new Promise((resolve) => {
            setTimeout(() => {
                if (attackStore.url === 'http://ktu.edu.tr/') {
                    setResult(ktuData);
                } else if (attackStore.url === 'http://testasp.vulnweb.com/') {
                    setResult(aspnetData);
                } else if (
                    attackStore.url === 'http://testhtml5.vulnweb.com/'
                ) {
                    setResult(htmlData);
                } else if (attackStore.url === 'http://testphp.vulnweb.com/') {
                    setResult(phpData);
                }
                setIsLoading(false);
                resolve(true);
            }, 2000); 
        });

        wait.then(() => {
            console.log('Veri yüklendi');
        });
    }, [attackStore.url]);

    return (
        <>
            <div className="w-full flex items-center justify-center transition-all ease-out">
                <div className="flex text-center flex-col bg-gray-300 rounded-tl-xl rounded-bl-xl">
                    <img
                        src={data[1].image}
                        alt="ResultBox"
                        className="w-48 h-[107.5px] rounded-tl-xl p-2"
                    />
                    <p className="text-gray-600 uppercase border-t-[1px] text-sm py-[6px] border-t-gray-600">
                        {data[1].title}
                    </p>
                </div>
                {isLoading ? (
                    <div
                        className={`w-2/3 relative bg-gray-800 ${
                            isExpanded ? 'h-[360px]' : 'h-[140px]'
                        } rounded-tr-xl rounded-br-xl origin-left transition-[height] duration-700 px-5 pt-2`}
                    >
                        <Skeleton />
                    </div>
                ) : (
                    <motion.div
                        className={`w-2/3 relative bg-gray-800 ${
                            isExpanded ? 'h-[360px]' : 'h-[140px]'
                        } rounded-tr-xl rounded-br-xl origin-left transition-[height] duration-700 px-5 pt-2`}
                    >
                        Deneme
                        <div className="absolute right-4 bottom-2 cursor-pointer hover:scale-125 transition-all">
                            <MdExpandMore
                                onClick={expandToggleHandler}
                                size={32}
                                color="white"
                                className={`${
                                    isExpanded ? 'rotate-180' : ''
                                } transition-transform delay-50 duration-300`}
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default Curl;
