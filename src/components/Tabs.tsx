import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/feature/searchSlice";
import type { RootState } from "../redux/store";


const Tabs = () => {
    const tabs = ["photos", "videos", "gifs"];

    const dispatch = useDispatch();
    const activeTab = useSelector((state: RootState) => state.search.activeTab)

    return (
        <div className="flex justify-center gap-4 mt-6">
            {tabs.map((el, idx) => (
                <button className={`${activeTab == el ? 'bg-gray-700 text-white' : 'bg-gray-400'}   p-2 rounded-2xl uppercase cursor-pointer active:scale-95 shadow-xl transition duration-500 ease-in-out`}
                    key={idx}
                    onClick={() => dispatch(setActiveTab(el))}
                >
                    {el}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
