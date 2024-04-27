import { IoMdSearch } from 'react-icons/io';
import { useState } from 'react';
import Loading from '../common/Loading';

const SearchBox = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const focusToggleHandler = () => {
        setIsFocused((prev) => !prev);
    };

    const loadingToggleHandker = () => {
        setIsLoading((prev) => !prev);
    };

    return (
        <div className=" flex justify-center w-2/3 p-2">
            <input
                onFocus={focusToggleHandler}
                onBlur={focusToggleHandler}
                type="text"
                placeholder="Https://example.com"
                className={`p-4 w-full rounded-bl-full rounded-tl-full px-12 outline-none text-gray-600 text-pretty text-xl ${
                    isFocused ? 'ring-[3px] ring-green-700' : null
                }`}
            />
            <button
                className={`bg-green-700 pr-5 rounded-tr-full rounded-br-full ${
                    isFocused ? 'ring-[3px] ring-green-700' : null
                }`}
                onClick={loadingToggleHandker}
            >
                <div className='ml-3' >{isLoading ? <Loading /> : <IoMdSearch size={30} />}</div>
            </button>
        </div>
    );
};

export default SearchBox;
