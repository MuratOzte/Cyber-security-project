import ResultBox from './ResultBox';
import Nmap from './Nmap/Nmap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import Curl from './Curl';

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
            </div>
        )
    );
};

export default Result;
