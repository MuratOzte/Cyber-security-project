import ResultBox from './ResultBox';
import Nmap from './Nmap/Nmap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import Curl from './Curl';
import Corsy from './Corsy';
import Httpx from './Httpx';

const Result = () => {
    const attackStore = useSelector((state: RootState) => state.attack);

    useEffect(() => {
        console.log(attackStore.url);
    }, [attackStore.url]);

    return (
        attackStore.url && (
            <div className="w-full">
                {attackStore.selectedAttacks.includes('Nmap') && (
                    <Nmap url={attackStore.url} />
                )}
                {attackStore.selectedAttacks.includes('Curl') && <Curl />}
                <Corsy />
                <Httpx />
            </div>
        )
    );
};

export default Result;
