import ResultBox from './ResultBox';
import Nmap from './Nmap/Nmap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import Curl from './Curl';
import Corsy from './Corsy';
import Httpx from './Httpx';
import Nuclei from './Nuclei/Nuclei';

const Result = () => {
    const attackStore = useSelector((state: RootState) => state.attack);

    useEffect(() => {
        console.log(attackStore.url);
    }, [attackStore.url]);

    return (
        attackStore.url && (
            <div className="w-full space-y-5">
                {attackStore.selectedAttacks.includes('Nmap') && (
                    <Nmap url={attackStore.url} />
                )}
                {attackStore.selectedAttacks.includes('Curl') && <Curl />}
                {attackStore.selectedAttacks.includes('Corsy - Cors') && <Corsy />}
                {attackStore.selectedAttacks.includes('Httpx') && <Httpx />}
                {attackStore.selectedAttacks.includes('Nuclei') && <Nuclei />}
            </div>
        )
    );
};

export default Result;
