import ResultBox from './ResultBox';
import Nmap from './Nmap/Nmap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';

const Result = () => {
    const attackStore = useSelector((state: RootState) => state.attack);

    useEffect(() => {
        console.log(attackStore.url);
    }, [attackStore.url]);

    return attackStore.url && <Nmap url={attackStore.url} />;
};

export default Result;
