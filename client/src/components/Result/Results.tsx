import ResultBox from './ResultBox';
import Nmap from './Nmap/Nmap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Result = () => {
    const attackStore = useSelector((state: RootState) => state.attack);

    return <Nmap url={attackStore.url} />;
};

export default Result;
