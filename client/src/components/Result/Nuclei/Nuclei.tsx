import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MdExpandMore } from 'react-icons/md';
import data from '../../../data/attacks.json';
import ktuData from '../../../data/ktu/nuclei-output.json';
import aspnetData from '../../../data/testaspnet/nuclei-output.json';
import htmlData from '../../../data/testhtml5/nuclei-output.json';
import phpData from '../../../data/testphp/nuclei-output.json';
import Divider from '../../common/Divider';
import Skeleton from '../../common/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import NucleiBox from './NucleiOuterBox';

const Nuclei = () => {
    const attackStore = useSelector((state: RootState) => state.attack);

    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const wait = new Promise((resolve) => {
            setTimeout(() => {
                if (attackStore.url === 'www.ktu.edu.tr') {
                    setResult(ktuData);
                } else if (attackStore.url === 'www.testasp.vulnweb.com') {
                    setResult(aspnetData);
                } else if (attackStore.url === 'www.testhtml5.vulnweb.com') {
                    setResult(htmlData);
                } else if (attackStore.url === 'www.testphp.vulnweb.com') {
                    setResult(phpData);
                }
                setIsLoading(false);
                resolve(true);
            }, 100);
        });

        wait.then(() => {
            console.log('Veri yüklendi');
        });
    }, [attackStore.url]);

    useEffect(() => {
        console.log(result);
    }, [result]);

    return (
        <div className="w-full flex items-center justify-center transition-all ease-out">
            <div className="flex text-center flex-col bg-gray-300 rounded-tl-xl rounded-bl-xl">
                <img
                    src={data[5].image}
                    alt="ResultBox"
                    className="w-48 h-[107.5px] rounded-tl-xl p-2"
                />
                <p className="text-gray-600 uppercase border-t-[1px] text-sm py-[6px] border-t-gray-600">
                    {data[5].title}
                </p>
            </div>
            {isLoading ? (
                <div
                    className={`w-2/3 relative bg-gray-800 ${
                        false ? 'h-[360px]' : 'h-[140px]'
                    } rounded-tr-xl rounded-br-xl origin-left transition-[height] duration-700 px-5 pt-2`}
                >
                    <Skeleton />
                </div>
            ) : (
                <motion.div
                    className={`w-2/3 relative bg-nav
                    } rounded-tr-xl rounded-br-xl origin-left transition-[height] duration-700 px-5 pb-4 flex flex-wrap justify-center`}
                >
                    {result && result.map((e: any) => <NucleiBox item={e} />)}
                </motion.div>
            )}
        </div>
    );
};

export default Nuclei;
