import { MdFilterAlt } from 'react-icons/md';
import { MdDone } from 'react-icons/md';
import { MdDoNotDisturbOn } from 'react-icons/md';

interface NmapPortProps {
    title: string;
    status: 'Open' | 'Closed' | 'Filtered';
}

const NmapPort: React.FC<NmapPortProps> = ({ title, status }) => {
    return (
        <>
            {status === 'Open' && (
                <div
                    className={
                        'w-fit flex items-center gap-5 bg-green-500 p-2 rounded-md px-5'
                    }
                >
                    <p>{title}</p>
                    <div className="flex items-center gap-1">
                        <p>{status}</p>
                        <MdDone />
                    </div>
                </div>
            )}
            {status === 'Closed' && (
                <div
                    className={
                        'w-fit flex items-center gap-5 bg-red-500 p-2 rounded-md px-5'
                    }
                >
                    <p>{title}</p>
                    <div className="flex items-center gap-1">
                        <p>{status}</p>
                        <MdDoNotDisturbOn />
                    </div>
                </div>
            )}
            {status === 'Filtered' && (
                <div
                    className={
                        'w-fit flex items-center gap-5 bg-yellow-500 p-2 rounded-md px-5'
                    }
                >
                    <p>{title}</p>
                    <div className="flex items-center gap-1">
                        <p>{status}</p>
                        <MdFilterAlt />
                    </div>
                </div>
            )}
        </>
    );
};

export default NmapPort;
