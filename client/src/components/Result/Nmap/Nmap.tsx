import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MdExpandMore } from 'react-icons/md';
import data from '../../../data/attacks.json';
import Divider from '../../common/Divider';
import NmapPort from './NmapPort';
import Skeleton from '../../common/Skeleton';

interface NmapProps {
    url: string;
}

const Nmap: React.FC<NmapProps> = ({ url }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const expandToggleHandler = () => {
        setIsExpanded((prev) => !prev);
    };

    const jsonveri = {
        result: `{
          "Content-Type": "text/html; charset=ISO-8859-1",
          "Content-Security-Policy-Report-Only": "object-src 'none';base-uri 'self';script-src 'nonce-IADiUaZFdDpkXmHtiP18iQ' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp",
          "P3P": "CP=This is not a P3P policy! See g.co/p3phelp for more info.",
          "Date": "Wed, 22 May 2024 12:05:28 GMT",
          "Server": "gws",
          "X-XSS-Protection": "0",
          "X-Frame-Options": "SAMEORIGIN",
          "Transfer-Encoding": "chunked",
          "Expires": "Wed, 22 May 2024 12:05:28 GMT",
          "Cache-Control": "private",
          "Set-Cookie": "NID=514=F1efYVWd7ozlNb13D2XL_9Vq_eYGqjMOClZK2gV_Cq67NgwOohHdIMdyrkBu2xW4oG9YCQQCgA_93ixMs22fv_RYe9cfZyEuqMiYcOIgiiJNFGHAC4h9KR7X60lVX4dX-ZZ5TsnAu_qfhsCXLEicXGFT4-B6OAVhV9m3DvEWrvU; expires=Thu, 21-Nov-2024 12:05:28 GMT; path=/; domain=.google.com; HttpOnly",
          "headers": {
            "Content-Type": "text/html; charset=ISO-8859-1",
            "Content-Security-Policy-Report-Only": "object-src 'none';base-uri 'self';script-src 'nonce-IADiUaZFdDpkXmHtiP18iQ' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp",
            "P3P": "CP=This is not a P3P policy! See g.co/p3phelp for more info.",
            "Date": "Wed, 22 May 2024 12:05:28 GMT",
            "Server": "gws",
            "X-XSS-Protection": "0",
            "X-Frame-Options": "SAMEORIGIN",
            "Transfer-Encoding": "chunked",
            "Expires": "Wed, 22 May 2024 12:05:28 GMT",
            "Cache-Control": "private",
            "Set-Cookie": "NID=514=F1efYVWd7ozlNb13D2XL_9Vq_eYGqjMOClZK2gV_Cq67NgwOohHdIMdyrkBu2xW4oG9YCQQCgA_93ixMs22fv_RYe9cfZyEuqMiYcOIgiiJNFGHAC4h9KR7X60lVX4dX-ZZ5TsnAu_qfhsCXLEicXGFT4-B6OAVhV9m3DvEWrvU; expires=Thu, 21-Nov-2024 12:05:28 GMT; path=/; domain=.google.com; HttpOnly"
          },
          "nmap_output": {
            "216.58.213.100": {
              "tcp": {
                "21": {
                  "state": "filtered",
                  "service": "ftp"
                },
                "22": {
                  "state": "filtered",
                  "service": "ssh"
                },
                "80": {
                  "state": "open",
                  "service": "http"
                },
                "443": {
                  "state": "open",
                  "service": "https"
                },
                "3306": {
                  "state": "filtered",
                  "service": "mysql"
                },
                "5432": {
                  "state": "filtered",
                  "service": "postgresql"
                }
              }
            }
          }
        }`,
    };

    const [nmapOutput, setNmapOutput] = useState(null);
    useEffect(() => {
        try {
            const parsedResult = JSON.parse(jsonveri.result);
            console.log(parsedResult);
            setNmapOutput(parsedResult);
        } catch (error) {
            console.error('Failed to parse JSON:', error);
        }
    }, []);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch('http://localhost:3000/test/nmap', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${localStorage.getItem('token')}`,
    //         },
    //         body: JSON.stringify({ url }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const response = JSON.parse(data.result);
    //             console.log(response);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setIsLoading(false);
    //         });
    // }, []);

    useEffect(() => {
        console.log(
            nmapOutput['nmap_output'][
                `${Object.keys(nmapOutput['nmap_output'])}`
            ].tcp['21'].state
        );
    }, []);

    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div className="flex  text-center flex-col bg-gray-300 rounded-tl-xl rounded-bl-xl">
                    <img
                        src={data[1].image}
                        alt="ResultBox"
                        className="w-48 h-[107.5px] rounded-tl-xl p-2"
                    />
                    <p className="text-gray-600 uppercase border-t-[1px] text-sm py-[6px] border-t-gray-600">
                        {data[1].title}
                    </p>
                </div>
                {isLoading && (
                    <div
                        className={`w-2/3 relative bg-gray-800 ${
                            isExpanded ? 'h-[360px]' : 'h-[140px]'
                        } rounded-tr-xl rounded-br-xl origin-left transition-[height] duration-700 px-5 pt-2`}
                    >
                        <Skeleton />
                    </div>
                )}
                {!isLoading && nmapOutput && (
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
                                <p>{Object.keys(nmapOutput['nmap_output'])}</p>
                                <p>Headers</p>
                                <p>{nmapOutput.Date}</p>
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex flex-row rounded-lg ml-4 gap-5">
                                    <div className="flex flex-row items-center rounded-md bg-gray-500  h-6 py-1">
                                        <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                            Server:
                                        </span>
                                        <Divider />
                                        <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                            {nmapOutput.Server}
                                        </p>
                                    </div>
                                    <div className="flex flex-row items-center rounded-md bg-gray-500  h-6 py-1">
                                        <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                            Location
                                        </span>
                                        <Divider />
                                        <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                            <a href="https://ktu.edu.tr/">
                                                {url}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="flex flex-row items-center rounded-md bg-gray-500  h-6 py-1">
                                        <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                            Strict-Transport-Security:
                                        </span>
                                        <Divider />
                                        <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                            Çalışmıyor
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
                                            Çalışmıyor
                                        </p>
                                    </div>

                                    <div className="flex flex-row items-center rounded-md bg-gray-500  h-6 py-1">
                                        <span className="bg-gray-600 px-2 rounded-tl-md rounded-bl-md">
                                            Content-Type
                                        </span>
                                        <Divider />
                                        <p className="bg-gray-500 px-2 rounded-tr-md rounded-br-md">
                                            {nmapOutput['Content-Type']}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <AnimatePresence>
                                {isExpanded && (
                                    <>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={
                                                isExpanded
                                                    ? { opacity: 1 }
                                                    : { opacity: 0 }
                                            }
                                            exit={{ opacity: 0 }}
                                            className="flex justify-center my-6"
                                        >
                                            Ports
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={
                                                isExpanded
                                                    ? { opacity: 1 }
                                                    : { opacity: 0 }
                                            }
                                            exit={{ opacity: 0 }}
                                            transition={
                                                isExpanded
                                                    ? { delay: 0.2 }
                                                    : { delay: 0.5 }
                                            }
                                            className="flex space-y-6 flex-col"
                                        >
                                            <div className="flex justify-between">
                                                <NmapPort
                                                    status={
                                                        nmapOutput[
                                                            'nmap_output'
                                                        ][
                                                            `${Object.keys(
                                                                nmapOutput[
                                                                    'nmap_output'
                                                                ]
                                                            )}`
                                                        ].tcp['21'].state
                                                    }
                                                    title="FTP"
                                                />
                                                <NmapPort
                                                    status={
                                                        nmapOutput[
                                                            'nmap_output'
                                                        ][
                                                            `${Object.keys(
                                                                nmapOutput[
                                                                    'nmap_output'
                                                                ]
                                                            )}`
                                                        ].tcp['22'].state
                                                    }
                                                    title="SSH"
                                                />
                                                <NmapPort
                                                    status={
                                                        nmapOutput[
                                                            'nmap_output'
                                                        ][
                                                            `${Object.keys(
                                                                nmapOutput[
                                                                    'nmap_output'
                                                                ]
                                                            )}`
                                                        ].tcp['80'].state
                                                    }
                                                    title="HTTP"
                                                />
                                                <NmapPort
                                                    status={
                                                        nmapOutput[
                                                            'nmap_output'
                                                        ][
                                                            `${Object.keys(
                                                                nmapOutput[
                                                                    'nmap_output'
                                                                ]
                                                            )}`
                                                        ].tcp['443'].state
                                                    }
                                                    title="HTTPS"
                                                />
                                            </div>
                                            <div className="flex justify-evenly">
                                                <NmapPort
                                                    status={
                                                        nmapOutput[
                                                            'nmap_output'
                                                        ][
                                                            `${Object.keys(
                                                                nmapOutput[
                                                                    'nmap_output'
                                                                ]
                                                            )}`
                                                        ].tcp['3306'].state
                                                    }
                                                    title="MySQL"
                                                />
                                                <NmapPort
                                                    status={
                                                        nmapOutput[
                                                            'nmap_output'
                                                        ][
                                                            `${Object.keys(
                                                                nmapOutput[
                                                                    'nmap_output'
                                                                ]
                                                            )}`
                                                        ].tcp['5432'].state
                                                    }
                                                    title="postgreSQL"
                                                />
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
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
                )}
            </div>
        </>
    );
};

export default Nmap;
