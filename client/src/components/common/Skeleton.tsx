const Skeleton = () => {
    return (
        <div
            role="status"
            className="max-w-sm animate-pulse flex justify-center flex-col"
        >
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-1/2 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-[950px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 w-[800px]"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-[600px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-[700px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-[800px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Skeleton;
