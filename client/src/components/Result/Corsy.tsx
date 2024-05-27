import ktuData from '../../data/ktu/corsy-output.json';
import aspnetData from '../../data/testaspnet/corsy-output.json';
import htmlData from '../../data/testhtml5/corsy-output.json';
import phpData from '../../data/testphp/corsy-output.json';
import data from '../../data/attacks.json';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Skeleton from '../common/Skeleton';
import Divider from '../common/Divider';

const Corsy = () => {
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

    return (
        <div className="w-full flex items-center justify-center transition-all ease-out">
            <div className="flex text-center flex-col bg-gray-300 rounded-tl-xl rounded-bl-xl">
                <img
                    src={data[2].image}
                    alt="ResultBox"
                    className="w-48 h-[107.5px] rounded-tl-xl p-2"
                />
                <p className="text-gray-600 uppercase border-t-[1px] text-sm py-[6px] border-t-gray-600">
                    {data[2].title}
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
                <div
                    className={`w-2/3 relative min-h-[140px] bg-gray-800 rounded-tr-xl rounded-br-xl origin-left transition-[height] duration-700 px-5 pt-2`}
                >
                    <ul className="text-white flex flex-wrap justify-evenly w-full">
                        {result &&
                            result.map((item: any, index: number) => (
                                <li
                                    key={index}
                                    className="flex flex-col overflow-hidden p-2 py-1 box-border"
                                >
                                    {Object.entries(item).map(
                                        (
                                            [key, value]: [string, string],
                                            innerIndex: number
                                        ) => (
                                            <div
                                                className="flex flex-row"
                                                key={innerIndex}
                                            >
                                                <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                                    {key}
                                                </span>
                                                <Divider />
                                                <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                                    {value}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Corsy;
