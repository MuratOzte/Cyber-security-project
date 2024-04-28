//icons
import { IoMdSearch } from 'react-icons/io';
import { MdOutlineDone } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
//hooks
import {
    ChangeEventHandler,
    HTMLInputTypeAttribute,
    MouseEventHandler,
    UIEventHandler,
    useState,
} from 'react';
//components
import Loading from '../common/Loading';

const SearchBox = () => {
    const [state, setState] = useState({
        isFocused: false,
        isLoading: false,
        isDone: false,
    });
    const [url, setUrl] = useState('' as string);

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

    const searchBoxChangeHandler: ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        setUrl(e.target.value);
    };

    const searchBoxClearHandler: MouseEventHandler<SVGAElement> = (e) => {
        setUrl('');
    };

    return (
        <div className=" flex justify-center w-2/3 p-2 pb-0 relative">
            <input
                onFocus={focusToggleHandler}
                onBlur={focusToggleHandler}
                onChange={searchBoxChangeHandler}
                value={url}
                type="url"
                placeholder="Https://example.com"
                className={`p-4 w-full rounded-bl-full rounded-tl-full px-12 outline-none text-gray-600 text-pretty text-xl ${
                    state.isFocused ? 'ring-[3px] ring-green-700' : null
                }`}
            />
            {url.length > 0 && (
                <IoMdClose
                    className="absolute right-20 top-[18px] cursor-pointer"
                    color="gray"
                    size={40}
                    onClick={searchBoxClearHandler}
                />
            )}
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
