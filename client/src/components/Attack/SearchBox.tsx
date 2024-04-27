//icons
import { IoMdSearch } from 'react-icons/io';
import { MdOutlineDone } from 'react-icons/md';
//hooks
import { useState } from 'react';
//components
import Loading from '../common/Loading';


const SearchBox = () => {
    const [state, setState] = useState({
        isFocused: false,
        isLoading: false,
        isDone: false,
    });

    const focusToggleHandler = () => {
        setState((prev) => {
            return { ...prev, isFocused: !prev.isFocused };
        });
    };

    const loadingToggleHandker = () => {
        setState((prev) => {
            return { ...prev, isLoading: !prev.isLoading };
        });
    };


    return (
        <div className=" flex justify-center w-2/3 p-2">
            <input
                onFocus={focusToggleHandler}
                onBlur={focusToggleHandler}
                type="url"
                placeholder="Https://example.com"
                className={`p-4 w-full rounded-bl-full rounded-tl-full px-12 outline-none text-gray-600 text-pretty text-xl ${
                    state.isFocused ? 'ring-[3px] ring-green-700' : null
                }`}
            />
            <button
                className={`bg-green-700 pr-5 rounded-tr-full rounded-br-full ${
                    state.isFocused ? 'ring-[3px] ring-green-700' : null
                }`}
                onClick={loadingToggleHandker}
            >
                <div className="ml-3">
                    {state.isLoading ? (
                        <Loading />
                    ) : state.isDone ? (
                        <MdOutlineDone className="text-3xl text-white" />
                    ) : (
                        <IoMdSearch className="text-3xl text-white" />
                    )}
                </div>
            </button>
        </div>
    );
};

export default SearchBox;
