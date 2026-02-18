import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/feature/searchSlice";

const SearchBar = () => {

    const [text, setText] = useState<string>("");
    const submitHandler = (e: React.SubmitEvent<HTMLDivElement>) => {
        e.preventDefault();
        dispatch(setQuery(text))
        setText("");

    }

    const dispatch = useDispatch();
    return (
        <div onSubmit={(e) => submitHandler(e)} className="flex justify-center w-full  bg-yellow-100">
            <form className="flex gap-2 max-w-md w-auto p-2">
                <input
                    value={text}
                    type="text"
                    placeholder="Search anything..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                     transition shadow-sm"
                    onChange={(e) => {
                        setText(e.target.value)
                        console.log(e.target.value);

                    }}
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg
                     hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400
                     transition shadow-md active:scale-95"

                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
