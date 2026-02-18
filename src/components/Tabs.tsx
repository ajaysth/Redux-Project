
const Tabs = () => {
    const tabs = ["photos", "videos", "gif"];

    return (
        <div className="flex justify-center gap-4 mt-6">
            {tabs.map((el) => (
                <button
                    key={el}
                >
                    {el.charAt(0).toUpperCase() + el.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
